import { FC, useState } from "react";
import { Box, Button, CircularProgress, TextField } from "@mui/material";
import ErrorToast from "../common/ErrorToast";
import { useLogin } from "./useLogin";

const Login: FC = () => {
  const [ref, setRef] = useState<HTMLFormElement | null>(null);
  const { isLoading, handleLogin, error, setError } = useLogin(ref);

  return (
    <Box data-testid="login-page">
      {error ? (
        <ErrorToast
          onClose={() => setError(undefined)}
          errorMessage={error?.message}
        />
      ) : null}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <form ref={setRef}>
          <TextField
            data-testid="username"
            name="username"
            label="Username"
            variant="outlined"
          />
          <Box mb={2} mt={2}>
            <TextField
              data-testid="password"
              name="password"
              type="password"
              label="Password"
              variant="outlined"
            />
          </Box>
        </form>
        <Button
          data-testid="login-button"
          onClick={handleLogin}
          variant={isLoading ? "outlined" : "contained"}
        >
          {isLoading ? <CircularProgress size={24.5} /> : "Login"}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
