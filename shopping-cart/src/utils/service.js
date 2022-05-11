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
      if(!REGEX.PASSWORD_REGEX.test(text)) return displayError= ERROR_MESSAGES.PASSWORD_VALID_CHARACTERS
      break;
    default:
      return displayError;
  }
  return displayError;
};

export const getImageNameFromUrl = (url) => {
  return url?.split("/").splice(2).join("/");
};

export const addcart = (cartList, payload) => {
  let newCartList = [];
  const isProductExist = cartList.findIndex(
    (element) => element.id == payload.id
  );
  if (isProductExist > -1) {
    payload["quantity"] += 1;
    payload["subTotal"] = payload["price"] * payload["quantity"];
    newCartList = cartList;
  } else {
    payload["quantity"] = 1;
    payload["subTotal"] = payload["price"];
    newCartList = [...cartList, payload];
  }
  return newCartList;
};

export const removeCart = (cartList, payload) => {
  let newCartList = cartList;
  const isProductExist = cartList.findIndex(
    (element) => element.id == payload.id
  );
  if (newCartList?.length === 1 && newCartList[0].quantity === 1) return [];
  if (newCartList[isProductExist].quantity === 1) {
    newCartList.splice(isProductExist, 1);
  } else {
    payload["quantity"] -= 1;
    payload["subTotal"] = payload["price"] * payload["quantity"];
    newCartList = cartList;
  }
  return newCartList;
};
