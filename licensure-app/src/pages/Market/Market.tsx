
import { Stack, Typography } from '@mui/material';
import { Header } from 'components/Header/Header';
import { LicensesContext } from 'components/LicensesContext/LicensesContext';
import { LicensesList } from 'components/LicensesList/LicensesList';
import { useTonConnect } from 'hooks/useTonConnect';
import { Container } from 'pages/WelcomePage/styled';
import { useContext, useEffect, useState } from 'react';
import { License } from 'wrappers/Main';

export const Market = () => {
  const { licenses, fetchLicenses } = useContext(LicensesContext);
  const { wallet } = useTonConnect();
  const [availableLicenses, setAvailableLicenses] = useState<Array<License>>([]);

  useEffect(() => {
    fetchLicenses();
  }, []);

  useEffect(() => {
    const filteredLicenses = licenses.filter(license => {
      return license.status === 'Pending' && license.sellerAddress.toRawString() !== wallet;
    });

    setAvailableLicenses(filteredLicenses);
  }, [licenses]);

  const content = !availableLicenses.length ? (
    <Container>
      <Typography variant="h5">Available licenses will appear here</Typography>
    </Container>
  ) : (
    <Stack spacing={4} padding={4}>
      <LicensesList licenses={availableLicenses} withBuyButton />
    </Stack>
  );

  return (
    <>
      <Header />
      {content}
    </>
  );
};