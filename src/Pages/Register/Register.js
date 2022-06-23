import React from 'react'
import { Link } from 'react-router-dom'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from '@fortawesome/fontawesome-free-solid'
import style from './Register.module.css'

fontawesome.library.add(faArrowLeft);

const Register = () => {
  return (
    <div className={`${style['signup']}`}>
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="signup_img">
                        <img src="/img/login.png" alt="" className={style.signup_img} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className={`${style['signup-container']} mb-4`}>
                        <form className={style.signup_form}>
                            <Link to="/login"><div className="d-lg-none mb-3"><FontAwesomeIcon icon="fa-arrow-left" className={`${style['fa-arrow-left']}`}/></div></Link>
                            <img src="/img/logo.png" alt="logo-img" className="logo-img" width="180" />
                            <h3 className={`${style['title-signup']} mb-3`}>Sign Up</h3>
                                <div className="mb-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" className={`${style['signup-field']} form-control`} placeholder="Contoh: John Dee" autoComplete="true" data-testid="input-name"/>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className={`${style['signup-field']} form-control`} placeholder="Contoh: johndee@gmail.com" autoComplete="true" data-testid="input-email"/>
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="user_password">Password</label>
                                    <input type="password" name="user_password" id="user_password" className={`${style['signup-field']} form-control`} placeholder="6+ karakter" autoComplete="true" data-testid="input-password"/>
                                </div>
                            <button type="submit" className={`${style['btn_primary']} btn mt-3 mb-4`}>Sign Up</button>
                            <p className={`${style.register_text} text-center`}>Already have an account? <Link to="/login" className={`${style['redirect-text']}`} data-testid="button">Login</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register