import React, { useState } from 'react';
import classes from './JobsSearch.css';
import JobItem from './JobItem/JobItem';

const JobsSearch = (props) => {
    return (
        <>
            <div className={classes["search-wrapper"]}>
                <div className={classes["jobs-wrapper"]}>
                    <div className={classes["refine-search"]}>
                        <div className={classes["properties-container"]}>
                            <div className={classes["query"]}>
                                <p>Search Results For: <br/><i>Mobile App Developer</i></p>
                            </div>

                            <div className={classes["properties"]}>
                                <select name="category" id="category" className={classes["category-dropdown"]}>
                                    <option value="category-default">Default</option>
                                    <option value="mobile-apps">Mobile Applications</option>
                                    <option value="web-apps">Web Applications</option>
                                    <option value="graphic-design">Graphic Design</option>
                                </select>

                                <select name="category" id="category" className={classes["category-dropdown"]}>
                                    <option value="category-default">Default</option>
                                    <option value="mobile-apps">Mobile Applications</option>
                                    <option value="web-apps">Web Applications</option>
                                    <option value="graphic-design">Graphic Design</option>
                                </select>
                                <select name="category" id="category" className={classes["category-dropdown"]}>
                                    <option value="category-default">Default</option>
                                    <option value="mobile-apps">Mobile Applications</option>
                                    <option value="web-apps">Web Applications</option>
                                    <option value="graphic-design">Graphic Design</option>
                                </select>
                            </div>
                        </div>
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