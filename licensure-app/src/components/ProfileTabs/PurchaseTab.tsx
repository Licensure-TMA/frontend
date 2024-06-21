import { LicensesContext } from 'components/LicensesContext/LicensesContext';
import { useTonConnect } from 'hooks/useTonConnect';
import { useContext, useEffect, useState } from 'react';
import { License } from 'wrappers/Main';
import { LicensesList } from 'components/LicensesList/LicensesList';

export const PurchaseTab = () => {
  const [purchaseLicenses, setPurchaseLicenses] = useState<Array<License>>([]);
  const { licenses, loading, fetchLicenses } = useContext(LicensesContext);
  const { wallet } = useTonConnect();

  useEffect(() => {
    fetchLicenses();
  }, []);

  useEffect(() => {
    const filteredLicenses = licenses.filter(license => {
      return license.buyerAddress.toRawString() === wallet;
    });

    setPurchaseLicenses(filteredLicenses);
  }, licenses);

  return (<LicensesList licenses={purchaseLicenses} loading={loading} />);
};