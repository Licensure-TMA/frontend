import { useTonConnectUI, SendTransactionRequest } from '@tonconnect/ui-react';
import { Address, beginCell, toNano } from 'ton-core';
import { Button } from '@mui/material';
import { useContract } from 'hooks/useContract';
import { useTonConnect } from 'hooks/useTonConnect';

interface TransactionButtonProps {
  licenseId: bigint;
  destination: Address;
  comment: string;
  amount: bigint;
}

export const TransactionButton = ({ licenseId, destination, comment, amount }: TransactionButtonProps) => {
  const [tonConnectUI] = useTonConnectUI();
  const { mainContract } = useContract();
  const { sender } = useTonConnect();

  const sendTransaction = async () => {
    const body = beginCell()
      .storeUint(0, 32)
      .storeStringTail(comment)
      .endCell();

    const myTransaction: SendTransactionRequest = {
      validUntil: Math.floor(Date.now() / 1000) + 360,
      messages: [
        {
          address: destination.toString(),
          amount: toNano(amount).toString(),
          payload: body.toBoc().toString('base64')
        }
      ]
    };

    await tonConnectUI.sendTransaction(myTransaction);

    if (mainContract && sender && sender.address) {
      try {
        await mainContract.send(
          sender,
          {
            value: toNano('0.05'),
          },
          {
            $$type: 'LicenseBuy',
            buyerAddress: sender.address,
            licenseId
          }
        );
      } catch (error) {
        console.error('Error sending transaction to contract:', error);
      }
    }
  };

  return (
    <div>
      <Button onClick={sendTransaction} variant="contained" size="large">Buy</Button>
    </div>
  );
};

export default TransactionButton;
