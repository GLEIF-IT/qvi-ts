import {SignifyClient} from "signify-ts";
import {DONE, NAME, RESPONSE} from "../operations";


import LE from "../schema/legal-entity-vLEI-credential.json";
export class QVI {
    private client: SignifyClient;
    private readonly alias: string;
    private readonly registryName: string;
    private readonly registryNonce: string;
    private registry: any;
    private readonly SCHEMA_CACHE: { LEGAL_ENTITY: any; };

    constructor(alias: string, registryName: string, registryNonce: string) {
        this.alias = alias;
        this.registryName = registryName;
        this.registryNonce = registryNonce;
        this.SCHEMA_CACHE = {
            LEGAL_ENTITY: {
                LE: LE,
                RULES: [
                    // no idea if this legal
                    JSON.stringify(LE.properties.r.oneOf[1].properties.usageDisclaimer.properties.l.const),
                    JSON.stringify(LE.properties.r.oneOf[1].properties.issuanceDisclaimer.properties.l.const),
                ],
                STRING: JSON.stringify(LE)
            }
            // etc
        };
    }

    public async init(client: SignifyClient) {
        let op = await this.client.registries().create(this.alias, this.registryName, this.registryNonce);
        const ops = this.client.operations();
        while (!op[DONE]) {
            op = await ops.get(op[NAME]);
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
        this.registry = op[RESPONSE];
    }

    public async issueLegalEntityCredential(
        client: SignifyClient,
        alias: string,
        recipient: string,
        credentialData: any,
        source: any | undefined,
        _private?: boolean
    ) {
        return await client
            .credentials()
            .issue(
                alias,
                this.registry,
                this.SCHEMA_CACHE.LEGAL_ENTITY.STRING,
                recipient,
                credentialData,
                this.SCHEMA_CACHE.LEGAL_ENTITY.RULES,
                source,
                _private
            );
    }
}
