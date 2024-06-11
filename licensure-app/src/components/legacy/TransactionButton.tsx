import React, { useState } from 'react';
import { useTonConnectUI, SendTransactionRequest } from '@tonconnect/ui-react';
import { toNano, beginCell } from 'ton-core';
import { Button } from '@mui/material';
import TransactionDialog from './TransactionDialog';

interface TransactionButtonProps {
  destination: string;
  comment: string;
  amount: string;
  licenseId: bigint;
}

export const TransactionButton: React.FC<TransactionButtonProps> = ({
  destination,
  comment,
  amount,
  licenseId,
}) => {
  const [tonConnectUI] = useTonConnectUI();
  const [open, setOpen] = useState(false);

  const handleBuyClick = async () => {
    const body = beginCell()
      .storeUint(0, 32)
      .storeStringTail(comment)
      .endCell();

    const transactionRequest: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 360,
      messages: [
        {
          address: destination,
          amount: toNano(amount).toString(),
          payload: body.toBoc().toString('base64'),
        },
      ],
    };

    const result = await tonConnectUI.sendTransaction(transactionRequest);

    if (result) {
      setOpen(true);
    }
  };

  return (
    <div>
      <Button onClick={handleBuyClick} variant="contained" size="large">
        Buy
      </Button>
      <TransactionDialog
        open={open}
        onClose={() => setOpen(false)}
        licenseId={licenseId}
      />
    </div>
  );
};

export default TransactionButton;