import React from 'react';
import LicenseCard from './LicenseCard';

interface ContractDisplayProps {
  contract: { $$type: "LicenseArray"; map: { _map: Map<string, any> }; length: bigint; } | undefined;
}

const ContractDisplay: React.FC<ContractDisplayProps> = ({ contract }) => {
  if (!contract) {
    return <div>Loading...</div>;
  }

  const { map, length } = contract;

  return (
    <div>
      {Array.from(map._map.entries()).map(([key, value]) => (
        <LicenseCard
          licenseId={value.licenseId}
          key={key}
          contentName={value.contentName}
          contentDescription={value.contentDescription || 'No description available'}
          licenseType={value.licenseType}
          category={value.contentCategory}
          subcategory={value.contentSubcategory}
          sellerAddress={value.sellerAddress}
          price={value.price}
          currency={value.currency}
          status={value.status}
        />
      ))}
    </div>
  );
};

export default ContractDisplay;
