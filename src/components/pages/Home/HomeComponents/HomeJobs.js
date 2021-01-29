import React from 'react';
import classes from '../Home.css';

const HomeJobs = () => {
    return (
        <div className={classes["home-jobs"]}>
            <div className={classes["job-types"]}>
                <i class="fas fa-laptop-code"></i>
                <p className={classes["text-info"]}>Web Development</p>
            </div>
            <div className={classes["job-types"]}>
                <i class="fas fa-palette"></i>
                <p className={classes["text-info"]}>Graphic Design</p>
            </div>
            <div className={classes["job-types"]}>
                <i class="fas fa-camera"></i>
                <p className={classes["text-info"]}>Photography</p>
            </div>
            <div className={classes["job-types"]}>
                <i class="fas fa-language"></i>
                <p className={classes["text-info"]}>Translator</p>
            </div>
            <div className={classes["job-types"]}>
                <i class="fas fa-mobile"></i>
                <p className={classes["text-info"]}>App Development</p>
            </div>
            <div className={classes["job-types"]}>
                <i class="fas fa-pen"></i>
                <p className={classes["text-info"]}>Copywriter</p>
            </div>
            <div className={classes["job-types"]}>
                <i class="fas fa-database"></i>
                <p className={classes["text-info"]}>Data Entry</p>
            </div>
            <div className={classes["job-types"]}>
                <i class="fas fa-graduation-cap"></i>
                <p className={classes["text-info"]}>Tutoring</p>
            </div>
            <div className={classes["job-types"]}>
                <i class="fab fa-hire-a-helper"></i>
                <p className={classes["text-info"]}>Personal Assistant</p>
            </div>
            <div className={classes["job-types"]}>
                <i class="fas fa-paint-brush"></i>
                <p className={classes["text-info"]}>Painter</p>
            </div>
        </div>
    );
}

export default HomeJobs;