import { useContract } from 'hooks/useContract';
import { useTonConnect } from 'hooks/useTonConnect';
import { LicenseCreate } from '../../../wrappers/Main';
import { toNano, Address } from 'ton-core';

export const CreateLicense = () => {
  const { connected, sender, wallet } = useTonConnect();
  const { mainContract } = useContract();

  const createLicense = async () => {
    if (connected && mainContract && wallet) {
      const message: LicenseCreate = {
        $$type: 'LicenseCreate',
        sellerAddress: Address.parse(wallet),
        contentName: 'test',
        contentDescription: 'test',
        contentUrls: 'test',
        licenseType: 'test',
        contentCategory: 'test',
        contentSubcategory: 'test',
        price: BigInt(1),
        allRestrictions: 'test',
        additionalTerms: 'test',
      };
  
      await mainContract.send(sender, {
        value: toNano('0.05')
      }, message);

    }
  };

  return (<button onClick={createLicense}>create license</button>);
};