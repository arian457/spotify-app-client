import React, { useEffect, useState } from "react";
import styles from "./forms.module.css";

export const Login = ({ handleSubmit, error }) => {
  const [password, setPassword] = useState({});
  const [param, setParam] = useState({});
  const handleChanges = (e) => {
    const { name, value } = e.target;
    if (name === "user") {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      const param = value.match(emailRegex) ? "email" : "userName";
      setParam({ [param]: value });
    } else setPassword({ [name]: value });
  };
  return (
    <form
      className={styles.modal}
      onSubmit={(e) => handleSubmit(e, { ...password, ...param })}
    >
      <h1 className={error && styles.error}>
        {!error ? "Welcome back!" : error}
      </h1>
      <div className={styles.inputGroup}>
        <h3>
          Username <i>(or email): </i>
        </h3>
        <input
          onChange={(e) => handleChanges(e)}
          name="user"
          required
          type="text"
        />
      </div>
      <div className={styles.inputGroup}>
        <h3>Password :</h3>
        <input
          onChange={(e) => handleChanges(e)}
          name="password"
          required
          type="password"
        />
      </div>
      <button>
        <b> Enter! </b>
      </button>
    </form>
  );
};
