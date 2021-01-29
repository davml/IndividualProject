import React from 'react';
import classes from '../Home.css';

const HomeSearch = () => {
    return (
        <div className={classes["home-search"]}>
            <p>Search for your job, on your terms...</p>
            <button className={classes["properties"]}><i class="fas fa-arrow-down"></i></button>
            <input type="text" className={classes["searchbox"]} placeholder="Search..."/>
            <button type="submit" className={classes["submit-search"]}><i class="fa fa-search"></i></button>
        </div>
    );
}

export default HomeSearch;