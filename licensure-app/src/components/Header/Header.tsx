import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';
import { useTonConnect } from 'hooks/useTonConnect';

export const Header = () => {
  const { wallet } = useTonConnect();

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Licensure
          </Typography>
        </Box>

        {wallet && (<Box sx={{ flexGrow: 0 }} marginRight='0px'>
          <Avatar>{wallet.charAt(0)}</Avatar>
        </Box>)}
      </Toolbar>
    </AppBar>
  );
};