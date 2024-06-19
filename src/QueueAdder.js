import { useState, useEffect } from 'react';
import closeButton from './close-button.png'

const QueueAdder = ({closeClick}) => {

    return (
        <div className="queue-adder">
            <p>Добавление очереди</p>
            <button onClick={() => closeClick(false)}>
                <img src={closeButton} alt="Close button"/>
            </button>
        </div>
    )
}

export default QueueAdder;