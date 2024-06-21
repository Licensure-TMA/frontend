import { TonConnectButton } from '@tonconnect/ui-react';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export const WelcomePage = () => {
  return (
    <Stack alignItems='center' spacing={6} direction='column' margin='auto'>
      <Stack alignItems='center' >
        <Typography variant="h6">Welcome to Licensure!</Typography>
        <Typography variant="h6">Start monetizing your ideas with us!</Typography>
      </Stack>

      <TonConnectButton />
    </Stack>
  );
};