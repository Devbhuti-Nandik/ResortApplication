import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/icon.png';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';


function Nav()
{
    const [isTrue, setIsTrue] = useState(false);
    function handleClick()
    {
        setIsTrue(!isTrue);
    }
    return(
        <nav className="navbar">
            <div className="nav-heading">
                <Link to="/">
                    <img className="nav-logo" src={logo} alt="Sky Resort Logo"/>
                </Link>
                <ul className={isTrue?"nav-links show-nav":"nav-links"}>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/rooms/">
                        <li>Rooms</li>
                    </Link>
                </ul>
                <button className="nav-btn" onClick={handleClick}>
                    <FormatAlignRightIcon className="nav-icon"/>
                </button>
            </div>
        </nav>
    );
}
export default Nav;