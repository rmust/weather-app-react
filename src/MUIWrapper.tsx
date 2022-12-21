import { FC, ReactNode } from "react";
import { Box, createTheme, Paper, ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

type MUIWrapperProps = {
  children: ReactNode;
};

const MUIWrapper: FC<MUIWrapperProps> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Paper square={true}>
        <Box sx={{ height: "100vh" }}>{children}</Box>
      </Paper>
    </ThemeProvider>
  );
};

export default MUIWrapper;
