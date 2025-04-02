/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseURL } from "../config/apiEndPoint";

type method = "POST" | "PUT" | "DELETE" | "GET";

type DataInfo =
  | {
      status: "PENDING";
      statusCode: null;
      data: null;
      error: null;
    }
  | {
      status: "SUCCESS";
      statusCode: number;
      data: any;
      error: null;
    }
  | {
      status: "ERROR";
      statusCode: number;
      data: null;
      error: string;
    };

type Authorization = {
  "Content-Type"?: "application/json";
  Authorization?: string;
};

type ExtraOptions = {
  timeout?: number;
  tokenNotRequired?: boolean;
  body?: any;
};

const token = "abgasciasdf6567987";
const urlRegex = /^(https?):\/\/[^\s/$.?#].[^\s]*$/i;

const netWorkCall = async (url: string, method: method = "GET", options?: ExtraOptions): Promise<DataInfo> => {
  const dataInfo = {
    status: "PENDING",
    statusCode: null,
    data: null,
    error: null,
  } as DataInfo;

  const init: Record<string, any> = {
    method,
    body: options?.body,
  };

  const headers: Authorization = {
    Authorization: token,
    "Content-Type": "application/json",
  };

  const isValidURL = urlRegex.test(url);
  const fullUrl = isValidURL ? url : baseURL + "/" + url;

  if (method === "GET") delete init.body;
  if (options?.tokenNotRequired) delete headers.Authorization;
  if (options?.body instanceof FormData) delete headers["Content-Type"];
  if (Object.entries(headers).length) init["headers"] = headers;

  const controller = new AbortController();
  if (options?.timeout) {
    init["signal"] = controller.signal;
    setTimeout(() => controller.abort("API Taking Longer Time"), options?.timeout);
  }

  try {
    const response = await fetch(fullUrl, init);
    if (response.ok && response.status === 200) {
      const resData = await response.json();
      dataInfo.statusCode = response.status;
      dataInfo.status = "SUCCESS";
      dataInfo.data = resData;
    } else {
      dataInfo.statusCode = response.status;
      throw new Error(response.statusText);
    }
  } catch (error) {
    if (error instanceof Error) {
      dataInfo.error = error.message;
    } else {
      dataInfo.error = typeof error === "string" ? error : "Oh no!";
    }
    dataInfo.statusCode = dataInfo.statusCode ?? 400;
    dataInfo.status = "ERROR";
  }
  return dataInfo;
};

export { netWorkCall };
