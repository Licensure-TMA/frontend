
import { Stack } from '@mui/material';
import { Header } from 'components/Header/Header';
import { LicensesContext } from 'components/LicensesContext/LicensesContext';
import { LicensesList } from 'components/LicensesList/LicensesList';
import { useTonConnect } from 'hooks/useTonConnect';
import { useContext, useEffect, useState } from 'react';
import { License } from 'wrappers/Main';

export const Market = () => {
  const { licenses, loading, fetchLicenses } = useContext(LicensesContext);
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

  return (
    <>
      <Header />
      <Stack height='100%' spacing={4} padding={4}>
        <LicensesList licenses={availableLicenses} loading={loading} withBuyButton />
      </Stack>
    </>
  );
};