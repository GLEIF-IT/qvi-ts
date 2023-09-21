import { Saider } from 'signify-ts';
import { Schema } from './schema';

export class LEvLEICredentialData {
    readonly LEI: string;

    constructor(LEI: string) {
        this.LEI = LEI;
    }
}

export class LEvLEICredentialEdge {
    readonly d: string;
    readonly qvi: QVIvLEIEdge;

    constructor(qviAID: string) {
        this.qvi = new QVIvLEIEdge(qviAID);
        // this needs to be better
        this.d = Saider.saidify({ d: '', qvi: this.qvi })[1]['d'];
    }
}

export class QVIvLEIEdge {
    n: string;
    s: string;

    constructor(qviAID: string) {
        this.n = qviAID;
        this.s = Schema.QVI;
    }
}

export interface ECRvLEICredentialData {
    i: string;
    dt: string;
    LEI: string;
    personLegalName: string;
    engagementContextRole: string;
}
export interface ECRAuthEdges {
    d: string;
    auth: ECRAuthEdge;
}
interface ECRAuthEdge {
    n: string; //SAID of the ACDC to which the edge connects
    s: 'EH6ekLjSr8V32WyFbGe1zXjTzFs9PkTYmupJ9H65O14g';
    o: 'I2I';
}
export interface ECRLEEdges {
    d: string;
    le: ECRLEEdge;
}
interface ECRLEEdge {
    n: string; //SAID of the ACDC to which the edge connects
    s: 'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY';
}

export interface OORvLEICredential {
    i: string; // issuer
    dt: string; // date
    LEI: string; // LEI
    personLegalName: string; // person's legal name to which the role is assigned
    officialRole: string; // TODO: find list of roles
}
export interface OORAuthEdges {
    d: string;
    auth: OORAuthEdge;
}
interface OORAuthEdge {
    n: string; //SAID of the ACDC to which the edge connects
    s: 'EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E';
    o: 'I2I';
}
