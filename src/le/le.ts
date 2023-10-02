import { SignifyClient } from 'signify-ts';
import { Schema } from '../schema';
import { Rules } from '../rules';
import { ECRAuthvLEICredentialData } from './credentials/ecr-auth';
import { ECRAuthEdges } from '../qvi/credentials/ecr';
import { AID, QVIvLEIEdge } from '..';
import {
    LEvLEICredentialData,
    LEvLEICredentialEdge,
} from '../qvi/credentials/le';

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
     * @param {QVIvLEIEdge} edge}
     * @returns
     */
    public async createECRAuthCredential(
        issuee: AID,
        data: ECRAuthvLEICredentialData,
        edge: ECRAuthEdges
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
     * @param {LEvLEICredentialData} data
     * @param {LEvLEICredentialEdge} edge}
     * @returns
     */
    public async createOORAuthCredential(
        issuee: AID,
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
}
