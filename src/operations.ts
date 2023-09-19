import { SignifyClient, Dict } from "signify-ts";
const DONE = "done";
const NAME = "name";
const RESPONSE = "response";
export const getKeriaOperationResult = async (
    client: SignifyClient,
    op: any,
    log: boolean = false,
    time: number = 1000) => {
    const ops = client.operations();
    while (!op[DONE]) {
        op = await ops.get(op[NAME]);
        if (log) {
            console.log(op);
        }
        await new Promise((resolve) => setTimeout(resolve, time));
    }
    return op[RESPONSE];
}

export const sendKeriaMessage = async (
    client: SignifyClient,
    name: string,
    topic: string,
    sender: Dict<any>,
    route: string,
    payload: Dict<any>,
    embeds: Dict<any>,
    recipients: string[]
) => {
    return await client.exchanges().send(name, topic, sender, route, payload, embeds, recipients)

}