const Queue = ({ name, members }) => {
    return (
        <div className="queue">
            <p>{name}</p>
            <ul>
                {members.map(member => <li key={member.id}>{member.name}</li>)}
            </ul>
        </div>
    )
}

export default Queue;