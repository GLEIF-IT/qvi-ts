import { SignifyClient } from 'signify-ts';
import { schema } from './schema';
import { rules } from './rules';
import { AID } from '.';
import { credentials } from './credentials';
import { edges } from './edges';

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
     * @param {credentials.EngagementContextRoleAuthorizationCredentialData} data
     * @param {edges.EngagementContextRoleAuthorizationEdge} edge}
     * @returns {Promise<any>} A promise to the long-running operation
     */
    public async createECRAuthCredential(
        issuee: AID,
        data: credentials.EngagementContextRoleAuthorizationCredentialData,
        edge: edges.EngagementContextRoleAuthorizationEdge
    ): Promise<any> {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registryAID,
                schema.ECRAuth,
                issuee,
                data,
                rules.ECRAuth,
                edge,
                false
            );
    }

    /**
     * Create OOR Auth Credential
     *
     * @param {AID} issuee AID of QVI
     * @param {credentials.OfficialOrganizationalRoleAuthorizationCredentialData} data
     * @param {edges.OfficialOrganizationalRoleAuthorizationCredentialEdge} edge}
     * @returns {Promise<any>} A promise to the long-running operation
     */
    public async createOORAuthCredential(
        issuee: AID,
        data: credentials.OfficialOrganizationalRoleAuthorizationCredentialData,
        edge: edges.OfficialOrganizationalRoleAuthorizationEdge
    ): Promise<any> {
        return await this.client
            .credentials()
            .issue(
                this.name,
                this.registryAID,
                schema.OORAuth,
                issuee,
                data,
                rules.OORAuth,
                edge,
                false
            );
    }
}
