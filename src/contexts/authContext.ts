import {
  createContext,
  useContext,
  SetStateAction,
  Dispatch,
} from "react";

type AuthContextProps = {
  token?: string;
  setToken?: Dispatch<SetStateAction<string | undefined>>;
};

export const AuthContext = createContext<AuthContextProps>({
  token: undefined,
  setToken: undefined,
});

export const useAuth = () => useContext(AuthContext);
