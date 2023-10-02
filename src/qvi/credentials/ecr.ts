import { Saider } from 'signify-ts';

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

export class ECRAuthEdges {
    readonly d: string;
    readonly auth: ECRvLEIAuthEdge;

    constructor(auth: ECRvLEIAuthEdge) {
        this.d = Saider.saidify({ d: '', auth: auth })[1]['d'];
        this.auth = auth;
    }
}

export class ECRvLEIAuthEdge {
    readonly n: string; // AID of the issuing Legal Entity
    readonly s: string = 'EH6ekLjSr8V32WyFbGe1zXjTzFs9PkTYmupJ9H65O14g';
    readonly o: string = 'I2I';

    constructor(legalEntityAID: string) {
        this.n = legalEntityAID;
    }
}
