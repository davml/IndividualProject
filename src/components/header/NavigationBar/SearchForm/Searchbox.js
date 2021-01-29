import React from 'react';
import classes from './Searchbox.css';
import {Link} from 'react-router-dom';

export function Searchbox() {
    return(
        <input className={classes["Searchbox"]} type="text" placeholder="Search..."/>
    );
}