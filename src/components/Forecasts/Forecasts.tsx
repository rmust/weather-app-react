import { FC } from "react";
import {
  Autocomplete,
  Button,
  CircularProgress,
  TextField,
  Box,
} from "@mui/material";
import { useLogin } from "../Login/useLogin";
import Weather from "./Weather";
import { useForecasts } from "./useForecasts";
import ErrorToast from "../common/ErrorToast";

const Forecasts: FC = () => {
  const { handleLogout } = useLogin(null);
  const { handleChange, isLoading, cities, weather, error, setError } =
    useForecasts();

  return (
    <Box data-testid="forecasts-page" p={2}>
      <Box mb={2}>
        <Button onClick={handleLogout}>Logout</Button>
      </Box>
      <ErrorToast
        onClose={() => setError(undefined)}
        errorMessage={error?.message}
      />
      <Autocomplete
        data-testid="autocomplete"
        options={cities}
        renderInput={(params) => <TextField {...params} label="City" />}
        onChange={handleChange}
      />
      {!isLoading ? (
        <Weather weather={weather} />
      ) : (
        <Box display="flex" justifyContent="center" m={2} width="100%">
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Forecasts;
