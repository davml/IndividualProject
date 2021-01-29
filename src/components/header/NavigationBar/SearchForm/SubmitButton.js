import React from 'react';
import classes from './SubmitButton.css';
import {Link} from 'react-router-dom';

export function SubmitButton() {
    return(
        <Link to="search">
            <button type="submit" className={classes['SubmitButton']}><i class="fas fa-search"></i></button>
        </Link>
    );
}