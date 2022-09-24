import axios, { AxiosRequestConfig } from 'axios';

const makeRequest = async ({
  url,
  method = 'GET',
  data = {},
  params = {},
  headers = {},
}: AxiosRequestConfig) => {
  try {
    const response = await axios({
      method,
      url,
      data,
      params,
      baseURL: 'http://84.38.183.129:5000',
      // baseURL: 'http://localhost:5000',
      timeout: 10000,
      headers,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export default makeRequest;
