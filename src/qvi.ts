import { SignifyClient } from 'signify-ts';
import { schema } from './schema';
import { rules } from './rules';
import { AID } from '.';
import { edges } from './edges';
import { credentials } from './credentials';

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
     * @param {AID} issuee
     * @param {credentials.LegalEntityCredentialData} data
     * @param {edges.LegalEntityCredentialEdge} edge
     * @returns {Promise<any>} A promise to the long-running operation
     */
    public async createLegalEntityCredential(
        issuee: AID,
        data: credentials.LegalEntityCredentialData,
        edge: edges.LegalEntityCredentialEdge
    ): Promise<any> {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registry,
                schema.LE,
                issuee,
                data,
                rules.LE,
                edge,
                false
            );
    }

    /**
     * Create Engagement Context Role Credential
     *
     * @param {AID} issuee
     * @param {credentials.EngagementContextRoleCredentialData} data
     * @param {edges.EngagementContextRoleCredentialEdge} edge
     * @returns {Promise<any>} A promise to the long-running operation
     */
    public async createEngagementContextRoleCredential(
        issuee: AID,
        data: credentials.EngagementContextRoleCredentialData,
        edge: edges.EngagementContextRoleCredentialEdge
    ): Promise<any> {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registry,
                schema.ECR,
                issuee,
                data,
                rules.ECR,
                edge,
                true
            );
    }

    /**
     * Create Official Organizational Role Credential
     *
     * @param {AID} issuee
     * @param {credentials.OfficialOrganizationalRoleCredentialData} data
     * @param {edges.OfficialOrganizationalRoleCredentialEdge} edge
     * @returns {Promise<any>} A promise to the long-running operation
     */
    public async createOfficialOrganizationRoleCredential(
        issuee: AID,
        data: credentials.OfficialOrganizationalRoleCredentialData,
        edge: edges.OfficialOrganizationalRoleCredentialEdge
    ): Promise<any> {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registry,
                schema.OOR,
                issuee,
                data,
                rules.OOR,
                edge,
                false
            );
    }
}
