import { LicensesContext } from 'components/LicensesContext/LicensesContext';
import { useContext, useEffect, useState } from 'react';
import { License } from 'wrappers/Main';
import { useTonConnect } from 'hooks/useTonConnect';
import { LicensesList } from 'components/LicensesList/LicensesList';
import { Typography } from '@mui/material';
import { Container } from 'pages/WelcomePage/styled';

export const ActiveTab = () => {
  const [activeLicenses, setActiveLicenses] = useState<Array<License>>([]);
  const { licenses, fetchLicenses } = useContext(LicensesContext);
  const { wallet } = useTonConnect();

  useEffect(() => {
    fetchLicenses();
  }, []);

  useEffect(() => {
    const filteredLicenses = licenses.filter(license => {
      return license.status === 'Pending' && license.sellerAddress.toRawString() === wallet;
    });

    setActiveLicenses(filteredLicenses);
  }, [licenses]);

  if (!activeLicenses.length) {
    return (<Container>
      <Typography variant="h5">Your ourder will appear here</Typography>
    </Container>);
  }

  return (<LicensesList licenses={activeLicenses} withDeleteButton />);
};