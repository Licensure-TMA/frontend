import { LicensesContext } from 'components/LicensesContext/LicensesContext';
import { useContext, useEffect, useState } from 'react';
import { License } from 'wrappers/Main';
import { useTonConnect } from 'hooks/useTonConnect';
import { LicensesList } from 'components/LicensesList/LicensesList';

export const ActiveTab = () => {
  const [activeLicenses, setActiveLicenses] = useState<Array<License>>([]);
  const { licenses, fetchLicenses, loading } = useContext(LicensesContext);
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

  return (<LicensesList licenses={activeLicenses} loading={loading} withDeleteButton />);
};