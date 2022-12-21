import { screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import { renderWithRouter } from "../../test/utils";

describe("Login", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders login button", () => {
    renderWithRouter(<Login />);
    const button = screen.getByTestId("login-button");
    expect(button).toBeInTheDocument();
  });

  it("renders input fields", () => {
    renderWithRouter(<Login />);

    const usernameInput = screen.getByTestId("username");
    const passwordInput = screen.getByTestId("password");

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("fills the login form", () => {
    renderWithRouter(<Login />);

    const usernameValue = "thisisname";
    const passwordValue = "heypasswrod";

    const usernameInput = screen.getByLabelText("Username");
    const passwordInput = screen.getByLabelText("Password");

    userEvent.type(usernameInput, usernameValue);
    userEvent.type(passwordInput, passwordValue);

    expect(usernameInput).toHaveValue(usernameValue);
    expect(passwordInput).toHaveValue(passwordValue);
  });
});
