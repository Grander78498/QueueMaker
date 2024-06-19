import { useState } from "react";
import { Navigate } from "react-router";

const Queue = ({ id, name, members }) => {
    const [queueRedirect, setQueueRedirect] = useState(false);

    if (queueRedirect) {
        return <Navigate to={`/queue/${id}`} />
    }

    return (
        <button className="queue" onClick={(e) => {
            setQueueRedirect(true);
        }}>
            <p>{name}</p>
            <ol>
                {members
                .map((member, index) => index < 3 
                                        ? <li key={member.id} className="normal-item">{member.name}</li>
                                        : <li key={member.id} className="dotted-item">...</li>)
                .filter((value, index) => index < 4)}
            </ol>
        </button>
    )
}

export default Queue;