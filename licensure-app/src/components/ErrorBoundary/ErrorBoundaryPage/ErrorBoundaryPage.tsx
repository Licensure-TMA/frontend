import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Container } from './styled';

export const ErrorBoundaryPage = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <Container>
      <Stack spacing={4} direction='row'>
        <Typography variant="h5">Error</Typography>
        <Button variant="outlined" onClick={refreshPage}>Refresh</Button>
      </Stack>
    </Container>
  );
};
