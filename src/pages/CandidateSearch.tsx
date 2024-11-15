import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import CandidateCard from '../components/CandidateCard';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {

  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    fetchCandidates();
  }

  const fetchCandidates = () => {

    setIsLoading(true);
    const detailsArray: Candidate[] = [];

    searchGithub()
      .then((r) => r.forEach((candidate) => {
        searchGithubUser(candidate.login)
          .then((details) => (details) ? detailsArray.push(details) : console.log(`skipped ${candidate.login}`))
          .then(() => setCandidates(detailsArray));
      }))
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleRemoveCard = (login: string) => {
    console.log(login);
    setCandidates((prevCards) => prevCards.filter((card) => card.login !== login));
  };

  const handleSaveCandidate = (login: string) => {
    console.log(login);

    setCandidates((prevCards) => prevCards.filter((card) => card.login !== login));
  };

  const cards = candidates.map((c) => {
    return (
      <CandidateCard
        key={c.id} {...c} onRemove={handleRemoveCard} onSave={handleSaveCandidate}
      />
    )
  })

  return (
    <>
      <h1>CandidateSearch</h1>
      <button name='randomSearch' onClick={handleButtonClick}>Refresh</button>
      <div className='table'>
        {cards}
      </div>
    </>
  );
};

export default CandidateSearch;
