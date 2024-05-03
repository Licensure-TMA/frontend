import React from 'react';
import { Card, CardContent, Typography, CardActions, Chip, Grid, Divider, Box } from '@mui/material';
import TransactionButton from './TransactionButton';

interface LicenseCardProps {
  contentName: string;
  contentDescription: string;
  licenseType: string;
  category: string;
  subcategory: string;
  sellerAddress: string;
  price: number;
  currency: string;
}

const safeToString = (data: any) => {
  return (data && typeof data.toString === 'function') ? data.toString() : '';
};

const LicenseCard: React.FC<LicenseCardProps> = ({
  contentName,
  contentDescription,
  licenseType,
  category,
  subcategory,
  sellerAddress,
  price,
  currency
}) => {
  return (
    <Card sx={{ maxWidth: '100%', m: 2, padding: '20px' }}>
      <CardContent>
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
          <Grid item xs={12} sm={8}>
            <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: '#0372A8' }} noWrap>
              {safeToString(contentName)}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} display="flex" justifyContent="flex-end">
            <TransactionButton
              destination={safeToString(sellerAddress)}
              comment="Buying a licence"
              amount={safeToString(price)}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body2" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
          {safeToString(contentDescription)}
        </Typography>
        <Box sx={{ display: 'flex', margin: '10px 0', gap: '5px' }}>
          {[licenseType, category, subcategory].map((item, index) => (
            <Chip key={index} label={safeToString(item)} />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {safeToString(sellerAddress)}
          </Typography>
          <Typography sx={{ fontWeight: 'bold', color: '#0372A8' }}>
            {safeToString(price)} {safeToString(currency)}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default LicenseCard;