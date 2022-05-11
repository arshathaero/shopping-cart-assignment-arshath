import React, { useState } from "react";
import TextInput from "components/textInput/textInput";
import styles from "./register.module.scss";
import Button from "components/button/button";
import { formValidation } from "utils/service";
import { ERROR_MESSAGES } from "constants/app-constant";
import { useNavigate } from "react-router";
const Register = () => {
  const navigate = useNavigate();

  let form = {
    firstname: { value: "", error: "", type: "text", label: "First Name" },
    lastname: { value: "", error: "", type: "text", label: "last Name" },
    email: { value: "", error: "", type: "email", label: "Email" },
    password: { value: "", error: "", type: "password", label: "Password" },
    confirmPassword: {
      value: "",
      error: "",
      type: "password",
      label: "Confirm Password",
    },
  };
  const [formData, setFormData] = useState(form);

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
      if (key == "confirmPassword") {
        newObj["password"].value !== newObj["confirmPassword"].value
          ? (newObj["confirmPassword"].error =
              ERROR_MESSAGES.PASSWORD_NOT_MATCH)
          : "";
      }
    }
    isValid = Object.keys(newObj).every((element) => !newObj[element].error);
    setFormData({ ...newObj });

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkValidation()) return;
    navigate("/");
  };
  return (
    <div className={styles.register}>
      <section className={styles.register__content}>
        <h1 className={styles.register__content__title}>Signup</h1>
        <h4 className={styles.register__content__description}>
          We do not share your personal details with anyone.
        </h4>
      </section>

      <section className={styles.register__formWrapper}>
        <form
          onSubmit={handleSubmit}
          className={styles.register__formWrapper__form}
        >
          {Object.keys(form).map((element) => (
            <TextInput
              key={element}
              className={`${styles.form__field}`}
              errorMessage={formData[element].error}
              handleChange={(e) => handleInput(e, element)}
              value={formData[element].value}
              label={formData[element].label}
              id={element}
              type={formData[element].type}
            />
          ))}

          <Button className={styles.form__button} type="submit">
            Signup
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Register;
