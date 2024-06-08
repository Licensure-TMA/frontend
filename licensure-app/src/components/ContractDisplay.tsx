import React from 'react';
// import LicenseCard from './LicenseCard';

interface ContractDisplayProps {
  contract: { $$type: 'LicenseArray'; map: { _map: Map<string, unknown> }; length: bigint; } | undefined;
}

const ContractDisplay: React.FC<ContractDisplayProps> = ({ contract }) => {
  if (!contract) {
    return <div>Loading...</div>;
  }

  // const { map } = contract;

  return (
    <div>
      {/* {Array.from(map._map.entries()).map(([key, value]) => (
        <LicenseCard
          key={key}
          // @ts-expect-error
          contentName={value.contentName}
          // @ts-expect-error
          contentDescription={value.contentDescription || 'No description available'}
          // @ts-expect-error
          licenseType={value.licenseType}
          // @ts-expect-error
          category={value.contentCategory}
          // @ts-expect-error
          subcategory={value.contentSubcategory}
          // @ts-expect-error
          sellerAddress={value.sellerAddress}
          // @ts-expect-error
          price={value.price}
          // @ts-expect-error
          currency={value.currency}
        />
      ))} */}
    </div>
  );
};

export default ContractDisplay;
