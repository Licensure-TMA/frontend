import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { Main } from "../../wrappers/Main"
import { Address, OpenedContract } from "ton-core";

export function useContract() {
    const {client} = useTonClient()

    const mainContract = useAsyncInitialize(async() => {
        if (!client) return;

        const contract = Main.fromAddress(Address.parse("EQAMap0Keoi1yK5dCf_006AD2IxryqaLP12SOa1j5cMNEyZF"))

        return client.open(contract) as OpenedContract<Main>
    }, [client])

    return {
        mainContract: mainContract?.getArrayOfLicenses()
    }
}