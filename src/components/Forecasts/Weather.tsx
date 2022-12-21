import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { Weather } from "./types";

type CityDataProps = {
  weather?: Weather;
};

const CityData: FC<CityDataProps> = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return (
    <Box display="flex" justifyContent="center" m={2} width="100%">
      <Box>
        <Typography>city: {weather?.city}</Typography>
        <Typography>precipitation: {weather?.precipitation}</Typography>
        <Typography>temperature: {weather?.temperature}</Typography>
        <Typography>wind speed: {weather?.windSpeed}</Typography>
        <Typography>summary: {weather?.summary}</Typography>
      </Box>
    </Box>
  );
};

export default CityData;
