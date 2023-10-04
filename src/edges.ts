import { Saider } from 'signify-ts';
import { Schema } from './schema';

namespace edges {
    /**
     * LegalEntityCredentialEdgeArgs
     *
     * Parameters for {@link LegalEntityCredentialEdge}
     *
     * @property {qvi LegalEntityCredentialEdgeData} data for the edge
     */
    export interface LegalEntityCredentialEdgeArgs {
        qvi: LegalEntityCredentialEdgeData;
    }

    /**
     * LegalEntityCredentialEdge
     *
     * Used as edge property for {@link createLegalEntityCredential}
     *
     * @property {d string} digest of {@link LegalEntityCredentialEdge} block
     * @property {qvi LegalEntityCredentialEdgeData} nested block of {@link LegalEntityCredentialEdgeData}
     */
    export class LegalEntityCredentialEdge {
        readonly d: string;
        readonly qvi: LegalEntityCredentialEdgeData;

        constructor({ qvi }: LegalEntityCredentialEdgeArgs) {
            this.qvi = qvi;
            this.d = Saider.saidify({ d: '', qvi: this.qvi })[1]['d'];
        }
    }

    /**
     * LegalEntityCredentialEdgeDataArgs
     *
     * Parameters for {@link LegalEntityCredentialEdgeData}
     *
     * @property {qviCredentialSAID string} SAID of previously issued QVI credential
     */
    export interface LegalEntityCredentialEdgeDataArgs {
        qviCredentialSAID: string;
    }

    /**
     * LegalEntityCredentialEdgeData
     *
     * Nested property for {@link LegalEntityCredentialEdge}
     *
     * @property {n string} SAID of previously issued QVI credential
     * @property {s string} SAID of QVI credential schema
     */
    export class LegalEntityCredentialEdgeData {
        n: string;
        s: string;

        constructor({ qviCredentialSAID }: LegalEntityCredentialEdgeDataArgs) {
            this.n = qviCredentialSAID;
            this.s = Schema.QVI;
        }
    }

    /**
     * EngagementContextRoleAuthorizationEdgeArgs
     *
     * Parameters for {@link EngagementContextRoleAuthorizationEdge}
     *
     * @property {le EngagementContextRoleAuthorizationCredentialEdgeData} data for the edge
     */
    export interface EngagementContextRoleAuthorizationEdgeArgs {
        le: EngagementContextRoleAuthorizationCredentialEdgeData;
    }

    /**
     * EngagementContextRoleAuthorizationEdge
     *
     * Used as edge property for {@link createEngagementContextRoleCredential}
     *
     * @property {d string} digest of {@link EngagementContextRoleAuthorizationEdge} block
     * @property {qvi EngagementContextRoleAuthorizationEdgeData} nested block of {@link EngagementContextRoleAuthorizationEdgeData}
     */
    export class EngagementContextRoleAuthorizationEdge {
        readonly d: string;
        readonly le: EngagementContextRoleAuthorizationCredentialEdgeData;

        constructor({ le }: EngagementContextRoleAuthorizationEdgeArgs) {
            this.d = Saider.saidify({ d: '', le: le })[1]['d'];
            this.le = le;
        }
    }

    /**
     * EngagementContextRoleAuthorizationCredentialEdgeDataArgs
     *
     * Parameters for {@link EngagementContextRoleAuthorizationCredentialEdgeData}
     *
     * @property {legalEntityCredentialSAID string} SAID of previously issued Legal Entity credential
     */
    export interface EngagementContextRoleAuthorizationCredentialEdgeDataArgs {
        legalEntityCredentialSAID: string;
    }

    /**
     * EngagementContextRoleAuthorizationCredentialEdgeData
     *
     * Nested property for {@link EngagementContextRoleAuthorizationEdge}
     *
     * @property {n string} SAID of previously issued Legal Entity credential
     * @property {s string} SAID of Legal Entity credential schema
     */
    export class EngagementContextRoleAuthorizationCredentialEdgeData {
        n: string;
        s: string;

        constructor({
            legalEntityCredentialSAID,
        }: EngagementContextRoleAuthorizationCredentialEdgeDataArgs) {
            this.n = legalEntityCredentialSAID;
            this.s = Schema.LE;
        }
    }

    /**
     * OfficialOrganizationalRoleAuthorizationEdgeArgs
     *
     * Parameters for {@link OfficialOrganizationalRoleAuthorizationEdge}
     *
     * @property {le OfficialOrganizationalRoleAuthorizationCredentialEdgeData} data for the edge
     */
    export interface OfficialOrganizationalRoleAuthorizationEdgeArgs {
        le: OfficialOrganizationalRoleAuthorizationCredentialEdgeData;
    }

    /**
     * OfficialOrganizationalRoleAuthorizationEdge
     *
     * Used as edge property for {@link createEngagementContextRoleCredential}
     *
     * @property {d string} digest of {@link OfficialOrganizationalRoleAuthorizationEdge} block
     * @property {qvi OfficialOrganizationalRoleAuthorizationEdgeData} nested block of {@link OfficialOrganizationalRoleAuthorizationEdgeData}
     */
    export class OfficialOrganizationalRoleAuthorizationEdge {
        readonly d: string;
        readonly le: OfficialOrganizationalRoleAuthorizationCredentialEdgeData;

        constructor({ le }: OfficialOrganizationalRoleAuthorizationEdgeArgs) {
            this.d = Saider.saidify({ d: '', le: le })[1]['d'];
            this.le = le;
        }
    }

    /**
     * OfficialOrganizationalRoleAuthorizationCredentialEdgeDataArgs
     *
     * Parameters for {@link OfficialOrganizationalRoleAuthorizationCredentialEdgeData}
     *
     * @property {legalEntityCredentialSAID string} SAID of previously issued Legal Entity credential
     */
    export interface OfficialOrganizationalRoleAuthorizationCredentialEdgeDataArgs {
        legalEntityCredentialSAID: string;
    }

    /**
     * OfficialOrganizationalRoleAuthorizationCredentialEdgeData
     *
     * Nested property for {@link OfficialOrganizationalRoleAuthorizationEdge}
     *
     * @property {n string} SAID of previously issued Legal Entity credential
     * @property {s string} SAID of Legal Entity credential schema
     */
    export class OfficialOrganizationalRoleAuthorizationCredentialEdgeData {
        n: string;
        s: string;

        constructor({
            legalEntityCredentialSAID,
        }: OfficialOrganizationalRoleAuthorizationCredentialEdgeDataArgs) {
            this.n = legalEntityCredentialSAID;
            this.s = Schema.LE;
        }
    }
}

export { edges };
