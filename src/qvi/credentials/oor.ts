import { Saider } from 'signify-ts';
import { Schema } from '../../schema';
import { AID } from '../..';

export interface OORvLEICredentialDataArgs {
    nonce: string;
    issuee: AID;
    timestamp: string;
    LEI: string;
    personLegalName: string;
    officialOrganizationalRole: string;
}

export class OORvLEICredentialData {
    readonly d: string;
    readonly u: string;
    readonly i: string;
    readonly dt: string;
    readonly LEI: string;
    readonly personLegalName: string;
    readonly officialOrganizationalRole: string;

    constructor({
        nonce,
        issuee,
        timestamp,
        LEI,
        personLegalName,
        officialOrganizationalRole,
    }: OORvLEICredentialDataArgs) {
        this.u = nonce;
        this.i = issuee;
        this.dt = timestamp;
        this.LEI = LEI;
        this.personLegalName = personLegalName;
        this.officialOrganizationalRole = officialOrganizationalRole;
        this.d = Saider.saidify({
            d: '',
            u: this.u,
            i: this.i,
            dt: this.dt,
            LEI: this.LEI,
            personLegalName: this.personLegalName,
            engagementContextRole: this.officialOrganizationalRole,
        })[1]['d'];
    }
}

export interface OORAuthEdgeArgs {
    auth: OORAuthvLEIEdgeData;
}

export class OORAuthEdge {
    readonly d: string;
    readonly auth: OORAuthvLEIEdgeData;

    constructor({ auth }: OORAuthEdgeArgs) {
        this.d = Saider.saidify({ d: '', auth: auth })[1]['d'];
        this.auth = auth;
    }
}

export interface OORAuthvLEIEdgeDataArgs {
    leCredentialSAID: AID;
}

export class OORAuthvLEIEdgeData {
    readonly n: string; // SAID of the the issuing LEs Legal Entity vLEI Credential
    readonly s: string = Schema.LE;
    readonly o: string = 'I2I';

    constructor({ leCredentialSAID }: OORAuthvLEIEdgeDataArgs) {
        this.n = leCredentialSAID;
    }
}
