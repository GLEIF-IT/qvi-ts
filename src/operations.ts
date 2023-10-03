import { SignifyClient } from 'signify-ts';

const DONE = 'done';
const NAME = 'name';
const RESPONSE = 'response';

export interface OperationsArgs {
    client: SignifyClient;
    op: any;
    time?: number;
}

namespace operations {
    export async function getResult({
        client,
        op,
        time = 1000,
    }: OperationsArgs) {
        while (!op[DONE]) {
            op = await client.operations().get(op[NAME]);
            await new Promise((resolve) => setTimeout(resolve, time));
        }
        return op[RESPONSE];
    }
}

export { operations };
