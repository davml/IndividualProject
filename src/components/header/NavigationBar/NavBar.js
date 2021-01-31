import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import classes from './NavBar.css';
import logo from '../../../assets/images/onyourterms.png';
import {SubmitButton} from './SearchForm/SubmitButton';
import {Searchbox} from './SearchForm/Searchbox';
import Dropdown from './Dropdown/Dropdown';
import {useAuth} from '../../../contexts/AuthContext';

const NavBar = () => {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()

    let display;
    const[session, setSession] = useState(false)

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else{
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false);
        }
        else {
            setDropdown(false);
        }
    }

    if(!currentUser){
        display = (
            <>
                <Link to='/' className={classes.logo}>
                    <img src={logo} alt="On Your Terms"/>
                </Link>

                <ul className={classes.navmenu}>
                    <li className={classes.navitem}>
                        <Link to='/' className={classes.navlink}>
                            Home
                        </Link>
                    </li>
                    <li className={classes.navitem}>
                        <Link to='/about' className={classes.navlink}>
                            About Us
                        </Link>
                    </li>


                    <li className={classes.navitem}>
                        <Link to='/business' className={classes.navlink}>
                            OYT Business
                        </Link>
                    </li>

                    <li className={classes.navitem}>
                        <Link to='/about' className={classes.navlink}>
                            Register/Login
                        </Link>
                    </li>

                    <li className={classes.navitem}>
                        <div className={classes["SearchForm"]}>
                            <Searchbox/>
                            <SubmitButton/>
                        </div>
                    </li>
                </ul>
            </>
        )
    }
    else {
        display = (
            <>
                <Link to='/' className={classes.logo}>
                    <img src={logo} alt="On Your Terms"/>
                </Link>

                <ul className={classes.navmenu}>
                    <li className={classes.navitem}>
                        <Link to='/' className={classes.navlink}>
                            Home
                        </Link>
                    </li>
                    <li className={classes.navitem}>
                        <Link to='/about' className={classes.navlink}>
                            About Us
                        </Link>
                    </li>

                    <li className={classes.navitem}>
                        <Link to='/business' className={classes.navlink}>
                            OYT Business
                        </Link>
                    </li>

                    <li className={classes.navitem} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link className={classes.navlink}>
                            Account <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>

                    
                    <li className={classes.navitem}>
                        <div className={classes["SearchForm"]}>
                            <Searchbox/>
                            <SubmitButton/>
                        </div>
                    </li>

                    
                    
                </ul>

            </>
        );
    }

    return (
        <nav className={classes.navbar}>
            {display}
        </nav>
    );
}

export default NavBar;