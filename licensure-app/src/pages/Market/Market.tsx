
import { Stack } from '@mui/material';
import { Header } from 'components/Header/Header';
import { LicensesContext } from 'components/LicensesContext/LicensesContext';
import { LicensesList } from 'components/LicensesList/LicensesList';
import { useContext } from 'react';

export const Market = () => {
  const { licenses } = useContext(LicensesContext);

  return (
    <>
      <Header />
      <Stack spacing={4} padding={4}>
        <LicensesList licenses={licenses} />
      </Stack>
    </>
  );
};