import Queue from "./Queue";

const QueueList = () => {
    const queueList = [
        {id: 1, name: "Говно", members: [
            {name: "Я", id: 1}, {name: "Ещё раз я", id: 2}]},
        {id: 2, name: "Моча", members: [
            {name: "Лёня", id: 1}, {name: "Егор", id: 2}]}
    ]
    const queueElements = queueList.map(queue => {
        return <Queue key={queue.id} name={queue.name} members={queue.members}/>
    })
    return (
        <div className="main-content">
            <p>Ваши очереди:</p>
            <div className="">{queueElements}</div>
        </div>
    )
}

export default QueueList;