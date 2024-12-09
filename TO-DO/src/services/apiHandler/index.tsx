import axios from "axios";
import authHeader from "../auth-header";
export const axiosInstance = axios.create({});

let controller: AbortController;
let previousEndpoint: string;
let previousMethod: string;

const ApiHandler = async (
  method: string,
  api: string,
  formData: any = null,
  contentType: string = "application/json"
) => {
  
  const config = {
    method: method,
    url: api,
    headers: {
      authorization: authHeader(),
      "Content-Type": contentType,
    },
    data: formData,
  };

  if (controller && previousEndpoint === api && previousMethod === method) {
    controller.abort();
  }
  
  previousEndpoint = api;
  previousMethod = method;
  controller = new AbortController();
  
  const signal = controller.signal;

  return axiosInstance({
    method: `${method}`,
    url: `${api}`,
    data: formData ?? null,
    headers: {
      authorization: authHeader(),
      "Content-Type": contentType,
    },

    signal: signal,
  });
};

export default ApiHandler;
