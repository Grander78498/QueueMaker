import image from './mozilla.png';
import buttonImage from './add-button.png'

const Header = () => {
    return (
        <div className="navbar">
            <h2>QueueMaker</h2>
            <div className="navbar-buttons">
                <button>
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