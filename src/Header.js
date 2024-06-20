import image from './mozilla.png';
import buttonImage from './add-button.png';

const Header = ({showQueueAdder, setShow}) => {
    const blurClasses = ["", " blurred", " unblurred"];
    const isBlurred = blurClasses[showQueueAdder];

    return (
        <div className={"navbar" + isBlurred}>
            <h2>QueueMaker</h2>
            <div className="navbar-buttons">
                <button onClick={() => setShow(1)}>
                    <img src={buttonImage} alt='Add button'></img>
                </button>
                <button>
                    <img src={image} alt="Firefox logo"/>
                </button>
            </div>
        </div>
    )
}

export default Header;