import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTonConnect } from 'hooks/useTonConnect';
import { useNavigate } from 'react-router-dom';
import { TonConnectButtonCustom } from './styled';

export const Header = () => {
  const { wallet } = useTonConnect();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/market');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ padding: '0px 8px' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Button onClick={handleLogoClick}>
            <Typography
              variant="h6"
              style={{ color: 'white', margin: '0px' }}
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
              }}
              marginRight={0}
            >
            Licensure
            </Typography>
          </Button>
        </Box>

        {wallet && (<Box sx={{ flexGrow: 0 }} marginRight='0px'>
          <IconButton size='small' onClick={handleProfileClick} >
            <AccountCircleIcon style={{ color: 'white' }} sx={{ fontSize: 45 }} />
          </IconButton>
        </Box>)}

        <TonConnectButtonCustom />
      </Toolbar>
    </AppBar>
  );
};