import React from 'react';
import TransactionButton from './TransactionButton';

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
          <TransactionButton 
            destination={value.sellerAddress}
            comment="Привет, Лера!" // Вы можете также динамически изменить комментарий
            amount={value.price} // Берем сумму из поля price каждого элемента
          />
        </div>
      ))}
    </div>
  );
};

export default ContractDisplay;
