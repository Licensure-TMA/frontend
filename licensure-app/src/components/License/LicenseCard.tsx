import { Avatar, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { License } from '../../../wrappers/Main';
import { blue } from '@mui/material/colors';

type Props = Pick<License, 'contentName' | 'contentDescription' | 'price' | 'sellerAddress' | 'licenseType' |'contentCategory' | 'contentSubcategory'>

export const LicenseCard = ({
  contentName, contentDescription, price, sellerAddress, licenseType, contentCategory, contentSubcategory
}: Props) => {
  const address = sellerAddress.toString();
  return (
    <Card variant="outlined">
      <Stack direction='row' justifyContent='space-between' margin='8px' marginBottom='0px'>
        <Typography variant="h5" color={blue[700]}>
          <strong>{contentName}</strong>
        </Typography>
        <Button variant="contained">Buy</Button>
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

      <Stack direction='row' justifyContent='space-between' margin='8px' marginTop='0px'>
        <Stack direction='row' gap={1}>
          <Avatar sx={{ bgcolor: blue[700] }}>{address.charAt(0)}</Avatar>
          <Typography sx={{ mb: 1.5 }} margin='auto !important'>{address}</Typography>
        </Stack>
        <Typography variant="h5" color={blue[700]}>
          <strong>{Number(price)} TON</strong>
        </Typography>
      </Stack>
      
    </Card>
  );
};