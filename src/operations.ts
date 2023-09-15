const DONE = "done";
const NAME = "name";
const RESPONSE = "response";
import { SignifyClient  } from "signify-ts";

export const waitKeriaOp = async (client: SignifyClient, op: any) => {
    const ops = client.operations();
    while (!op[DONE]) {
        op = await ops.get(op[NAME]);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    return op[RESPONSE];
}