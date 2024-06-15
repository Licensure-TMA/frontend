import { LicenseCard } from 'components/LicenseCard/LicenseCard';
import { Stack } from '@mui/material';
import { License } from 'wrappers/Main';

interface Props {
  licenses: Array<License>;
  withBuyButton?: boolean;
  withDeleteButton?: boolean;
}

export const LicensesList = ({ licenses, withBuyButton, withDeleteButton }: Props) => {

  return (
    <Stack spacing={4}>
      {licenses.map(({ licenseId, contentName, contentDescription, price, sellerAddress, licenseType, contentCategory, contentSubcategory }) => (
        <LicenseCard
          key={licenseId}
          licenseId={licenseId}
          contentName={contentName}
          contentDescription={contentDescription}
          price={price}
          sellerAddress={sellerAddress}
          licenseType={licenseType}
          contentCategory={contentCategory}
          contentSubcategory={contentSubcategory}
          withBuyButton={withBuyButton}
          withDeleteButton={withDeleteButton}
        />
      ))}
    </Stack>
  );
};