import React from 'react'
import { Link } from 'react-router-dom'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/fontawesome-free-solid'
import style from './Login.module.css'

fontawesome.library.add(faArrowLeft);

const Login = () => {
  return (
    <div className={`${style['signin']} col`}>
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="signin_img">
                        <img src="/img/login.png" alt="" className={style.signin_img} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={`${style['signin-container']} mb-4`}>
                        <form className={style.signin_form}>
                        <Link to="/"><div className="d-lg-none mb-3"><FontAwesomeIcon icon="fa-arrow-left" className={`${style['fa-arrow-left']}`}/></div></Link>
                            <img src="/img/logo.png" alt="logo-img" className="logo-img" width="180" />
                            <h3 className={`${style['title-signin']} mb-3`}>Login</h3>
                                <div className="mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className={`${style['signin-field']} form-control`} placeholder="Contoh: johndee@gmail.com" autoComplete="true" data-testid="input-email"/>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="user_password">Password</label>
                                    <input type="password" name="user_password" id="user_password" className={`${style['signin-field']} form-control`} placeholder="6+ karakter" autoComplete="true" data-testid="input-password"/>
                                </div>
                            <button type="submit" className={`${style['btn_primary']} btn mt-3 mb-4`}>Log In</button>
                            <p className={`${style.signin_text} text-center`}>Don't have an account? <Link to="/register" className={`${style['redirect-text']}`} data-testid="button">Register Now</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login