import { Button } from '@mui/material';
import { useTonConnect } from 'hooks/useTonConnect';
import { useContract } from 'hooks/useContract';
import { toNano } from 'ton-core';
import { fee } from 'consts/consts';

interface TransactionButtonProps {
  licenseId: bigint;
  amount: bigint;
  fullWidth?: boolean;
}

export const TransactionButton = ({ amount, licenseId, fullWidth }: TransactionButtonProps) => {
  const { mainContract } = useContract();
  const { sender } = useTonConnect();

  const handleBuyClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();

    if (!mainContract || !sender.address) {
      console.error('Main contract or sender is not defined.');
      return;
    }

    if (amount <= 0) {
      console.error('Invalid amount value.');
      return;
    }

    try {
      const amountWithFee = Number(amount) * (1 + fee);

      await mainContract.send(
        sender,
        {
          value: toNano(amountWithFee),
        },
        {
          $$type: 'LicenseBuyV2',
          buyerAddress: sender.address,
          licenseId: licenseId,
          cost: amount,
        }
      );
    } catch (error) {
      console.error('Error sending transaction to contract:', error);
    }
  };

  return (
    <div>
      <Button onClick={handleBuyClick} variant="contained" size="large" fullWidth={fullWidth} >
        Buy
      </Button>
    </div>
  );
};