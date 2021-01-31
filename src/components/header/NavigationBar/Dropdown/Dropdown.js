import React, { useState } from 'react';
import classes from './Dropdown.css';
import { Link, useHistory } from 'react-router-dom';
import {useAuth} from '../../../../contexts/AuthContext';

const Dropdown = () => {

    const history = useHistory()

    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    async function handleLogout() {
        setError('')
        try {
            await logout()
            history.push('/')
        } catch {
            setError('Failed to logout')
        }
    }


    return (
        <>
            
            <ul onClick={handleClick} className={click ? classes["dropdown-clicked"] : classes["dropdown"]}>
                <li className={classes["dropdown-list"]} key="1">
                    <Link className={classes["dropdown-link"]}>
                        My Account
                    </Link>
                </li>
                <li onClick={handleLogout}className={classes["dropdown-list"]} key="2">
                    <Link className={classes["dropdown-link"]}>
                        Logout
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Dropdown;