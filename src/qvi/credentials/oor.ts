import { Saider } from 'signify-ts';
import { Schema } from '../../schema';
import { AID } from '../..';

export class OORvLEICredentialData {
    readonly LEI: string;
    readonly personLegalName: string;
    readonly officialOrganizationalRole: string;

    constructor(
        LEI: string,
        personLegalName: string,
        officialOrganizationalRole: string
    ) {
        this.LEI = LEI;
        this.personLegalName = personLegalName;
        this.officialOrganizationalRole = officialOrganizationalRole;
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
    legalEntity: AID;
}

export class OORAuthvLEIEdgeData {
    readonly n: string; // SAID of the the issuing LEs Legal Entity vLEI Credential
    readonly s: string = Schema.LE;
    readonly o: string = 'I2I';

    constructor({ legalEntity }: OORAuthvLEIEdgeDataArgs) {
        this.n = legalEntity;
    }
}
