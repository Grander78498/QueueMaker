import Queue from "./Queue";
import { useState, useEffect } from 'react';

const QueueList = () => {
    let [queueList, setQueueList] = useState(null);
    let [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        setTimeout(() => fetch("http://localhost:8000/queue")
            .then(res => {
                if (!res.ok) {
                    throw new Error("Error in connecting to db");
                }
                return res.json();
            })
            .then(data => {
                setQueueList(data);
                setIsFetching(false);
            })
            .catch(err => {
                console.log(err.message);
            }), 1000);
    }, []);

    return (
        <div className="main-content">
            <p>Ваши очереди:</p>
            {!isFetching && queueList && <div className="">{
                queueList.map(queue => {
                    return <Queue key={queue.id} name={queue.name} members={queue.members}/>
                })
            }</div>}
            {!isFetching && !queueList && <p>Пока что у вас нет очередей ((</p>}
            {isFetching && <p>Загрузка очередей</p>}
        </div>
    )
}

export default QueueList;