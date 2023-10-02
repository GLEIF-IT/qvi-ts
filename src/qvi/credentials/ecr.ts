import { Saider } from 'signify-ts';
import { Schema } from '../../schema';
import { AID } from '../..';

export class ECRvLEICredentialData {
    readonly LEI: string;
    readonly personLegalName: string;
    readonly engagementContextRole: string;

    constructor(
        LEI: string,
        personLegalName: string,
        engagementContextRole: string
    ) {
        this.LEI = LEI;
        this.personLegalName = personLegalName;
        this.engagementContextRole = engagementContextRole;
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
