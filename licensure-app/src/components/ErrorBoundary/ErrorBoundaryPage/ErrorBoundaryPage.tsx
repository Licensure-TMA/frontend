import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export const ErrorBoundaryPage = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Box margin='auto'>
      <Stack spacing={4} direction='row'>
        <Typography variant="h5">Error</Typography>
        <Button variant="outlined" onClick={refreshPage}>Refresh</Button>
      </Stack>
    </Box>
  );
};
