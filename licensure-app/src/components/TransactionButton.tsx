import { Button } from '@mui/material';
import { useTonConnect } from '../hooks/useTonConnect';
import { useContract } from '../hooks/useContract';
import { toNano } from 'ton-core';

const fee = 0.05;

interface TransactionButtonProps {
  amount: number;
  licenseId: bigint;
}

export const TransactionButton: React.FC<TransactionButtonProps> = ({
  amount,
  licenseId,
}) => {
  const { mainContract } = useContract();
  const { sender } = useTonConnect();

  const handleBuyClick = async () => {
    if (!mainContract || !sender) {
      console.error('Main contract or sender is not defined.');
      return;
    }

    if (amount <= 0) {
      console.error('Invalid amount value.');
      return;
    }

    try {
      const amountWithFee = amount * (1 + fee);

      await mainContract.send(
        sender,
        {
          value: toNano(amountWithFee), // cost for buyer
        },
        {
          $$type: 'LicenseBuyV2',
          buyerAddress: sender.address,
          licenseId: licenseId,
          cost: BigInt(amount), // price of seller, for us = amountWithFee - amount = amount * 0.05
        }
      );

      console.log('Transaction successful.');
    } catch (error) {
      console.error('Error sending transaction to contract:', error);
    }
  };

  return (
    <div>
      <Button onClick={handleBuyClick} variant="contained" size="large">
        Buy
      </Button>
    </div>
  );
};

export default TransactionButton;
