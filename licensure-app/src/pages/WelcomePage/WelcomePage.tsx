import { TonConnectButton } from '@tonconnect/ui-react';
import Typography from '@mui/material/Typography';
import { Container, CustomStack } from './styled';

export const WelcomePage = () => {
  return (
    <Container>
      <CustomStack spacing={6} direction='column'>
        <Container>
          <Typography variant="h5">Welcome to Licensure!</Typography>
          <Typography variant="h5">Start monetizing your ideas with us!</Typography>
        </Container>

        <TonConnectButton />
      </CustomStack>
    </Container>
  );
};