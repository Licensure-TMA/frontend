import { LicensesContext } from 'components/LicensesContext/LicensesContext';
import { useTonConnect } from 'hooks/useTonConnect';
import { useContext, useEffect, useState } from 'react';
import { License } from '../../../wrappers/Main';
import { LicensesList } from 'components/LicensesList/LicensesList';
import { Container } from 'pages/WelcomePage/styled';
import { Typography } from '@mui/material';

export const PurchaseTab = () => {
  const [purchaseLicenses, setPurchaseLicenses] = useState<Array<License>>([]);
  const { licenses } = useContext(LicensesContext);
  const { wallet } = useTonConnect();

  useEffect(() => {
    const filteredLicenses = licenses.filter(license => {
      return license.buyerAddress.toRawString() === wallet;
    });

    setPurchaseLicenses(filteredLicenses);
  }, licenses);

  if (!purchaseLicenses.length) {
    return (<Container>
      <Typography variant="h5">Your ourder will appear here</Typography>
    </Container>);
  }

  return (<LicensesList licenses={purchaseLicenses} />);
};