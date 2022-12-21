export enum Endpoint {
  AUTHORIZE = "authorize",
  CITIES = "cities",
  WEATHERS = "weathers",
}

export enum StorageKey {
  AuthToken = "authToken",
}

export type ParsedError = {
  status: number;
  message: string;
};
