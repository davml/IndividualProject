import React, { useState } from 'react';
import classes from '../../../App.css';
import HomeImage from './HomeComponents/HomeImage';
import HomeInfo from './HomeComponents/HomeInfo';
import HomeJobs from './HomeComponents/HomeJobs';
import HomeSearch from './HomeComponents/HomeSearch';

const Home = (props) => {

    const [session, setSession] = useState(false);

    return (
        <div className={classes["home"]}>
                <HomeImage session={session}/>
                <HomeInfo />
                <HomeJobs />
                <HomeSearch />
        </div>
    );
}

export default Home;