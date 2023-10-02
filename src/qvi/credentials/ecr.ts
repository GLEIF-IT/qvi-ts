import { Saider } from 'signify-ts';
import { Schema } from '../../schema';
import { AID } from '../..';

export interface ECRvLEICredentialDataArgs {
    nonce: string;
    issuee: AID;
    timestamp: string;
    LEI: string;
    personLegalName: string;
    engagementContextRole: string;
}

export class ECRvLEICredentialData {
    readonly d: string;
    readonly u: string;
    readonly i: string;
    readonly dt: string;
    readonly LEI: string;
    readonly personLegalName: string;
    readonly engagementContextRole: string;

    constructor({
        nonce,
        issuee,
        timestamp,
        LEI,
        personLegalName,
        engagementContextRole,
    }: ECRvLEICredentialDataArgs) {
        this.u = nonce;
        this.i = issuee;
        this.dt = timestamp;
        this.LEI = LEI;
        this.personLegalName = personLegalName;
        this.engagementContextRole = engagementContextRole;
        this.d = Saider.saidify({
            d: '',
            u: this.u,
            i: this.i,
            dt: this.dt,
            LEI: this.LEI,
            personLegalName: this.personLegalName,
            engagementContextRole: this.engagementContextRole,
        })[1]['d'];
    }
}

export interface ECRAuthEdgeArgs {
    auth: ECRAuthvLEIEdgeData;
}

export class ECRAuthEdge {
    readonly d: string;
    readonly auth: ECRAuthvLEIEdgeData;

    constructor({ auth }: ECRAuthEdgeArgs) {
        this.d = Saider.saidify({ d: '', auth: auth })[1]['d'];
        this.auth = auth;
    }
}

export interface ECRAuthvLEIEdgeDataArgs {
    legalEntity: AID;
}

export class ECRAuthvLEIEdgeData {
    readonly n: string; // SAID of the the issuing LEs Legal Entity vLEI Credential
    readonly s: string = Schema.LE;
    readonly o: string = 'I2I';

    constructor({ legalEntity }: ECRAuthvLEIEdgeDataArgs) {
        this.n = legalEntity;
    }
}
