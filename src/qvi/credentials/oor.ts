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

export interface OORAuthEdges {
    d: string;
    auth: OORvLEIAuthEdge;
}

interface OORvLEIAuthEdge {
    n: string; //SAID of the ACDC to which the edge connects
    s: 'EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E';
    o: 'I2I';
}
