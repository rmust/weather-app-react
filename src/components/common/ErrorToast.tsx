import { FC } from "react";
import { Alert, Box, Collapse } from "@mui/material";

type ErrorToastProps = {
  onClose: () => void;
  errorMessage?: string;
};

const ErrorToast: FC<ErrorToastProps> = ({ onClose, errorMessage }) => {
  const isOpen = Boolean(errorMessage);

  return (
    <Box data-testid="error-toast" mb={isOpen ? 2 : 0} width="100%">
      <Collapse in={isOpen}>
        <Alert severity="error" onClose={onClose}>
          Error: {errorMessage}
        </Alert>
      </Collapse>
    </Box>
  );
};

export default ErrorToast;
