import { LicenseCard } from 'components/LicenseCard/LicenseCard';
import { Stack } from '@mui/material';
import { License } from '../../../wrappers/Main';

interface Props {
  licenses: Array<License>;
}

export const LicensesList = ({ licenses }: Props) => {

  return (
    <Stack spacing={4}>
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