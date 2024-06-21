import { Box, Chip, Link, Stack, Typography } from '@mui/material';
import { LicensesContext } from 'components/LicensesContext/LicensesContext';
import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { License as LicenseType } from 'wrappers/Main';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { blue } from '@mui/material/colors';
import LinkIcon from '@mui/icons-material/Link';
import { TransactionButton } from 'components/TransactionButton/TransactionButton';
import { fee } from 'consts/consts';
import { useTonConnect } from 'hooks/useTonConnect';
import CircularProgress from '@mui/material/CircularProgress';
import { camelCaseToPretty } from 'utils/camelCaseToPretty';

export const License = () => {
  const [searchParams] = useSearchParams();
  const { licenses } = useContext(LicensesContext);
  const [license, setLicense] = useState<LicenseType | undefined>();
  const { sender } = useTonConnect();

  useEffect(() => {
    setLicense(licenses.find(({ licenseId }) => licenseId.toString() === searchParams.get('id')));
  }, [licenses]);

  if (!license) {
    return (<Box margin='auto'>
      <CircularProgress/>
    </Box>);
  }

  const href = license.contentUrls.includes('https') ? license.contentUrls : `https://${license.contentUrls}`;
  const displayPrice = sender.address?.toString() === license.sellerAddress.toString() ? Number(license.price) : Number(license.price) * (1 + fee);
  const shouldShowBuy = sender.address?.toString() !== license.sellerAddress.toString() && license.status === 'Pending';

  return (
    <Stack spacing={4} padding={4}>
      <Stack direction='row' gap={1} margin='8px' marginTop='0px'>
        <AccountBalanceWalletOutlinedIcon color='primary' fontSize='large' />
        <Typography sx={{ mb: 1.5 }} margin='auto auto auto 0px !important;' overflow='hidden' textOverflow='ellipsis' width='95%'>
          {license.sellerAddress.toString()}
        </Typography>
        <Typography variant="h5" color={blue[700]} whiteSpace='nowrap'>
          <strong>{displayPrice} TON</strong>
        </Typography>
      </Stack>
      
      <Stack direction="row" spacing={1}>
        <Chip color="primary" label={camelCaseToPretty(license.licenseType)}/>
        <Chip color="primary" label={`${camelCaseToPretty(license.contentCategory)} > ${camelCaseToPretty(license.contentSubcategory)}`} />
      </Stack>

      <Stack>
        <Typography fontSize={20} color={blue[700]}>
          {license.contentName}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          {license.contentDescription}
        </Typography>
      </Stack>

      <Stack>
        <Typography fontSize={20} color={blue[700]}>
        Additional terms
        </Typography>
        <Typography sx={{ mb: 1.5 }}>
          {license.additionalTerms || '-'}
        </Typography>
      </Stack>

      <Link href={href} target='_blank' fontSize={20} margin='auto' rel='noopener noreferrer'>
        <Stack direction='row' spacing={1} alignItems='center' justifyContent='center'>
          <LinkIcon fontSize='large' color='primary' />
          <div>{license.contentName}</div>
        </Stack>
      </Link>

      {shouldShowBuy && <TransactionButton licenseId={license.licenseId} amount={license.price} fullWidth />}
    </Stack>
  );
};