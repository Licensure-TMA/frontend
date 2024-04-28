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
      {!connected && (
        <>
          <Header />
          <Main />
          <ConnectionStatus isConnected={connected} />
          <Footer />
        </>
      )}
      {connected && (
        <div className="contract-display-container">
          <Header />
          <TonConnectButton className="center-button" style={{ float: "right" }}/>
          <ContractDisplay contract={contract} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;