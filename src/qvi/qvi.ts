import { SignifyClient, Siger, messagize, d } from 'signify-ts';
import { getAgentOperationResult, sendAgentMessage } from '../operations';
import { Schema } from '../schema';
import { Rules } from '../rules';
import { LEvLEICredentialData, LEvLEICredentialEdge } from './credentials/le';
import { ECRAuthvLEIEdgeData, ECRvLEICredentialData } from './credentials/ecr';
import { OORvLEICredentialData } from './credentials/oor';
import { OORAuthvLEICredentialData } from '../le/credentials/oor-auth';
import { AID } from '..';

type qb64 = string;

export class QVI {
    private readonly client: SignifyClient;
    private readonly name: string;
    private readonly registry: qb64;

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
     * @param {SignifyClient} client
     * @param {string} name
     * @param {qb64} registry
     */
    constructor(client: SignifyClient, name: string, registry: qb64) {
        this.client = client;
        this.name = name;
        this.registry = registry;
    }

    /**
     * Create Legal Entity Credential
     *
     * QVIs are required to be mutltisig groups by the vLEI Ecosystem Governance Framework
     *
     * @param {AID} issuee
     * @param {LEvLEICredentialData} data
     * @param {LEvLEICredentialEdge} edge}
     * @returns
     */
    public async createLegalEntityCredential(
        issuee: AID,
        data: LEvLEICredentialData,
        edge: LEvLEICredentialEdge
    ) {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registry,
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
     * @param {AID} issuee
     * @param {ECRvLEICredentialData} data
     * @param {ECRAuthvLEIEdgeData} edge
     * @returns
     */
    public async createEngagementContextRoleCredential(
        issuee: AID,
        data: ECRvLEICredentialData,
        edge: ECRAuthvLEIEdgeData
    ) {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registry,
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
     * @param {AID} issuee
     * @param {OORvLEICredentialData}data``
     * @param {OORAuthvLEICredentialData} edge
     * @returns
     */
    public async createOfficialOrganizationRoleCredential(
        issuee: AID,
        data: OORvLEICredentialData,
        edge: OORAuthvLEICredentialData
    ) {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registry,
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
