import { LicenseCard } from 'components/LicenseCard/LicenseCard';
import { Box, CircularProgress, Stack, Typography } from '@mui/material';
import { License } from 'wrappers/Main';

interface Props {
  licenses: Array<License>;
  loading: boolean;
  withBuyButton?: boolean;
  withDeleteButton?: boolean;
}

export const LicensesList = ({ licenses, loading, withBuyButton, withDeleteButton }: Props) => {
  if (loading) return (
    <Box display='flex' height='100%' justifyContent='center' alignItems='center'>
      <CircularProgress />
    </Box>
  );

  if (!licenses) return (
    <Box display='flex' height='100%' justifyContent='center' alignItems='center'>
      <Typography variant="h5">No licenses</Typography>
    </Box>
  );

  return (
    <Stack spacing={4} paddingBottom='32px'>
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