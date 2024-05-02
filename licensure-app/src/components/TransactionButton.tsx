import React from 'react';
import { useTonConnectUI, SendTransactionRequest } from '@tonconnect/ui-react';
import { toNano, beginCell } from 'ton-core';

interface TransactionButtonProps {
    destination: string;
    comment: string;
    amount: string;
}

export const TransactionButton: React.FC<TransactionButtonProps> = ({ destination, comment, amount }) => {
    const [tonConnectUI, setOptions] = useTonConnectUI();

    const sendTransaction = () => {
        const body = beginCell()
            .storeUint(0, 32) // Записываем 32 нулевых бита, указывающих на текстовый комментарий
            .storeStringTail(comment) // Записываем текстовый комментарий
            .endCell(); // Завершаем создание ячейки

        const myTransaction: SendTransactionRequest = {
            validUntil: Math.floor(Date.now() / 1000) + 360,
            messages: [
                {
                    address: destination,
                    amount: toNano(amount).toString(), // Используем переданную сумму
                    payload: body.toBoc().toString("base64") // payload с комментарием в формате base64
                }
            ]
        };

        tonConnectUI.sendTransaction(myTransaction);
    };

    return (
        <div>
            <button onClick={sendTransaction}>
                Buy
            </button>
        </div>
    );
};

export default TransactionButton;
