import React, { useState } from 'react';

import classes from './About.css';

const About = () => {

    const [click, setClick] = useState(true);
    const toggleClick = () => setClick(!click);


    return (
        <>
            <div className={classes["about-container"]}>
                <div className={classes["about-wrapper"]}>
                    <div className={classes["about-info"]}>
                        <div className={classes["p1-wrapper"]}>
                            <p className={classes["p p1"]}>On Your Terms is a platform which supports binding the relationship between employers and freelancers.
                            It is a network consisting of very talented individuals seeking employment opportunities provided by many companies. We pride ourself
                            in our ability to do the job search for you, we strive to provide the best opportunities personalised to each individual user.</p>
                        </div>
                    </div>
                    <div className={classes["help-selection"]}>
                        <button className={click ? classes["selected-btn"] : classes["btn"]} onClick={toggleClick}>Freelancer</button>
                        <button className={click ? classes["btn"] : classes["selected-btn"]} onClick={toggleClick}>Employer</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;