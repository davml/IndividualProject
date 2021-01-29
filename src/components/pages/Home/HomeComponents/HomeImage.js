import React, { useState } from 'react';
import homeImage from '../../../../assets/images/imac.jpg';
import classes from '../Home.css';
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';

const HomeImage = (props) => {
    const session = props.session;

    const [modal, setModal] = useState(false);
    const toggleModal = () => setModal(!modal);
    const disableModal = () => setModal(false);

    const [login, setLogin] = useState(false);
    const toggleLogin = () => setLogin(!login);
    const disableLogin = () => setLogin(false);

    function openLogin(){
        disableModal();
        toggleLogin();
    }

    function openRegister(){
        disableLogin();
        toggleModal();
    }

    if (session){
        return (
            <div className={classes["img-container"]}>
                <img src={homeImage} className={classes["home-image"]}/>
                <div class={classes["img-txt"]}>On Your Time <br/>On Your Rate <br/>On Your Terms</div>
            </div>
        );
    }
    else {
        return (
            <div className={classes["img-container"]}>
                <img src={homeImage} className={classes["home-image"]}/>


                <div class={classes["img-txt"]}>On Your Time <br/>On Your Rate <br/>On Your Terms</div>

                
                <div class={classes["img-signup"]}>
                    <button type="submit" className={classes['signup-button']} onClick={toggleModal}>Sign Up Today</button>
                    <SignUpModal modal={modal} toggle={toggleModal} loginModal={login} toggleLogin={toggleLogin} open={openLogin}/>
                    <SignInModal modal={modal} toggle={toggleModal} loginModal={login} toggleLogin={toggleLogin} open={openRegister}/>
                </div>
            </div>
        );
    }
}

export default HomeImage;