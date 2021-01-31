import React, { useState, useRef } from 'react';
import classes from './SignUpModal.css';
import ReactDom from 'react-dom';
import img from '../../../../assets/images/freelancegir.jpg';
import oytimg from '../../../../assets/images/onyourterms.png'
import { useAuth } from '../../../../contexts/AuthContext'
import { useHistory } from "react-router-dom"

const AccountModal = (props) => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const[error,setError] = useState('')
    const[loading, setLoading] = useState(false)

    const { login } = useAuth()
    const { signup } = useAuth()

    const history = useHistory()

    async function handleRegister(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Passwords do not match.');
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }
        catch {
            setError('Failed to create account.')
        }
        setLoading(false)
    }

    async function handleLogin(e){
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        }
        catch {
            setError('Failed to login.')
        }
        setLoading(false)
    }


    const [click, setClick] = useState(true);
    const toggleClick = () => setClick(!click);
    let selection;
    if(click){
        selection=(
            <>
            {error && <alert varient="danger">{error}</alert>}
            <form onSubmit={handleRegister} className={classes["form-contents"]}>
                <input type="email" placeholder="Email Address" className={classes["form-element"]} ref={emailRef} required/>
                <input type="password" placeholder="Password" className={classes["form-element"]} ref={passwordRef} required/>
                <input type="password" placeholder="Re-enter Password" className={classes["form-element"]} ref={passwordConfirmRef} required/>
                <button disabled={loading} type="submit" className={classes["form-submit"]}>Register</button>
                <div className={classes["oyt-div"]}>
                    <img src={oytimg} className={classes["oyt-img"]}/>
                </div>
            </form>
            </>
        )
    }
    else {
        selection = (
            <>
            {error && <alert varient="danger">{error}</alert>}
            <form onSubmit={handleLogin} className={classes["form-contents"]}>
                <input type="email" placeholder="Email Address" className={classes["form-element"]} ref={emailRef} required/>
                <input type="password" placeholder="Password" className={classes["form-element"]} ref={passwordRef} required/>
                <button type="submit" className={classes["form-submit"]}>Login</button>
                <div className={classes["oyt-div"]}>
                    <img src={oytimg} className={classes["oyt-img"]}/>
                </div>
            </form>
            </>
        )
    }


    if(props.modal) {
        return ReactDom.createPortal(
            <>
                <div className={classes["modal-background"]} onClick={props.toggle} />

                
                <div className={classes["modal"]}>
                    <div className={classes["modal-content"]}>

                        <div className={classes["account"]}>
                            <div className={classes["help-selection"]}>
                                <button className={click ? classes["selected-btn"] : classes["btn"]} onClick={toggleClick}>Register</button>
                                <button className={click ? classes["btn"] : classes["selected-btn"]} onClick={toggleClick}>Login</button>
                            </div>

                            <div className={classes["account-form"]}>
                                {selection}
                            </div>
                        </div>

                        <div className={classes["img-container"]}>
                            <img src={img} className={classes["img"]}/>
                        </div>
                    </div>
                </div>
            </>,
            document.getElementById('portal')
        );
    }
    else {
        return null;
    }
}

export default AccountModal;