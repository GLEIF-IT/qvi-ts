export interface LEvLEICredential {
    i: string;
    dt: string;
    LEI: string;
}
export interface LEvLEIEdges {
    d: string,
    qvi: QVIvLEIEdge
}
export interface QVIvLEIEdge {
    n: string,//issuer of the credential
    s: "EBfdlu8R27Fbx-ehrqwImnK-8Cm79sqbAQ4MmvEAYqao", //subject of the credential
}

export interface ECRvLEICredential {
    i: string;  // issuer
    dt: string; // date
    LEI: string; // LEI
    personLegalName: string; // person's legal name to which the role is assigned
    engagementContextRole: string; // TODO: find list of roles
}
export interface ECRAuthEdges {
    d: string,
    auth: ECRAuthEdge,
}
interface ECRAuthEdge {
    n: string, //SAID of the ACDC to which the edge connects
    s: "EH6ekLjSr8V32WyFbGe1zXjTzFs9PkTYmupJ9H65O14g",
    o: "I2I",
}
export interface ECRLEEdges {
    d: string,
    le: ECRLEEdge,
}
interface ECRLEEdge {
    n: string, //SAID of the ACDC to which the edge connects
    s: "ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY"
}

export interface OORvLEICredential {
    i: string;  // issuer
    dt: string; // date
    LEI: string; // LEI
    personLegalName: string; // person's legal name to which the role is assigned
    officialRole: string; // TODO: find list of roles
}
export interface OORAuthEdges {
    d: string,
    auth: OORAuthEdge,
}
interface OORAuthEdge {
    n: string, //SAID of the ACDC to which the edge connects
    s: "EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E",
    o: "I2I",
}