import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

export async function apiClient({
  url,
  method,
  data,
  token,
  headers: customHeaders,
  ...customConfig
}: AxiosRequestConfig & { token?: string }): Promise<any> {
  const config: AxiosRequestConfig = {
    url,
    method: method ? method : 'GET',
    data,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return axios(config)
    .then((res) => res.data)
    .catch((error) => Promise.reject(error.response));
}
