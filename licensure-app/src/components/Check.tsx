import React from 'react';

interface ConnectionStatusProps {
  isConnected: boolean | null;
}

const ConnectionStatus: React.FC<ConnectionStatusProps> = ({ isConnected }) => {
  return (
    <div className="connection-status">
      {isConnected ? (
        <div className="connected">
          <span className="status-dot connected-dot"></span>
          <span className="status-text">Connected</span>
        </div>
      ) : (
        <div className="waiting">
          <span className="status-dot waiting-dot"></span>
          <span className="status-text">Waiting</span>
        </div>
      )}
    </div>
  );
};

export default ConnectionStatus;