import React, { useEffect, useState } from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';
import Header from '../components/Header';
import { useContract } from '../hooks/useContract';
import { useTonConnect } from '../hooks/useTonConnect';
import ContractDisplay from '../components/ContractDisplay';

const Main: React.FC = () => {
  const { connected } = useTonConnect();
  const { mainContract } = useContract();
  const [contract, setContract] = useState<{ $$type: 'LicenseArray'; map: unknown; length: unknown; } | undefined>(undefined);

  useEffect(() => {
    const fetchContract = async () => {
      if (connected && mainContract) {
        const contractData = await mainContract;
        setContract(contractData);
      }
    };

    fetchContract();
  }, [connected, mainContract]);

  return (
    <>
      {!connected && (
        <>
          <Header />
          <Main />
        </>
      )}
      {connected && (
        <div className="contract-display-container">
          <Header />
          <TonConnectButton className="center-button" style={{ float: 'right' }}/>
          {/* @ts-expect-error */}
          <ContractDisplay contract={contract} />
        </div>
      )}
    </>
  );
};

export default Main;
