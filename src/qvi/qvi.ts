import { SignifyClient } from 'signify-ts';
import { Schema } from '../schema';
import { Rules } from '../rules';
import { LEvLEICredentialData, LEQVIEdge } from './credentials/le';
import { ECRAuthEdge, ECRvLEICredentialData } from './credentials/ecr';
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
     * @param {LEQVIEdge} edge
     * @returns
     */
    public async createLegalEntityCredential(
        issuee: AID,
        data: LEvLEICredentialData,
        edge: LEQVIEdge
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
     * @param {ECRAuthEdge} edge
     * @returns
     */
    public async createEngagementContextRoleCredential(
        issuee: AID,
        data: ECRvLEICredentialData,
        edge: ECRAuthEdge
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
     * @param {OORvLEICredentialData} data
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
}
