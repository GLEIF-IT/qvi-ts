import { SignifyClient, Siger, messagize, d } from 'signify-ts';
import { getAgentOperationResult, sendAgentMessage } from '../operations';
import { Schema } from '../schema';
import { Rules } from '../rules';

type qb64 = string;

export class QVI {
    private readonly client: SignifyClient;
    private readonly name: string;
    private readonly registryAID: qb64;

    /**
     * QVI
     *
     * Class for performing QVI opertations:
     *
     *  - Create Registry
     *  - Issue Legal Entity Credential
     *  - Issue Engagement Context Role Credential
     *  - Issue Official Organizational Role Credential
     *
     * @param client
     * @param name
     * @param registryAID
     */
    constructor(client: SignifyClient, name: string, registryAID: qb64) {
        this.client = client;
        this.name = name;
        this.registryAID = registryAID;
    }

    /**
     * Create Legal Entity Credential
     *
     * QVIs are required to be mutltisig groups by the vLEI Ecosystem Governance Framework
     *
     * @param qviAID
     * @param issuee
     * @param credentialData
     * @returns
     */
    public async createLegalEntityCredential(
        issuee: string,
        data: LEvLEICredentialData,
        edge: LEvLEICredentialEdge
    ) {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registryAID,
                Schema.LE,
                issuee,
                data,
                Rules.LE,
                edge,
                false
            );
    }

    /**
     * Create Engagement Context Role Credential
     *
     * @param qviAID
     * @param issuee
     * @param credentialData
     * @returns
     */
    public async createEngagementContextRoleCredential(
        data: ECRvLEICredentialData,
        edge: ECRvLEIAuthEdge,
        issuee: string
    ) {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registryAID,
                Schema.ECR,
                issuee,
                data,
                Rules.ECR,
                edge,
                false
            );
    }

    /**
     * Create Official Organizational Role Credential
     *
     * @param qviAID
     * @param issuee
     * @param credentialData
     * @returns
     */
    public async createOfficialOrganizationRoleCredential(
        data: OORvLEICredentialData,
        edge: OOR,
        issuee: string
    ) {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registryAID,
                Schema.OOR,
                issuee,
                data,
                Rules.OOR,
                edge,
                false
            );
    }

    public async sendLegalEntityCredential(
        alias: string,
        recipient: string,
        getFromAgent: boolean,
        credential?: any //result for createLegalEntityCredential
    ) {
        let sender = await this.client.identifiers().get('');
        sender = await getAgentOperationResult(this.client, sender);

        if (getFromAgent) {
            let msgSaid = '';
            while (msgSaid == '') {
                let notifications = await this.client.notifications().list();
                for (let notif of notifications.notes) {
                    if (notif.a.r == '/multisig/iss') {
                        msgSaid = notif.a.d;
                        await this.client.notifications().mark(notif.i);
                        console.log(
                            'alex@alex.com-member3 received exchange message to join multisig'
                        );
                    }
                }
                await new Promise((resolve) => setTimeout(resolve, 100));
            }

            // let res = await this.client.credentials().getRequest(msgSaid)
            // let exn = res[0].exn
            // credential = exn.e.cred
        }

        let serder = credential.serder;
        let sigs = credential.sigs;
        let sigers = sigs.map((sig: any) => new Siger({ qb64: sig }));

        let ims = d(messagize(serder, sigers));
        let atc = ims.substring(serder.size);
        let embeds = {
            cred: [serder, atc],
        };
        return await sendAgentMessage(
            this.client,
            alias,
            'multisig_issuance',
            sender,
            '/multisig/iss',
            {}, //TODO:payload
            embeds,
            [recipient]
        );
    }
}

export class QVIvLEIEdge {
    n: string;
    s: string;

    constructor(qviAID: string) {
        this.n = qviAID;
        this.s = Schema.QVI;
    }
}
