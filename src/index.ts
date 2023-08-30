import Client from "./interfaces/client";
import container from "./config/ioc_config";
import SERVICE_IDENTIFIER from "./constants/identifiers";

// Composition root
let client = container.get<Client>(SERVICE_IDENTIFIER.CLIENT);

console.log(client);
