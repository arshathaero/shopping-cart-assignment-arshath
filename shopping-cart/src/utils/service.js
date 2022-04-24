import { ERROR_MESSAGES } from "constants/app-constant";

export const formValidation = (value, type) => {
  let text = value?.trim();
  if (!text) return ERROR_MESSAGES.VALUE_NOT_EXIST;
  let displayError = "";
  switch (type) {
    case "email":
      let emailRegex = /\S+@\S+\.\S+/; // eslint-disable-line
      displayError = emailRegex?.test(text)
        ? ""
        : ERROR_MESSAGES.EMAIL_NOT_VALID;
      break;
    case "password":
      let passwordRegex = /^(?=[^a-z\n]*[a-z])[A-Za-z._-]*[0-9][A-Za-z0-9!@#$&()`.+,/"-]*$/; // eslint-disable-line
      if (text.length < 8)
        return (displayError = ERROR_MESSAGES.PASSWORD_LENGTH);
      displayError = passwordRegex.test(text)
        ? ""
        : ERROR_MESSAGES.PASSWORD_VALID_CHARACTERS;
      break;
    default:
      return displayError;
  }
  return displayError;
};
