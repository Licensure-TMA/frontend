import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { Main } from "../../wrappers/Main"
import { Address, OpenedContract } from "ton-core";

export function useContract() {
    const {client} = useTonClient()

    const mainContract = useAsyncInitialize(async() => {
        if (!client) return;

        const contract = Main.fromAddress(Address.parse("EQBY97LDZ15UmQY86OUAEfuEknn2EjhIouY2p2d5ljTUD3-X"))

        return client.open(contract) as OpenedContract<Main>
    }, [client])

    return {
        mainContract: mainContract
    }
}