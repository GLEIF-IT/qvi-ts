import {inject} from "inversify";
import {Client} from "./interfaces";
import SERVICE_IDENTIFIER from "./constants/identifiers";

export class QVI {
   constructor(@inject(SERVICE_IDENTIFIER.CLIENT) client: Client) {
        return client;
    }
 }
