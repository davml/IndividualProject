import React, { useState } from 'react';
import classes from './JobsSearch.css';
import JobItem from './JobItem/JobItem';

const JobsSearch = (props) => {
    return (
        <>
            <div className={classes["search-wrapper"]}>
                <div className={classes["jobs-wrapper"]}>
                    <div className={classes["refine-search"]}>
                    </div>

                    <div className={classes["search-results"]}>
                        <div className={classes["job-item"]}>
                            <JobItem />
                        </div>
                        <div className={classes["job-item"]}>
                            <JobItem />
                        </div>
                        <div className={classes["job-item"]}>
                            <JobItem />
                        </div>
                        <div className={classes["job-item"]}>
                            <JobItem />
                        </div>
                        <div className={classes["job-item"]}>
                            <JobItem />
                        </div>
                        <div className={classes["job-item"]}>
                            <JobItem />
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobsSearch;