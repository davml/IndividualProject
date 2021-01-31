import React, { useState } from 'react';
import homeImage from '../../../../assets/images/imac.jpg';
import classes from '../Home.css';
import AccountModal from './AccountModal';
import { AuthProvider } from '../../../../contexts/AuthContext';

const HomeImage = (props) => {
    const session = props.session;

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);

    if (session){
        return (
            <div className={classes["img-container"]}>
                <img src={homeImage} className={classes["home-image"]}/>
                <div className={classes["img-txt"]}>On Your Time <br/>On Your Rate <br/>On Your Terms</div>
            </div>
        );
    }
    else {
        return (
            <div className={classes["img-container"]}>
                <img src={homeImage} className={classes["home-image"]}/>
                <div className={classes["img-txt"]}>On Your Time <br/>On Your Rate <br/>On Your Terms</div>

                <div className={classes["img-signup"]}>
                    <button type="submit" className={classes['signup-button']} onClick={toggleModal}>Sign Up Today</button>
                    <AccountModal modal={modal} toggle={toggleModal}/>
                </div>
            </div>
        );
    }
}

export default HomeImage;