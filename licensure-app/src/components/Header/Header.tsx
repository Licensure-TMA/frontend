import { AppBar, Avatar, Box, Toolbar, Typography } from '@mui/material';
import { useTonConnect } from 'hooks/useTonConnect';
import { useNavigate } from 'react-router-dom';

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
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            onClick={handleLogoClick}
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

        {wallet && (<Box sx={{ flexGrow: 0 }} marginRight='0px' onClick={handleProfileClick}>
          <Avatar>{wallet.charAt(0)}</Avatar>
        </Box>)}
      </Toolbar>
    </AppBar>
  );
};