import React, { useState } from 'react';
import classes from './Dropdown.css';
import { Link } from 'react-router-dom';

const Dropdown = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    return (
        <>
            
            <ul onClick={handleClick} className={click ? classes["dropdown-clicked"] : classes["dropdown"]}>
                <li className={classes["dropdown-list"]} key="1">
                    <Link className={classes["dropdown-link"]}>
                        Login
                    </Link>
                </li>
                <li className={classes["dropdown-list"]} key="2">
                    <Link className={classes["dropdown-link"]}>
                        Register
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Dropdown;