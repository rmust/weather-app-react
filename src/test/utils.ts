import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { Endpoint } from "../services/types";

export const renderWithRouter = (element: ReactElement) =>
  render(element, { wrapper: BrowserRouter });

const okResponseBase = {
  ok: true,
  status: 200,
};

export const mockForecastsFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  if (typeof input !== "string") {
    return {} as Response;
  }
  if (input.includes(Endpoint.CITIES)) {
    return {
      ...okResponseBase,
      json: async () => ["Vilnius", "Klaipėda"],
    } as Response;
  }
  if (input.includes(Endpoint.WEATHERS)) {
    return {
      ...okResponseBase,
      json: async () => ["Vilnius", "Klaipėda"],
    } as Response;
  }
  return {} as Response;
};
