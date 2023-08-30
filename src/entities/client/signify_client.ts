import { inject, injectable, named } from "inversify";

import {Client} from "../../interfaces";
import SERVICE_IDENTIFIER from "../../constants/identifiers";
import TAG from "../../constants/tags";

@injectable()
export class SignifyClient implements Client {

    @inject(SERVICE_IDENTIFIER.CLIENT) @named(TAG.SINGLESIG) public client: Client;

    public client_operation(): string {
        return "";
    }

}
