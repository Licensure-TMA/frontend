import { Button } from '@mui/material';
import { useContract } from 'hooks/useContract';
import { useTonConnect } from 'hooks/useTonConnect';
import { toNano } from 'ton-core';

interface Props {
  licenseId: bigint;
}

export const DeleteButton = ({ licenseId }: Props ) => {
  const { mainContract } = useContract();
  const { sender } = useTonConnect();

  const onDelete = async () => {
    if (mainContract && sender && sender.address) {
      try {
        await mainContract.send(
          sender,
          {
            value: toNano('0.05'),
          },
          {
            $$type: 'LicenseDelete',
            licenseId
          }
        );
      } catch (error) {
        console.error('Error sending transaction to contract:', error);
      }
    }
  };

  return (
    <Button variant="contained" color="error" size='large' onClick={onDelete}>Delete</Button>
  );
};