import React from 'react';
import { TonConnectButton } from "@tonconnect/ui-react";

const Main: React.FC = () => {    
    return (
        <main>
            <div className="welcome-text">
                Welcome to Licensure! Start monetizing your ideas with us!
            </div>
            <TonConnectButton className="center-button" />
        </main>
    );
};

export default Main;
