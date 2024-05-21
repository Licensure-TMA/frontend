import React from 'react';
import { TonConnectButton } from "@tonconnect/ui-react";
import { Container, Stack } from '@mui/material';
import { Typography } from '@mui/material';

const Main: React.FC = () => {    
    return (
        <Container>
          <Stack direction="column" alignItems="center" spacing={6} mt={18}>
            <Container>
              <Typography variant="h4" align="center">Welcome to Licensure!</Typography>
              <Typography variant="h5"align="center">Start monetizing your ideas with us!</Typography>
            </Container>
    
            <TonConnectButton />
          </Stack>
        </Container>
      );
};

export default Main;
