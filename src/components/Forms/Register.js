import React, { useState } from "react";
import styles from "./forms.module.css";

export const Register = ({ handleSubmit, error }) => {
  const [form, setForm] = useState({ userName: "", email: "", password: "" });
  const handleChanges = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form className={styles.modal} onSubmit={(e) => handleSubmit(e, form)}>
             <h1 className={error && styles.error}>
        {!error ? "Sign up to search for free" : error}
      </h1>

      <div className={styles.inputGroup}>
        <h3>Username:</h3>
        <input
          onChange={(e) => handleChanges(e)}
          name="userName"
          required
          type="text"
        />
      </div>
      <div className={styles.inputGroup}>
        <h3>Email:</h3>
    
        <input
          onChange={(e) => handleChanges(e)}
          name="email"
          required
          type="email"
        />
      </div>
      <div className={styles.inputGroup}>
        <h3>Password:</h3>
        <input
          onChange={(e) => handleChanges(e)}
          name="password"
          required
          type="password"
        />
      </div>
      <button>
        <b> Submit </b>
      </button>
    </form>
  );
};
