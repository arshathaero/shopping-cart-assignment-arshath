import React, { useState } from "react";
import TextInput from "components/textInput/textInput";
import styles from "./login.module.scss";
import Button from "components/button/button";
import { formValidation } from "utils/service";
const Login = () => {
  const [formData, setFormData] = useState({
    email: { value: "", error: "" },
    password: { value: "", error: "" },
  });

  const handleInput = (e, type) => {
    let text = e.target.value;
    setFormData((prevState) => {
      prevState[type].value = text;
      prevState[type].error = "";
      return { ...prevState };
    });
  };

  const checkValidation = () => {
    let isValid = false;
    let newObj = { ...formData };
    for (let key in newObj) {
      newObj[key].error = formValidation(newObj[key].value, key);
    }
    isValid = Object.keys(newObj).every((element) => !newObj[element].error);
    setFormData({ ...newObj });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkValidation()) return;
    alert("Login Successfully");
  };
  return (
    <div className={styles.login}>
      <section className={styles.login__content}>
        <h1 className={styles.login__content__title}>Login</h1>
        <h4 className={styles.login__content__description}>
          get access to your Orders, Wishlist and Recommendations
        </h4>
      </section>

      <section className={styles.login__formWrapper}>
        <form
          onSubmit={handleSubmit}
          className={styles.login__formWrapper__form}
        >
          {Object.keys(formData).map((element) => (
            <TextInput
              key={element}
              className={styles.form__field}
              errorMessage={formData[element].error}
              handleChange={(e) => handleInput(e, element)}
              value={formData[element].value}
              label={element}
              id={element}
              type={element}
            />
          ))}

          <Button className={styles.form__button} type="submit">
            Login
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Login;
