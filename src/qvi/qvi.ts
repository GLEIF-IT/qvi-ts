import { SignifyClient } from "signify-ts";
import { waitKeriaOp } from "../operations";
import { getQviRegistry } from "../registry";


import LE from "../schema/legal-entity-vLEI-credential.json";
import ECR from "../schema/legal-entity-engagement-context-role-vLEI-credential.json";
import OOR from "../schema/legal-entity-engagement-context-role-vLEI-credential.json";


import {LEVLEICredential, LE_VLEI_EDGES} from '../interfaces/credentials'

export class QVI {
    private client: SignifyClient;
    private readonly alias: string;
    private readonly registryName: string;
    private readonly registryNonce: string;
    private registry: any;
    private readonly SCHEMA_CACHE: { LEGAL_ENTITY: any; ENGAGEMENT_CONTEXT_ROLE: any; OFFICIAL_ORGANIZATIONAL_ROLE: any; };

    constructor(alias: string, registryName: string, registryNonce: string) {
        this.alias = alias;
        this.registryName = registryName;
        this.registryNonce = registryNonce;
        this.SCHEMA_CACHE = {
            LEGAL_ENTITY: {
                LE: LE,
                RULES: {
                    "d": "EDIai3Wkd-Z_4cezz9nYEcCK3KNH5saLvZoS_84JL6NU",
                    "usageDisclaimer": {
                        "l": JSON.stringify(LE.properties.r.oneOf[1].properties.usageDisclaimer.properties.l.const)
                    },
                    "issuanceDisclaimer": {
                        "l": JSON.stringify(LE.properties.r.oneOf[1].properties.issuanceDisclaimer.properties.l.const)
                    }
                }
                ,
                STRING: JSON.stringify(LE)
            },
            ENGAGEMENT_CONTEXT_ROLE: {
                ECR: ECR,
                RULES:
                {
                    "d": "EDIai3Wkd-Z_4cezz9nYEcCK3KNH5saLvZoS_84JL6NU",
                    "usageDisclaimer": {
                        "l": JSON.stringify(ECR.properties.r.oneOf[1].properties.usageDisclaimer.properties.l.const)
                    },
                    "issuanceDisclaimer": {
                        "l": JSON.stringify(ECR.properties.r.oneOf[1].properties.issuanceDisclaimer.properties.l.const)
                    },
                    "privacyDisclaimer": {
                        "l": JSON.stringify(ECR.properties.r.oneOf[1].properties.privacyDisclaimer.properties.l.const)
                    }
                },
                STRING: JSON.stringify(ECR)
            },
            OFFICIAL_ORGANIZATIONAL_ROLE: {
                OOR: OOR,
                RULES: {
                    "d": "EDIai3Wkd-Z_4cezz9nYEcCK3KNH5saLvZoS_84JL6NU",
                    "usageDisclaimer": {
                        "l": JSON.stringify(OOR.properties.r.oneOf[1].properties.usageDisclaimer.properties.l.const)
                    },
                    "issuanceDisclaimer": {
                        "l": JSON.stringify(OOR.properties.r.oneOf[1].properties.issuanceDisclaimer.properties.l.const)
                    }
                },
                STRING: JSON.stringify(OOR)
            },
        };
    }

    public async init(client: SignifyClient) {
        //check if registry already exists
        let registry = await getQviRegistry(client, this.registryName);
        if (registry) {
            this.registry = registry;
            return;
        }
        let op = await this.client.registries().create(this.alias, this.registryName, this.registryNonce);
        registry = await waitKeriaOp(this.client, op);
        this.registry = registry;
    }

    public async issueLegalEntityCredential(
        client: SignifyClient,
        alias: string,
        recipient: string,
        credentialData: LEVLEICredential,
        source: LE_VLEI_EDGES,
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
