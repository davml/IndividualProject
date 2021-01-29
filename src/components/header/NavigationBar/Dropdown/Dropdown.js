import React, { useState } from 'react';
import classes from './Dropdown.css';
import { Link } from 'react-router-dom';
import SignUpModal from '../../../pages/Home/HomeComponents/SignUpModal';
import SignInModal from '../../../pages/Home/HomeComponents/SignInModal';

const Dropdown = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

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

    return (
        <>
            
            <ul onClick={handleClick} className={click ? classes["dropdown-clicked"] : classes["dropdown"]}>
                <li className={classes["dropdown-list"]} key="1">
                    <Link className={classes["dropdown-link"]} onClick={()=>{setClick(false); toggleLogin();}}>
                        Login
                    </Link>
                    <SignUpModal modal={modal} toggle={toggleModal} loginModal={login} toggleLogin={toggleLogin} open={openLogin}/>
                    <SignInModal modal={modal} toggle={toggleModal} loginModal={login} toggleLogin={toggleLogin} open={openRegister}/>
                </li>
                <li className={classes["dropdown-list"]} key="2">
                    <Link className={classes["dropdown-link"]} onClick={()=>{setClick(false); toggleModal();}}>
                        Register
                    </Link>
                    <SignInModal modal={modal} toggle={toggleModal} loginModal={login} toggleLogin={toggleLogin} open={openRegister}/>
                    <SignUpModal modal={modal} toggle={toggleModal} loginModal={login} toggleLogin={toggleLogin} open={openLogin}/>
                </li>
            </ul>
        </>
    );
}

export default Dropdown;