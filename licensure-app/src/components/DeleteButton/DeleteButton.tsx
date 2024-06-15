import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContract } from 'hooks/useContract';
import { useTonConnect } from 'hooks/useTonConnect';
import { toNano } from 'ton-core';
import { red } from '@mui/material/colors';

interface Props {
  licenseId: bigint;
}

export const DeleteButton = ({ licenseId }: Props ) => {
  const { mainContract } = useContract();
  const { sender } = useTonConnect();

  const onDelete = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();

    if (mainContract && sender && sender.address) {
      try {
        mainContract.send(
          sender,
          {
            value: toNano('0.05'),
          },
          {
            $$type: 'LicenseDelete',
            sellerAddress: sender.address,
            licenseId
          }
        );
      } catch (error) {
        console.error('Error sending transaction to contract:', error);
      }
    }
  };

  return (
    <IconButton onClick={onDelete} >
      <DeleteIcon style={{ color: red['A700'] }} />
    </IconButton>
  );
};