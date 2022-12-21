import { useState } from "react";
import { getAuthToken } from "./services/utils";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./contexts/authContext";
import { getRoutes } from "./routes";
import MUIWrapper from "./MUIWrapper";

function App() {
  const [token, setToken] = useState(getAuthToken());
  return (
    <MUIWrapper>
      <AuthContext.Provider
        value={{
          token,
          setToken,
        }}
      >
        <BrowserRouter>{getRoutes()}</BrowserRouter>
      </AuthContext.Provider>
    </MUIWrapper>
  );
}

export default App;
