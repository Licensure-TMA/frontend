import React from 'react';
import { Card, CardContent, Typography, CardActions, Chip, Grid, Divider, Box, useMediaQuery, useTheme } from '@mui/material';
import TransactionButton from './TransactionButton';

interface LicenseCardProps {
  licenseId: bigint;
  contentName: string;
  contentDescription: string;
  licenseType: string;
  category: string;
  subcategory: string;
  sellerAddress: string;
  price: number;
  currency: string;
  status: string;
}

const safeToString = (data: any) => {
  return (data && typeof data.toString === 'function') ? data.toString() : '';
};

const LicenseCard: React.FC<LicenseCardProps> = ({
  licenseId,
  contentName,
  contentDescription,
  licenseType,
  category,
  subcategory,
  sellerAddress,
  price,
  currency,
  status
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card sx={{ maxWidth: '100%', m: 2, padding: '20px' }}>
      <CardContent>
      <Grid container alignItems="center" spacing={2}>
          <Grid item xs={9} sx={{ overflow: 'hidden' }}>
            <Typography 
              gutterBottom 
              variant="h5" 
              component="div" 
              sx={{ 
                fontWeight: 'bold', 
                color: '#0372A8',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
              }}
            >
              {safeToString(contentName)}
            </Typography>
          </Grid>
          <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <TransactionButton
              amount={Number(price)}
              licenseId={licenseId}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
          {safeToString(contentDescription)}
        </Typography>
        <Box sx={{ display: 'flex', margin: '10px 0', gap: '5px', flexWrap: 'wrap' }}>
          {[licenseType, category, subcategory].map((item, index) => (
            <Chip key={index} label={safeToString(item)} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '70%' }}>
            {safeToString(sellerAddress)}
          </Typography>
          <Typography sx={{ fontWeight: 'bold', color: '#0372A8', whiteSpace: 'nowrap', mt: isMobile ? 1 : 0 }}>
            {safeToString(price)} {safeToString(currency)}
          </Typography>
          <Typography sx={{ fontWeight: 'bold', color: '#0372A8', whiteSpace: 'nowrap', mt: isMobile ? 1 : 0 }}>
            {safeToString(status)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LicenseCard;