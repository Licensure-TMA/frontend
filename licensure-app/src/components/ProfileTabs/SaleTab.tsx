import { useContext, useEffect, useState } from 'react';
import { License } from 'wrappers/Main';
import { LicensesContext } from 'components/LicensesContext/LicensesContext';
import { useTonConnect } from 'hooks/useTonConnect';
import { Typography } from '@mui/material';
import { LicensesList } from 'components/LicensesList/LicensesList';
import { Container } from 'pages/WelcomePage/styled';

export const SaleTab = () => {
  const [saleLicenses, setSaleLicenses] = useState<Array<License>>([]);
  const { licenses } = useContext(LicensesContext);
  const { wallet } = useTonConnect();

  useEffect(() => {
    const filteredLicenses = licenses.filter(license => {
      return license.status === 'Paid' && license.sellerAddress.toRawString() === wallet;
    });

    setSaleLicenses(filteredLicenses);
  }, [licenses]);

  if (!saleLicenses.length) {
    return (<Container>
      <Typography variant="h5">Your ourder will appear here</Typography>
    </Container>);
  }

  return (<LicensesList licenses={saleLicenses} />);
};