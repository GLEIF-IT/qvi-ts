const DONE = "done";
const NAME = "name";
const RESPONSE = "response";
import { SignifyClient } from "signify-ts";

export const waitKeriaOp = async (client: SignifyClient, op: any, log: boolean = false) => {
    const ops = client.operations();
    while (!op[DONE]) {
        op = await ops.get(op[NAME]);
        if (log) { console.log(op) }
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    return op[RESPONSE];
}