import { useContext, useEffect, useState } from 'react';
import { License } from 'wrappers/Main';
import { LicensesContext } from 'components/LicensesContext/LicensesContext';
import { useTonConnect } from 'hooks/useTonConnect';
import { LicensesList } from 'components/LicensesList/LicensesList';

export const SaleTab = () => {
  const [saleLicenses, setSaleLicenses] = useState<Array<License>>([]);
  const { licenses, loading, fetchLicenses } = useContext(LicensesContext);
  const { wallet } = useTonConnect();

  useEffect(() => {
    fetchLicenses();
  }, []);

  useEffect(() => {
    const filteredLicenses = licenses.filter(license => {
      return license.status === 'Paid' && license.sellerAddress.toRawString() === wallet;
    });

    setSaleLicenses(filteredLicenses);
  }, [licenses]);

  return (<LicensesList licenses={saleLicenses} loading={loading} />);
};