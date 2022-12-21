import { StorageKey } from "./types";

export const getQueryParams = (query: string): string[] => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);
  const result = searchParams.get(query);
  return result?.split(",") || [];
};

export const getAuthToken = () => {
  const authToken = sessionStorage.getItem(StorageKey.AuthToken);
  return authToken ? authToken : undefined;
};

export const setAuthToken = (authToken?: string) => {
  if (!authToken) {
    return sessionStorage.clear();
  }
  return sessionStorage.setItem(StorageKey.AuthToken, authToken);
};
