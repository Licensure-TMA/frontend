import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './index.css';
import { useTonConnect } from './hooks/useTonConnect';
import { useContract } from './hooks/useContract';
import ContractDisplay from './components/ContractDisplay';
import { TonConnectButton } from '@tonconnect/ui-react';

const App: React.FC = () => {
  const { connected } = useTonConnect();
  const { mainContract } = useContract();
  const [contract, setContract] = useState<{ $$type: "LicenseArray"; map: any; length: any; } | undefined>(undefined);

  useEffect(() => {
    const fetchContract = async () => {
      if (connected && mainContract) {
        const contractData = await mainContract.getArrayOfLicenses();
        setContract(contractData);
      }
    };

    fetchContract();
  }, [connected, mainContract]);

  return (
    <>
      {!connected && (
        <>
          <Main />
        </>
      )}
      {connected && (
        <div className="contract-display-container">
          <Header />
          <TonConnectButton style={{ float: "right" }}/>
          <ContractDisplay contract={contract} />
        </div>
      )}
    </>
  );
};

export default App;
