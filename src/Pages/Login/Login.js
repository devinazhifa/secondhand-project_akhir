import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import userSlice from "../../store/user";
import axios from "axios";
import requestAPI from "../../requestMethod";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import style from "./Login.module.css";
import notificationSlice from "../../store/notification";

fontawesome.library.add(faArrowLeft);

const Login = () => {
  const { register, handleSubmit, formState } = useForm();
  const [loginStatus, setLoginStatus] = useState({
    succes: false,
    message: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmitHandler = (data) => {
    const postData = {
      name: data.user_name,
      email: data.user_email,
      password: data.user_password,
    };
    requestAPI()
      .post("/auth/login", postData)
      .then((res) => {
        if (typeof res.data.data.token !== "undefined") {
          // menyimpan token di local storage
          // localStorage.setItem('secondHandToken', res.data.data.token);
          // console.log(res);
          dispatch(userSlice.actions.addUser(res.data.data));
          dispatch(notificationSlice.actions.removeNotification(res.data.data));
          navigate("/");
        }
      })
      .catch((err) => {
        setLoginStatus({
          success: false,
          message: "Sorry, something is wrong. Try again later.",
        });
        // console.log(err)
      });
  };

  return (
    <div className={`${style["signin"]} col`}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="signin_img">
              <img src="/img/login.png" alt="" className={style.signin_img} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`${style["signin-container"]} mb-4`}>
              <form
                className={style.signin_form}
                onSubmit={handleSubmit(formSubmitHandler)}
              >
                <Link to="/">
                  <div className="d-lg-none mb-3">
                    <FontAwesomeIcon
                      icon="fa-arrow-left"
                      className={`${style["fa-arrow-left"]}`}
                    />
                  </div>
                </Link>
                <img
                  src="/img/logo.png"
                  alt="logo-img"
                  className="logo-img"
                  width="180"
                />
                <h3 className={`${style["title-signin"]} mb-3`}>Login</h3>
                {!loginStatus.succes && loginStatus.message && (
                  <p className={`${style["message-text"]} fst-italic`}>
                    {loginStatus.message}
                  </p>
                )}
                <div className="mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`${style["signin-field"]} form-control`}
                    placeholder="Contoh: johndee@gmail.com"
                    {...register("user_email", { required: true })}
                    autoComplete="true"
                  />
                  <p className={`${style["message-text"]} fst-italic`}>
                    {formState.errors.user_email?.type === "required" &&
                      "Email is required"}
                  </p>
                </div>
                <div className="mb-2">
                  <label htmlFor="user_password">Password</label>
                  <input
                    type="password"
                    name="user_password"
                    id="user_password"
                    className={`${style["signin-field"]} form-control`}
                    placeholder="Must contain 6+ characters with at least 1 number and 1 uppercase letter"
                    {...register("user_password", { required: true })}
                    autoComplete="true"
                  />
                  <p className={`${style["message-text"]} fst-italic`}>
                    {formState.errors.user_password?.type === "required" &&
                      "Password is required"}
                  </p>
                </div>
                <button
                  type="submit"
                  className={`${style["btn_primary"]} btn mt-3 mb-4`}
                >
                  Login
                </button>
                <p className={style.signin_text}>
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className={`${style["redirect-text"]}`}
                    data-testid="button"
                  >
                    Register Now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
