import { ERROR_MESSAGES, REGEX } from "constants/app-constant";

export const formValidation = (value, type) => {
  let text = value?.trim();
  if (!text) return ERROR_MESSAGES.VALUE_NOT_EXIST;
  let displayError = "";
  switch (type) {
    case "email":
      displayError = REGEX.EMAIL_REGEX?.test(text)
        ? ""
        : ERROR_MESSAGES.EMAIL_NOT_VALID;
      break;
    case "password":
      if (text.length < 8)
        return (displayError = ERROR_MESSAGES.PASSWORD_LENGTH);
      displayError = REGEX.PASSWORD_REGEX.test(text)
        ? ""
        : ERROR_MESSAGES.PASSWORD_VALID_CHARACTERS;
      break;
    default:
      return displayError;
  }
  return displayError;
};
