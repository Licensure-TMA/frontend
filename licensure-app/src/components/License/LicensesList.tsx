import { useContract } from 'hooks/useContract';
import { useTonConnect } from 'hooks/useTonConnect';
import { useEffect, useState } from 'react';
import { License } from '../../../wrappers/Main';
import { LicenseCard } from 'components/License/LicenseCard';
import { Stack } from '@mui/material';

export const LicensesList = () => {
  const { connected } = useTonConnect();
  const { mainContract } = useContract();
  const [licenses, setLicenses] = useState<Array<License>>([]);

  const fetchLicenses = async () => {
    if (connected && mainContract) {
      const { map } = await mainContract.getArrayOfLicenses();

      setLicenses(map.values());
    }
  };

  useEffect(() => {
    fetchLicenses();
  }, [connected, mainContract]);

  console.log('licenses', licenses);

  return (
    <Stack spacing={2}>
      {licenses.map(({ licenseId, contentName, contentDescription, price, sellerAddress, licenseType, contentCategory, contentSubcategory }) => (
        <LicenseCard
          key={licenseId}
          contentName={contentName}
          contentDescription={contentDescription}
          price={price}
          sellerAddress={sellerAddress}
          licenseType={licenseType}
          contentCategory={contentCategory}
          contentSubcategory={contentSubcategory}
        />
      ))}
    </Stack>
  );
};