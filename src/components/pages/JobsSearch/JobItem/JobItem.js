import React, { useState } from 'react';
import classes from './JobItem.css';
import image from '../../../../assets/images/coder.jpg';

const JobItem = (props) => {
    return (
        <>
            <div className={classes["item-wrapper"]}>
                <div className={classes["job-item"]}>
                    <div className={classes["job-img"]}>
                        <img src={image} className={classes["image"]}/>
                        <div className={classes["overlay-text-1"]}>
                            Software Developer
                        </div>
                        <div className={classes["overlay-text-2"]}>
                            <p>
                                <i class="far fa-money-bill-alt"></i> £250
                                <br/>
                                <i class="far fa-clock"></i> 16/03/2021
                            </p>
                        </div>
                    </div>

                    <div className={classes["job-description"]}>
                        <div className={classes["heading"]}>
                            Description:
                        </div>
                        <div className={classes["description"]}>
                            Software Engineer required for my client, an Oil and Gas linked with business based in Aberdeen.
                        </div>
                        <div className={classes["more-info"]}>
                            <button type="submit" className={classes["more-button"]}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JobItem;