import React from 'react';
import classes from '../Home.css';

const HomeInfo = () => {
    return (
        <div className={classes["home-info"]}>
            <div className={classes["job-search"]}>
                <h1 className={classes["job-heading"]}>Freelancers</h1>
                <p className={classes["text-info-2"]}><i class="fas fa-clock"></i> Search for jobs which work on your terms</p>
                <p className={classes["text-info-2"]}><i class="fas fa-robot"></i> Allow our system to do the job search for you</p>
                <p className={classes["text-info-2"]}><i class="fas fa-smile"></i> Reep the benefits of the easiest job search ever</p>
            </div>
            <div className={classes["job-search"]}>
                <h1 className={classes["job-heading"]}>Employers</h1>
                <p className={classes["text-info-2"]}><i class="fas fa-share"></i> Share job vacancies on our site</p>
                <p className={classes["text-info-2"]}><i class="fas fa-robot"></i> Allow our system to send your roles to suited freelancers</p>
                <p className={classes["text-info-2"]}><i class="fas fa-smile"></i> Reep the benefits of the easiest job recruitment ever</p>
            </div>
        </div>
    );
}

export default HomeInfo;