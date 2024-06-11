import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { License } from 'wrappers/Main';
import { blue } from '@mui/material/colors';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
// import TransactionButton from 'components/legacy/TransactionButton';
import TransactionButton from 'components/TransactionButton/TransactionButton';
import { DeleteButton } from 'components/DeleteButton/DeleteButton';


type LicenseProps = Pick<License, 'licenseId' | 'contentName' | 'contentDescription' | 'price' | 'sellerAddress' | 'licenseType' |'contentCategory' | 'contentSubcategory'>
interface LicenseCardProps extends LicenseProps {
  withBuyButton?: boolean;
  withDeleteButton?: boolean;
}
// const safeToString = (data: unknown) => {
//   return (data && typeof data.toString === 'function') ? data.toString() : '';
// };

export const LicenseCard = ({
  licenseId, contentName, contentDescription, price, sellerAddress, licenseType, contentCategory, contentSubcategory, withBuyButton, withDeleteButton,
}: LicenseCardProps) => {
  const address = sellerAddress.toString();

  return (
    <Card variant="outlined">
      <Stack direction='row' justifyContent='space-between' margin='8px' marginBottom='0px'>
        <Typography variant="h5" color={blue[700]}>
          <strong>{contentName}</strong>
        </Typography>
        {withBuyButton && <TransactionButton destination={sellerAddress} comment={'license purchase'} amount={price} licenseId={licenseId} />}
        {withDeleteButton && <DeleteButton licenseId={licenseId} />}
        {/* <TransactionButton destination={safeToString(sellerAddress)} comment={'license purchase'} amount={safeToString(price)} licenseId={licenseId} /> */}
      </Stack>

      <CardContent>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {contentDescription}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip label={licenseType}/>
          <Chip label={`${contentCategory} > ${contentSubcategory}`} />
        </Stack>
      </CardContent>

      <Stack direction='row' gap={1} margin='8px' marginTop='0px'>
        <AccountBalanceWalletOutlinedIcon color='primary' fontSize='large' />
        <Typography sx={{ mb: 1.5 }} margin='auto auto auto 0px !important;' overflow='hidden' textOverflow='ellipsis' width='95%'>
          {address}
        </Typography>
        <Typography variant="h5" color={blue[700]} whiteSpace='nowrap'>
          <strong>{Number(price)} TON</strong>
        </Typography>
      </Stack>
      
    </Card>
  );
};