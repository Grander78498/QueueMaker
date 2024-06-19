import image from './mozilla.png';
import buttonImage from './add-button.png'
import { useState, useEffect } from 'react';
import QueueAdder from './QueueAdder';

const Header = () => {
    const [blur, setBlur] = useState(false);

    useEffect(() => {
        const header = document.querySelector(".navbar");
        const body = document.querySelector(".main-content");
        if (blur) {
            header.classList.remove("unblurred");
            body.classList.remove("unblurred");
            header.classList.add("blurred");
            body.classList.add("blurred");
        }
        else {
            header.classList.remove("blurred");
            body.classList.remove("blurred");
            header.classList.add("unblurred");
            body.classList.add("unblurred");
        }
    }, [blur]);

    return (
        <>
            <div className="navbar">
                <h2>QueueMaker</h2>
                <div className="navbar-buttons">
                    <button onClick={() => {
                        setBlur(prev => !prev);
                    }}>
                        <img src={buttonImage} alt='Add button'></img>
                    </button>
                    <button>
                        <img src={image} alt="Firefox logo"/>
                    </button>
                </div>
            </div>
            {blur && <QueueAdder closeClick={setBlur}/>}
        </>
    )
}

export default Header;