import React from 'react';

interface ContractDisplayProps {
  contract: { $$type: "LicenseArray"; map: { _map: Map<string, any> }; length: bigint; } | undefined;
}

const excludedFields = ['$$type', 'licenseId', 'sellerAddress', 'buyerAddress'];

const ContractDisplay: React.FC<ContractDisplayProps> = ({ contract }) => {
  if (!contract) {
    return <div>Loading...</div>;
  }

  const { map, length } = contract;

  return (
    <div>
      <h2>P2P Market</h2>
      {Array.from(map._map.entries()).map(([key, value]) => (
        <div className="card" key={key}>
          <h3>{value.contentName}</h3>
          {Object.entries(value).filter(([field]) => !excludedFields.includes(field) && field !== 'contentName').map(([field, fieldValue]: [string, any]) => (
            <div key={field} className="field">
              <span className="field-name">{field}:</span>
              <span className="field-value">{fieldValue.toString()}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ContractDisplay;