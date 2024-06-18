const Queue = ({ name, members }) => {
    return (
        <div>
            <p>Название очереди: {name}</p>
            <ul>
                {members.map(member => <li>{member}</li>)}
            </ul>
        </div>
    )
}

export default Queue;