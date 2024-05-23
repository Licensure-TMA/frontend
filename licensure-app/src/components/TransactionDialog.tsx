import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { useContract } from '../hooks/useContract';
import { toNano } from 'ton-core';

interface TransactionDialogProps {
  open: boolean;
  onClose: () => void;
  resultMoneyTransfer: boolean;
  licenseId: bigint;
  sender: any;
}

const TransactionDialog: React.FC<TransactionDialogProps> = ({ open, onClose, resultMoneyTransfer, licenseId, sender }) => {
  const { mainContract } = useContract();
  const [transactionSuccess, setTransactionSuccess] = useState<boolean | null>(null);
  const [confirmClicked, setConfirmClicked] = useState(false);

  const handleConfirmClick = async () => {
    if (mainContract && sender) {
      try {
        const a = await mainContract.send(
          sender,
          {
            value: toNano('0.05'),
          },
          {
            $$type: 'LicenseBuy',
            buyerAddress: sender.address,
            licenseId: licenseId
          }
        );
        setConfirmClicked(true);
        setTransactionSuccess(true);

        console.log(a)
      } catch (error) {
        console.error('Error sending transaction to contract:', error);
        setConfirmClicked(true);
        setTransactionSuccess(false);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Transaction Confirmation</DialogTitle>
      <DialogContent>
        {!confirmClicked ? (
          <>
            <DialogContentText>
              Funds have been transferred to the seller's wallet. Now you can confirm that you have purchased the license by clicking the Confirm button and opening your wallet.
            </DialogContentText>
            <DialogActions>
              <Button onClick={handleConfirmClick} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogContentText>Was the transaction successful? If yes, click OK. If not, click Try Again.</DialogContentText>
            <DialogActions>
              <Button onClick={onClose} color="primary">
                OK
              </Button>
              <Button onClick={handleConfirmClick} color="primary">
                Try Again
              </Button>
            </DialogActions>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TransactionDialog;
