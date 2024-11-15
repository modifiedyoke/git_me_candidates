import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  // done TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage: string = useLocation().pathname;

  return (
    <div >
      <ul className='nav'>
        <li className='nav-item'>
          <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
            Search
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/SavedCandidates' className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}>
            Saved
          </Link>
        </li>
      </ul>
    </div>
  )
};

export default Nav;
