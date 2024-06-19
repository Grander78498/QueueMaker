import Queue from "./Queue";
import useFetch from "./useFetch";

const QueueList = () => {

    let [queueList, isFetching] = useFetch('http://localhost:8000/queue');

    return (
        <div className="main-content">
            <p>Ваши очереди:</p>
            {!isFetching && queueList && <div className="queue-list">{
                queueList.map(queue => {
                    return <Queue id={queue.id} key={queue.id} name={queue.name} members={queue.members}/>
                })
            }</div>}
            {!isFetching && !queueList && <p>Пока что у вас нет очередей ((</p>}
            {isFetching && <div className="loading"></div>}
        </div>
    )
}

export default QueueList;