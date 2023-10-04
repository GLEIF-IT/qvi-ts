import { Saider } from 'signify-ts';
import { AID } from '.';

namespace credentials {
    /**
     * LegalEntityCredentialDataArgs
     *
     * Parameters for {@link LegalEntityCredentialData}
     *
     * @property {issuee AID} AID of credential issuee
     * @property {timestamp string} Date-time stamp
     * @property {LEI string} Legal Entity Identifier
     */
    export interface LegalEntityCredentialDataArgs {
        readonly issuee: AID;
        readonly timestamp: string;
        readonly LEI: string;
    }

    /**
     * LegalEntityCredentialData
     *
     * @property {d string} digest of {@link LegalEntityCredentialData} block
     * @property {i AID} AID of credential issuee
     * @property {dt string} Date-time stamp
     * @property {LEI string} Legal Entity Identifier
     */
    export class LegalEntityCredentialData {
        readonly d: string;
        readonly i: AID;
        readonly dt: string;
        readonly LEI: string;

        constructor({ issuee, timestamp, LEI }: LegalEntityCredentialDataArgs) {
            this.i = issuee;
            this.dt = timestamp;
            this.LEI = LEI;
            this.d = Saider.saidify({
                d: '',
                i: this.i,
                dt: this.dt,
                LEI: this.LEI,
            })[1]['d'];
        }
    }

    /**
     * EngagementContextRoleAuthorizationCredentialDataArgs
     *
     * Parameters for {@link EngagementContextRoleAuthorizationCredentialData}
     *
     * @property {qviAID AID} QVI Issuee AID
     * @property {timestamp string} Issuance date time
     * @property {issuee AID} AID of the intended recipient of the ECR credential
     * @property {LEI string} LEI of the requesting Legal Entity
     * @property {personLegalName string} Requested recipient name as provided during identity assurance
     * @property {engagementContextRole string} Requested role description i.e. 'Head of Standards'
     */
    export interface EngagementContextRoleAuthorizationCredentialDataArgs {
        readonly qviAID: AID;
        readonly timestamp: string;
        readonly issuee: AID;
        readonly LEI: string;
        readonly personLegalName: string;
        readonly engagementContextRole: string;
    }

    /**
     * EngagementContextRoleAuthorizationCredentialData
     *
     *
     * @property {d string} SAID of EngagementContextRoleAuthorizationCredentialData
     * @property {i string} QVI Issuee AID
     * @property {dt string} Issuance date time
     * @property {AID string} AID of the intended recipient of the ECR credential
     * @property {LEI string} LEI of the requesting Legal Entity
     * @property {personLegalName string} Requested recipient name as provided during identity assurance
     * @property {engagementContextRole string} Requested role description i.e. 'Head of Standards'
     */
    export class EngagementContextRoleAuthorizationCredentialData {
        readonly d: string;
        readonly i: AID;
        readonly dt: string;
        readonly AID: AID;
        readonly LEI: string;
        readonly personLegalName: string;
        readonly engagementContextRole: string;

        constructor({
            qviAID,
            timestamp,
            issuee,
            LEI,
            personLegalName,
            engagementContextRole,
        }: EngagementContextRoleAuthorizationCredentialDataArgs) {
            this.d = Saider.saidify({
                d: '',
                i: qviAID,
                dt: timestamp,
                AID: issuee,
                LEI: LEI,
                personLegalName: personLegalName,
                officialOrganizationalRole: engagementContextRole,
            })[1]['d'];
            this.i = qviAID;
            this.dt = timestamp;
            this.AID = issuee;
            this.LEI = LEI;
            this.personLegalName = personLegalName;
            this.engagementContextRole = engagementContextRole;
        }
    }

    /**
     * OfficialOrganizationalRoleAuthorizationCredentialDataArgs
     *
     * Parameters for {@link OfficialOrganizationalRoleAuthorizationCredentialData}
     *
     * @property {qviAID AID} QVI Issuee AID
     * @property {timestamp string} Issuance date time
     * @property {issuee AID} AID of the intended recipient of the ECR credential
     * @property {LEI string} LEI of the requesting Legal Entity
     * @property {personLegalName string} Requested recipient name as provided during identity assurance
     * @property {officialOrganizationalRole string} Requested ISO 5009 official role description i.e. 'Chairman' {@see https://www.gleif.org/en/about-lei/code-lists/iso-5009-official-organizational-roles-code-list}
     */
    export interface OfficialOrganizationalRoleAuthorizationCredentialDataArgs {
        readonly qviAID: AID;
        readonly timestamp: string;
        readonly issuee: AID;
        readonly LEI: string;
        readonly personLegalName: string;
        readonly officialOrganizationalRole: string;
    }

    /**
     * OfficialOrganizationalRoleAuthorizationCredentialData
     *
     * @property {d string} SAID of EngagementContextRoleAuthorizationCredentialData
     * @property {i string} QVI Issuee AID
     * @property {dt string} Issuance date time
     * @property {AID string} AID of the intended recipient of the ECR credential
     * @property {LEI string} LEI of the requesting Legal Entity
     * @property {personLegalName string} Requested recipient name as provided during identity assurance
     * @property {officialOrganizationalRole string} Requested ISO 5009 official role description i.e. 'Chairman' {@see https://www.gleif.org/en/about-lei/code-lists/iso-5009-official-organizational-roles-code-list}
     */
    export class OfficialOrganizationalRoleAuthorizationCredentialData {
        readonly d: string;
        readonly i: AID;
        readonly dt: string;
        readonly AID: AID;
        readonly LEI: string;
        readonly personLegalName: string;
        readonly officialOrganizationalRole: string;

        constructor({
            qviAID,
            timestamp,
            issuee,
            LEI,
            personLegalName,
            officialOrganizationalRole,
        }: OfficialOrganizationalRoleAuthorizationCredentialDataArgs) {
            this.i = qviAID;
            this.dt = timestamp;
            this.AID = issuee;
            this.LEI = LEI;
            this.personLegalName = personLegalName;
            this.officialOrganizationalRole = officialOrganizationalRole;
            this.d = Saider.saidify({
                d: '',
                i: this.i,
                dt: this.dt,
                AID: this.AID,
                LEI: this.LEI,
                personLegalName: this.personLegalName,
                officialOrganizationalRole: this.officialOrganizationalRole,
            })[1]['d'];
        }
    }
}

export { credentials };
