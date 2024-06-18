import Queue from "./Queue";

const QueueList = () => {
    const queueList = [
        {name: "Говно", members: ["Я", "Ещё раз я"]},
        {name: "Моча", members: ['Лёня', 'Егор']}
    ]
    const queueElements = queueList.map(queue => {
        return <Queue name={queue.name} members={queue.members}/>
    })
    return (
        <div>
            <p>Ваши очереди:</p>
            {queueElements}
        </div>
    )
}

export default QueueList;