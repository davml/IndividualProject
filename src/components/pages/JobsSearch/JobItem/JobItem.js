import React, { useState } from 'react';
import classes from './JobItem.css';
import image from '../../../../assets/images/coding.jpg';

const JobItem = (props) => {
    return (
        <>
            <div className={classes["item-wrapper"]}>
                <div className={classes["job-item"]}>
                    <div className={classes["job-info"]}>
                        <div className={classes["job-heading"]}>Job Heading</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobItem;