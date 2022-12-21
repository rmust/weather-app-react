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

export const mockLoginFailure = async (
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<Response> => {
  if (typeof input === "string" && input.includes(Endpoint.AUTHORIZE)) {
    return {
      ok: false,
      status: 401,
    } as Response;
  }
  return {} as Response;
};
