import { useAsyncInitialize } from './useAsyncInitialize';
import { useTonClient } from './useTonClient';
import { Main } from 'wrappers/Main';
import { Address, OpenedContract } from 'ton-core';

export function useContract() {
  const { client } = useTonClient();

  const mainContract = useAsyncInitialize(async() => {
    if (!client) return;

    const contract = Main.fromAddress(Address.parse('EQDJTrighVS-bsWNryPEIwrAN7dqKpcalsCbmDAp_4D77aTU'));

    return client.open(contract) as OpenedContract<Main>;
  }, [client]);

  return { mainContract };
}