import { SignifyClient, Tier, Siger, messagize, d } from "signify-ts";
import { getKeriaOperationResult, sendKeriaMessage } from "../operations";

import LE from "../schema/legal-entity-vLEI-credential.json";
import ECR from "../schema/legal-entity-engagement-context-role-vLEI-credential.json";
import OOR from "../schema/legal-entity-official-organizational-role-vLEI-credential.json"

export class QVI {
    public readonly SCHEMA_CACHE: { LEGAL_ENTITY: any; ENGAGEMENT_CONTEXT_ROLE: any, OFFICIAL_ORGANIZATIONAL_ROLE: any };
    private readonly client: SignifyClient;
    private readonly registry_name: string = "qvi_issuer_registry";
    private readonly qvi_aid_name: string = "qvi_aid";

    constructor(passcode: string, keriaUrl: string, tier: Tier, keriaBootUrl: string) {
        this.client = new SignifyClient(passcode, keriaUrl, tier, keriaBootUrl);

        this.SCHEMA_CACHE = {
            LEGAL_ENTITY: {
                LE: LE,
                RULES: {
                    "d": "EDIai3Wkd-Z_4cezz9nYEcCK3KNH5saLvZoS_84JL6NU",
                    "usageDisclaimer": {
                        "l": JSON.stringify(LE.properties.r.oneOf[1].properties?.usageDisclaimer.properties.l.const)
                    },
                    "issuanceDisclaimer": {
                        "l": JSON.stringify(LE.properties.r.oneOf[1].properties?.issuanceDisclaimer.properties.l.const)
                    }
                },
                SAID: JSON.stringify(OOR.$id)
            },
            ENGAGEMENT_CONTEXT_ROLE: {
                ECR: ECR,
                RULES:
                {
                    "d": "EDIai3Wkd-Z_4cezz9nYEcCK3KNH5saLvZoS_84JL6NU",
                    "usageDisclaimer": {
                        "l": JSON.stringify(ECR.properties.r.oneOf[1].properties?.usageDisclaimer.properties.l.const)
                    },
                    "issuanceDisclaimer": {
                        "l": JSON.stringify(ECR.properties.r.oneOf[1].properties?.issuanceDisclaimer.properties.l.const)
                    },
                    "privacyDisclaimer": {
                        "l": JSON.stringify(ECR.properties.r.oneOf[1].properties?.privacyDisclaimer.properties.l.const)
                    }
                },
                SAID: JSON.stringify(OOR.$id)
            },
            OFFICIAL_ORGANIZATIONAL_ROLE: {
                OOR: OOR,
                RULES: {
                    "d": "EDIai3Wkd-Z_4cezz9nYEcCK3KNH5saLvZoS_84JL6NU",
                    "usageDisclaimer": {
                        "l": JSON.stringify(OOR.properties.r.oneOf[1].properties?.usageDisclaimer.properties.l.const)
                    },
                    "issuanceDisclaimer": {
                        "l": JSON.stringify(OOR.properties.r.oneOf[1].properties?.issuanceDisclaimer.properties.l.const)
                    }
                },
                SAID: JSON.stringify(OOR.$id)
            },
        };
    }

    public async createLegalEntityCredential(
        client: SignifyClient,
        recipientName: string,
        credentialData: any,
        source: any | undefined,
        _private?: boolean
    ) {
        let recipient = await client.identifiers().get(recipientName);
        recipient = await getKeriaOperationResult(this.client, recipient);

        let registry = await client.registries().list(this.registry_name);
        return await client
            .credentials()
            .issue(//create
                recipientName,
                registry,
                this.SCHEMA_CACHE.LEGAL_ENTITY.SAID,
                recipient,
                credentialData,
                this.SCHEMA_CACHE.LEGAL_ENTITY.RULES,
                source,
                _private
            );
    }
    public async sendLegalEntityCredential(
        alias: string,
        recipient: string,
        getFromAgent: boolean,
        credential?: any//result for createLegalEntityCredential
    ) {
        let sender = await this.client.identifiers().get(this.qvi_aid_name);
        sender = await getKeriaOperationResult(this.client, sender);

        if (getFromAgent) {
            let msgSaid = ""
            while (msgSaid=="") {
                let notifications = await this.client.notifications().list()
                for (let notif of notifications.notes){
                    if (notif.a.r == '/multisig/iss') {
                        msgSaid = notif.a.d
                        await this.client.notifications().mark(notif.i)
                        console.log("alex@alex.com-member3 received exchange message to join multisig")
                    }
                }
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        
            let res = await this.client.credentials().getRequest(msgSaid)
            let exn = res[0].exn
            credential = exn.e.cred
        }

        let serder = credential.serder
        let sigs = credential.sigs
        let sigers = sigs.map((sig: any) => new Siger({ qb64: sig }))

        let ims = d(messagize(serder, sigers))
        let atc = ims.substring(serder.size)
        let embeds = {
            cred: [serder, atc],
        }
        return await sendKeriaMessage(
            this.client,
            alias,
            "multisig_issuance",
            sender,
            "/multisig/iss",
            {},//TODO:payload
            embeds,
            [recipient]
        );
    }

}
