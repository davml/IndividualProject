import React from 'react';
import classes from './SignUpModal.css';
import ReactDom from 'react-dom';
import img from '../../../../assets/images/onyourterms.png';

const SignUpModal = (props) => {

    if(props.modal) {
        return ReactDom.createPortal(
            <>
                <div className={classes["modal-background"]} onClick={props.toggle} />
                <div className={classes["modal"]}>
                    <i class="fas fa-times" onClick={props.toggle}></i>
                    <div className={classes["modal-content"]}>
                        <h1 className={classes["modal-heading"]}>Join Below</h1>
                        <div className={classes["modal-form"]}>
                            <form className={classes["form-contents"]}>
                                <input type="email" placeholder="Email Address" className={classes["form-element"]} required/>
                                <input type="password" placeholder="Password" className={classes["form-element"]} required/>
                                <input type="password" placeholder="Re-enter Password" className={classes["form-element"]} required/>
                                <button type="submit" className={classes["form-submit"]}>Register</button>
                            </form>
                        </div>
                        <div className={classes["modal-img"]}>
                            <img src={img} className={classes["oyt-img"]}/>
                            <div className={classes["alternate"]}>
                                <p>Already got an account?</p>
                                <button type="submit" className={classes["alt-button"]} onClick={props.open}>Login</button>
                            </div>
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

export default SignUpModal;