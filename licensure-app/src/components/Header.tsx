import { TonConnectButton } from '@tonconnect/ui-react';
import React from 'react';
import { useTonConnect } from '../hooks/useTonConnect';

const Header: React.FC = () => {
    const { connected } = useTonConnect();
    
    return (
        <>
        {!connected && (
            <header>
                <h1>Licensure</h1>
            </header>
        )}
        {connected && (
          <div className="contract-display-container">
            <header>
                <TonConnectButton className="center-button" style={{ float: "right" }}/>
                <h1>Licensure</h1>
            </header>
          </div>
        )}
      </>
    );
};

export default Header;
