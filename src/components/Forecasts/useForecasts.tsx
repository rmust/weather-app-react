import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext";
import { getRequest } from "../../services/requests";
import { Endpoint, ParsedError } from "../../services/types";
import { getQueryParams } from "../../services/utils";
import { Weather } from "./types";

const FETCH_INTERVAL = 15000;

// TODO: refactor
export const useForecasts = () => {
  const { token } = useAuth();
  const [cities, setCities] = useState(getQueryParams("cities"));

  useEffect(() => {
    if (cities.length) {
      return;
    }
    const controller = new AbortController();
    getRequest(Endpoint.CITIES, token!, controller.signal)
      .then(({ data, error: _error }) => {
        if (_error) {
          return;
        }
        return setCities(data);
      })
      .catch(() => {
        /* catches abort error*/
      });

    return () => {
      controller.abort();
    };
  }, [cities.length, token]);

  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();

  useEffect(() => {
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [intervalId]);

  const [currentCity, setCurrentCity] = useState();
  const [weather, setWeather] = useState<Weather>();
  const [error, setError] = useState<ParsedError>();

  const fetchWeather = useCallback(
    async (city: string) => {
      return getRequest(`${Endpoint.WEATHERS}/${city}`, token!).then(
        ({ data, error: _error }) => {
          if (_error) {
            intervalId && clearInterval(intervalId);
            setCurrentCity(undefined);
            return setError(_error);
          }
          return setWeather(data);
        }
      );
    },
    [intervalId, token]
  );

  const handleChange = useCallback(
    (_event: any, newValue: any) => {
      if (newValue) {
        setCurrentCity(newValue);
        fetchWeather(newValue).then(() => {
          const id = setInterval(() => fetchWeather(newValue), FETCH_INTERVAL);
          setIntervalId(id);
        });
      }
    },
    [fetchWeather]
  );

  const isLoading = currentCity !== weather?.city && !error;

  return { handleChange, isLoading, cities, weather, error, setError };
};
