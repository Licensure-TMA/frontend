import { useAsyncInitialize } from './useAsyncInitialize';
import { useTonClient } from './useTonClient';
import { Main } from '../../wrappers/Main';
import { Address, OpenedContract } from 'ton-core';

export function useContract() {
  const {client} = useTonClient();

  const mainContract = useAsyncInitialize(async() => {
    if (!client) return;

    const contract = Main.fromAddress(Address.parse('EQDJTrighVS-bsWNryPEIwrAN7dqKpcalsCbmDAp_4D77aTU'));

    return client.open(contract) as OpenedContract<Main>;
  }, [client]);

  // const test = useAsyncInitialize(async () => {
  //   if (!mainContract || !client || !wallet) return;

  //   const res = mainContract.getArrayOfLicenses();

  //   return client.open(Main)
  // })

  // useEffect(() => {
  //   async function test() {
  //     if (!mainContract) return;

  //     const res = (await mainContract.getArrayOfLicenses()).map;
  //   }
  // }, []);

  return { mainContract };
}