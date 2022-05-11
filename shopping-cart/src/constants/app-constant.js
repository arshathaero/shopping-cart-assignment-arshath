export const APP_CONSTANT = {};

export const ERROR_MESSAGES = {
  VALUE_NOT_EXIST: "Field should not be empty !",
  EMAIL_NOT_VALID: "Email is not valid !",
  PASSWORD_NOT_MATCH: "Password do not match !",
  PASSWORD_LENGTH: "Password should be more than 8 characters !",
  PASSWORD_VALID_CHARACTERS: "Password should be mixed of number and alphabets !"
};

export const REGEX = {
  EMAIL_REGEX: /\S+@\S+\.\S+/,
  PASSWORD_REGEX:
    /^(?=[^a-z\n]*[a-z])[A-Za-z._-]*[0-9][A-Za-z0-9!@#$&()`.+,/"-]*$/
};
