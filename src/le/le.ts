import { SignifyClient } from 'signify-ts';
import { Schema } from '../schema';
import { Rules } from '../rules';
import { ECRAuthvLEICredentialData } from './credentials/ecr-auth';
import { AID } from '..';
import { OORAuthvLEICredentialData } from './credentials/oor-auth';
import { OORAuthEdge } from '../qvi/credentials/oor';

type qb64 = string;

export class LE {
    private readonly client: SignifyClient;
    private readonly name: string;
    private readonly registryAID: qb64;

    /**
     * LE
     *
     * Class for performing LE as a QVI opertations:
     *
     *  - Issue Engagement Context Role Auth Credential
     *  - Issue Official Organizational Role Auth Credential
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
     * Create ECR Auth Credential
     *
     * @param {AID} issuee AID of QVI
     * @param {ECRAuthvLEICredentialData} data
     * @param {ECRAuthEdge} edge}
     * @returns
     */
    public async createECRAuthCredential(
        issuee: AID,
        data: ECRAuthvLEICredentialData,
        edge: LEEdge
    ) {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registryAID,
                Schema.ECRAuth,
                issuee,
                data,
                Rules.ECRAuth,
                edge,
                false
            );
    }

    /**
     * Create OOR Auth Credential
     *
     * @param {AID} issuee AID of QVI
     * @param {OORAuthvLEICredentialData} data
     * @param {OORAuthEdge} edge}
     * @returns
     */
    public async createOORAuthCredential(
        issuee: AID,
        data: OORAuthvLEICredentialData,
        edge: OORAuthEdge
    ) {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registryAID,
                Schema.OORAuth,
                issuee,
                data,
                Rules.OORAuth,
                edge,
                false
            );
    }
}

export interface LEEdgeDataArgs {}

export class LEEdgeData {
    n: string;
    s: string = '';

    constructor() {}
}

export interface LEEdgeArgs {
    edge: LEEdgeData;
}

export class LEEdge {
    le: LEEdgeData;

    constructor({ edge }: LEEdgeArgs) {
        this.le = edge;
    }
}
