import { SignifyClient } from 'signify-ts';
import { Schema } from '../schema';
import { Rules } from '../rules';
import { AID } from '..';
import { OORAuthEdge } from '../qvi/credentials/oor';
import { credentials } from '../credentials';
import { edges } from '../edges';

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
     * @param {edges.EngagementContextRoleAuthorizationCredentialEdgeData} edge}
     * @returns
     */
    public async createECRAuthCredential(
        issuee: AID,
        data: credentials.EngagementContextRoleAuthorizationCredentialData,
        edge: edges.EngagementContextRoleAuthorizationCredentialEdgeData
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
     * @param {credentials.OfficialOrganizationalRoleAuthorizationCredentialData} data
     * @param {edges.OfficialOrganizationalRoleAuthorizationCredentialEdgeData} edge}
     * @returns
     */
    public async createOORAuthCredential(
        issuee: AID,
        data: credentials.OfficialOrganizationalRoleAuthorizationCredentialData,
        edge: edges.OfficialOrganizationalRoleAuthorizationCredentialEdgeData
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
