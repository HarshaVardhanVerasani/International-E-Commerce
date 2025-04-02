/* eslint-disable @typescript-eslint/no-explicit-any */

import { encryptionSalt } from "../config/apiEndPoint";

const encryption = (text: string) => {
  const textToChars = (text: string) => text.split("").map(c => c.charCodeAt(0));
  const byteHex = (n: string) => ("0" + Number(n).toString(16)).slice(-2);
  const applySaltToChar = (code: any) => textToChars(encryptionSalt).reduce((a, b) => a ^ b, code);
  return text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
};

const decryption = (encoded: string) => {
  const textToChars = (text: string) => text.split("").map(c => c.charCodeAt(0));
  const applySaltToChar = (code: any) => textToChars(encryptionSalt).reduce((a, b) => a ^ b, code);
  return encoded
    .match(/.{1,2}/g)
    ?.map(hex => parseInt(hex, 16))
    .map(applySaltToChar)
    .map(charCode => String.fromCharCode(charCode))
    .join("");
};

const get = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    if (typeof data === "string") {
      const decryptedData = decryption(data);
      const result = JSON.parse(decryptedData as string);
      return result;
    } else {
      return data;
    }
  } catch {
    return undefined;
  }
};

const set = (key: string, value: any) => {
  try {
    localStorage.setItem(key, encryption(JSON.stringify(value)));
    return true;
  } catch {
    return false;
  }
};

const remove = (key: string) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch {
    return false;
  }
};

const clearAll = () => {
  try {
    localStorage.clear();
    return true;
  } catch {
    return false;
  }
};

const storage = {
  get,
  set,
  remove,
  clearAll,
};

export { storage };
