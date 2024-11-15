function CandidateCard(props: any) {
    return (
        <div className="candidate-card">
            <img className="candidate-avatar" src={props.avatar_url}></img>
            <a className="candidate-name" href={props.html_url}>{props.login}</a>
            <p>Location: {props.location}</p>
            <p>Email: {props.email}</p>
            <p>Company: {props.company}</p>
            <p>Bio: {props.bio}</p>
            <div className="button-container">
                <button className="button-pass" onClick={() => props.onRemove(props.login)}>Pass</button>
                <button className="button-save" onClick={() => props.onSave(props.login)}>Save</button>
            </div>
        </div>
    )
}

export default CandidateCard