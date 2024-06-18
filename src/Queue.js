const Queue = ({ name, members }) => {
    return (
        <div className="queue">
            <p>{name}</p>
            <ol>
                {members
                .map((member, index) => index < 3 
                                        ? <li key={member.id} className="normal-item">{member.name}</li>
                                        : <li key={member.id} className="dotted-item">...</li>)
                .filter((value, index) => index < 4)}
            </ol>
        </div>
    )
}

export default Queue;