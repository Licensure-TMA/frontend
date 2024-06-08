import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const CreateLicenseButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create-license');
  };

  return (
    <Button variant="contained" size="large" onClick={handleClick}>Create ad</Button>
  );
};