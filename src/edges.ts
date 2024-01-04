import { Saider } from 'signify-ts';
import { schema } from './schema';

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
            this.s = schema.QVI;
        }
    }

    /**
     * EngagementContextRoleEdgeArgs
     *
     * Parameters for {@link EngagementContextRoleCredentialEdge}
     *
     * @property {auth EngagementContextRoleCredentialEdgeData} data for the edge
     */
    export interface EngagementContextRoleCredentialEdgeArgs {
        auth: EngagementContextRoleCredentialEdgeData;
    }

    /**
     * EngagementContextRoleEdge
     *
     * Used as edge property for {@link createEngagementContextRoleCredential}
     *
     * @property {d string} digest of {@link EngagementContextRoleCredentialEdge} block
     * @property {auth EngagementContextRoleCredentialEdgeData} nested block of {@link EngagementContextRoleEdgeData}
     */
    export class EngagementContextRoleCredentialEdge {
        readonly d: string;
        readonly auth: EngagementContextRoleCredentialEdgeData;

        constructor({ auth }: EngagementContextRoleCredentialEdgeArgs) {
            this.d = Saider.saidify({ d: '', auth: auth })[1]['d'];
            this.auth = auth;
        }
    }

    /**
     * EngagementContextRoleCredentialEdgeDataArgs
     *
     * Parameters for {@link EngagementContextRoleCredentialEdgeData}
     *
     * @property {engagementContextRoleAuthorizationCredentialSAID string} SAID of previously issued Legal Entity credential
     */
    export interface EngagementContextRoleCredentialEdgeDataArgs {
        engagementContextRoleAuthorizationCredentialSAID: string;
    }

    /**
     * EngagementContextRoleCredentialEdgeData
     *
     * Nested property for {@link EngagementContextRoleCredentialEdge}
     *
     * @property {n string} SAID of previously issued Legal Entity credential
     * @property {s string} SAID of Engagement Context Authorization credential schema
     */
    export class EngagementContextRoleCredentialEdgeData {
        n: string;
        s: string;

        constructor({
            engagementContextRoleAuthorizationCredentialSAID,
        }: EngagementContextRoleCredentialEdgeDataArgs) {
            this.n = engagementContextRoleAuthorizationCredentialSAID;
            this.s = schema.ECRAuth;
        }
    }

    /**
     * DirectEngagementContextRoleEdgeArgs
     *
     * Parameters for {@link DirectEngagementContextRoleCredentialEdge}
     *
     * @property {le DirectEngagementContextRoleCredentialEdgeData} data for the edge
     */
    export interface DirectEngagementContextRoleCredentialEdgeArgs {
        le: DirectEngagementContextRoleCredentialEdgeData;
    }

    /**
     * DirectEngagementContextRoleEdge
     *
     * Used as edge property for {@link createDirectEngagementContextRoleCredential}
     *
     * @property {d string} digest of {@link DirectEngagementContextRoleCredentialEdge} block
     * @property {le DirectEngagementContextRoleCredentialEdgeData} nested block of {@link DirectEngagementContextRoleEdgeData}
     */
    export class DirectEngagementContextRoleCredentialEdge {
        readonly d: string;
        readonly le: DirectEngagementContextRoleCredentialEdgeData;

        constructor({ le }: DirectEngagementContextRoleCredentialEdgeArgs) {
            this.d = Saider.saidify({ d: '', le: le })[1]['d'];
            this.le = le;
        }
    }

    /**
     * DirectEngagementContextRoleCredentialEdgeDataArgs
     *
     * Parameters for {@link DirectEngagementContextRoleCredentialEdgeData}
     *
     * @property {legalEntityCredentialSAID string} SAID of previously issued Legal Entity credential
     */
    export interface DirectEngagementContextRoleCredentialEdgeDataArgs {
        legalEntityCredentialSAID: string;
    }

    /**
     * DirectEngagementContextRoleCredentialEdgeData
     *
     * Nested property for {@link DirectEngagementContextRoleCredentialEdge}
     *
     * @property {n string} SAID of previously issued Legal Entity credential
     * @property {s string} SAID of Legal Entity credential schema
     */
    export class DirectEngagementContextRoleCredentialEdgeData {
        n: string;
        s: string;

        constructor({
            legalEntityCredentialSAID,
        }: DirectEngagementContextRoleCredentialEdgeDataArgs) {
            this.n = legalEntityCredentialSAID;
            this.s = schema.LE;
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
            this.s = schema.LE;
        }
    }

    /**
     * OfficialOrganizationalRoleCredentialEdgeArgs
     *
     * Parameters for {@link OfficialOrganizationalRoleCredentialEdge}
     *
     * @property {auth OfficialOrganizationalRoleCredentialEdgeData} data for the edge
     */
    export interface OfficialOrganizationalRoleCredentialEdgeArgs {
        auth: OfficialOrganizationalRoleCredentialEdgeData;
    }

    /**
     * OfficialOrganizationalRoleCredentialEdge
     *
     * Used as edge property for {@link createOfficialOrganizationalRoleCredential}
     *
     * @property {d string} digest of {@link OfficialOrganizationalRoleCredentialEdge} block
     * @property {auth OfficialOrganizationalRoleCredentialEdgeData} nested block of {@link OfficialOrganizationalRoleCredentialEdgeData}
     */
    export class OfficialOrganizationalRoleCredentialEdge {
        readonly d: string;
        readonly auth: OfficialOrganizationalRoleCredentialEdgeData;

        constructor({ auth }: OfficialOrganizationalRoleCredentialEdgeArgs) {
            this.d = Saider.saidify({ d: '', auth: auth })[1]['d'];
            this.auth = auth;
        }
    }

    /**
     * OfficialOrganizationalRoleCredentialEdgeDataArgs
     *
     * Parameters for {@link OfficialOrganizationalRoleCredentialEdgeData}
     *
     * @property {officialOrganizationalRoleAuthorizationCredentialSAID string} SAID of previously issued Legal Entity credential
     */
    export interface OfficialOrganizationalRoleCredentialEdgeDataArgs {
        officialOrganizationalRoleAuthorizationCredentialSAID: string;
    }

    /**
     * OfficialOrganizationalRoleCredentialEdgeData
     *
     * Nested property for {@link OfficialOrganizationalRoleCredentialEdge}
     *
     * @property {n string} SAID of previously issued Legal Entity credential
     * @property {s string} SAID of Engagement Context Authorization credential schema
     */
    export class OfficialOrganizationalRoleCredentialEdgeData {
        n: string;
        s: string;

        constructor({
            officialOrganizationalRoleAuthorizationCredentialSAID,
        }: OfficialOrganizationalRoleCredentialEdgeDataArgs) {
            this.n = officialOrganizationalRoleAuthorizationCredentialSAID;
            this.s = schema.OORAuth;
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
            this.s = schema.LE;
        }
    }
}

export { edges };
