import axios from 'axios';
import { AxiosRequestConfig } from 'axios';

export async function client(
  url: string,
  {
    method,
    data,
    token,
    headers: customHeaders,
    ...customConfig
  }: AxiosRequestConfig & { token: string }
): Promise<unknown> {
  const config: AxiosRequestConfig = {
    url,
    method,
    data,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': data ? 'application/json' : undefined,
      ...customHeaders,
    },
    ...customConfig,
  };

  return axios(config)
    .then((res) => {
      return res.data;
    })
    .catch((error) => error.response.data);
}
