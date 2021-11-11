import React, { useContext, useEffect, useState } from "react";
import styles from "./forms.module.css";
import { Login } from "./Login";
import { Register } from "./Register";
import { postService } from "../../services";
import showAlert from "../Alert";
import AppContext from "../../AppContext";

export const Forms = () => {
  const value = useContext(AppContext);
  const { user, token } = value.state;
  const { setUser } = value;
  const [modal, setModal] = useState({
    type: "",
  });
  const [error, setError] = useState("");
  const [display, setDisplay] = useState(true);
  useEffect(() => {
    if (token) {
      setTimeout(() => {
        setDisplay(false);
      }, [5000]);
    }
  }, [token]);

  const handleClick = (e) => {
    const { id } = e.target;
    setModal({ type: id });
  };
  const handleClose = () => {
    setModal({ type: "" });
    setError("");
  };
  const handleSubmit = async (e, form) => {
    e.preventDefault();
    try {
      const { data } = await postService(`/auth/${modal.type}`, form);
      handleClose();
      showAlert({
        title: "Wonderful!",
        text: `you have ${modal.type} successfully`,
        icon: "success",
        confirmButtonText: "Cool",
      });
      setUser({
        token: data.token,
        dataUser: { ...data.userInfo },
      });
      modal.type === "login" && setTimeout(() => {
        setDisplay(false);
      }, [5000]);
      localStorage.setItem("token_id", data.token);
    } catch (e) {
      setError(modal.type === "login" ? "Invalid credentials" : "email in use, try another");
      setTimeout(() => {
        setError("");
      }, [5000]);
    } 
  };
  return (
    <div>
      {display && (
        <div className={styles.formContainer}>
          <h1>Welcome {user.userName ? user.userName : "stranger"}!</h1>
          {!user.userName && (
            <ul>
              <li id={"login"} onClick={(e) => handleClick(e)}>
                Log in
              </li>
              <label> or </label>
              <li id={"register"} onClick={(e) => handleClick(e)}>
                Sign in
              </li>
            </ul>
          )}
        </div>
      )}
      {modal.type && (
        <>
          <div
            style={{ zIndex: "10" }}
            className={styles.modalBackground}
            onClick={() => handleClose()}
          ></div>
          <div className={styles.cardContainer}>
            {" "}
            {modal.type === "login" ? (
              <Login error={error} handleSubmit={handleSubmit} />
            ) : (
              <Register error={error} handleSubmit={handleSubmit} />
            )}{" "}
          </div>{" "}
        </>
      )}
    </div>
  );
};
