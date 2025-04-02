import moment from "moment";

export const formateDate = (date: string | Date, customFormat: string = "DD-MM-YYYY") => {
  return moment(date).format(customFormat);
};

export const isValidEmail = (email: string) => {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const validEmail = regEx.test(email.toLowerCase().trim());
  return validEmail;
};

export const isValidPhoneNumber = (phone: string) => {
  const regEx = /^[6-9]\d{9}$/;
  const testRegex = regEx.test(phone.trim());
  return testRegex;
};

export const isValidName = (name: string) => {
  const regEx = /^[a-zA-Z-]+$/;
  const testRegex = regEx.test(name.trim());
  return testRegex;
};

export const checkPasswordMinOneUpperLetter = (password: string) => {
  const regEx = /^(?=.*[A-Z])/;
  const testRegex = regEx.test(password.trim());
  return testRegex;
};

export const checkPasswordMinOneSmallLetter = (password: string) => {
  const regEx = /^(?=.*[a-z])/;
  const testRegex = regEx.test(password.trim());
  return testRegex;
};

export const checkPasswordMinOneDigit = (password: string) => {
  const regEx = /^(?=.*[0-9])/;
  const testRegex = regEx.test(password.trim());
  return testRegex;
};

export const checkPasswordMinOneSpecialCharacter = (password: string) => {
  const regEx = /^(?=.*[*.!@$%^&(){}[])/;
  const testRegex = regEx.test(password.trim());
  return testRegex;
};

export const handleCardLayoutPlaceHolder = (event: React.SyntheticEvent<HTMLImageElement, Event>) =>
  (event.currentTarget.src = `${"add fallback image here"}`);

export const hex2rgba = (hex: string, alpha: number = 1) => {
  const matches = hex.match(/\w\w/g);
  if (!matches) {
    return hex;
  }
  const [r, g, b] = matches.map(x => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
