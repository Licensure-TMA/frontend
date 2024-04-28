import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';
import ConnectionStatus from './components/Check';
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
        const contractData = await mainContract;
        setContract(contractData);
      }
    };

    fetchContract();
  }, [connected, mainContract]);

  return (
    <>
      {!contract && (
        <>
          <Header />
          <Main />
          <ConnectionStatus isConnected={connected} />
          <Footer />
        </>
      )}
      {contract && (
        <div className="contract-display-container">
          <Header />
          <ContractDisplay contract={contract} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;