import { Endpoint } from "./types";

export const proxyUrl = "http://0.0.0.0:8080";
export const baseApiUrl = "https://weather-api.isun.ch/api";

export const getApiUrl = (endpoint: Endpoint | string) => {
  const url = `${baseApiUrl}/${endpoint}`;
  if (process.env.NODE_ENV === "development") {
    return `${proxyUrl}/${url}`;
  }
  return url;
};

const baseHeaders = {
  accept: "application/json",
  "content-type": "application/json",
};

const baseRequest = async (requestPromise: Promise<Response>) => {
  const request = await requestPromise;
  if (!request.ok) {
    return {
      error: { status: request.status, message: request.statusText },
    };
  }
  const data = await request.json();
  return { data };
};

export const postRequest = <T>(body: T, endpoint: Endpoint) => {
  const requestPromise = fetch(getApiUrl(endpoint), {
    method: "post",
    headers: new Headers(baseHeaders),
    body: JSON.stringify(body),
  });

  return baseRequest(requestPromise);
};

export const getRequest = (
  endpoint: Endpoint | string,
  authToken: string,
  signal?: AbortSignal
) => {
  const requestPromise = fetch(getApiUrl(endpoint), {
    method: "GET",
    headers: new Headers({
      ...baseHeaders,
      authorization: `Bearer ${authToken}`,
    }),
    signal,
  });
  return baseRequest(requestPromise);
};
