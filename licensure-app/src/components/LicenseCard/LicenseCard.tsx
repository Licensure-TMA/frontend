import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { License } from 'wrappers/Main';
import { blue } from '@mui/material/colors';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { TransactionButton } from 'components/TransactionButton/TransactionButton';
import { DeleteButton } from 'components/DeleteButton/DeleteButton';
import { createSearchParams, useNavigate } from 'react-router-dom';

const fee = 0.05;

type LicenseProps = Pick<License, 'licenseId' | 'contentName' | 'contentDescription' | 'price' | 'sellerAddress' | 'licenseType' |'contentCategory' | 'contentSubcategory'>
interface LicenseCardProps extends LicenseProps {
  withBuyButton?: boolean;
  withDeleteButton?: boolean;
  withFee?: boolean;
}

export const LicenseCard = ({
  licenseId, contentName, contentDescription, price, sellerAddress, licenseType, contentCategory, contentSubcategory, withBuyButton, withDeleteButton, withFee,
}: LicenseCardProps) => {
  const address = sellerAddress.toString();
  const navigate = useNavigate();

  const onClick = () => {
    navigate({pathname: '/license',
      search: createSearchParams({
        id: licenseId.toString(),
      }).toString()
    });
  };

  return (
    <Card variant="outlined" onClick={onClick}>
      <Stack direction='row' justifyContent='space-between' margin='8px' marginBottom='0px'>
        <Typography variant="h5" color={blue[700]}>
          <strong>{contentName}</strong>
        </Typography>
        {withBuyButton && <TransactionButton amount={price} licenseId={licenseId} />}
        {withDeleteButton && <DeleteButton licenseId={licenseId} />}
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
          <strong>{withFee ? Number(price) * (1 + fee) : Number(price)} TON</strong>
        </Typography>
      </Stack>
      
    </Card>
  );
};