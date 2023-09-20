export interface LEVLEICredential {
    i: string;
    dt: string;
    LEI: string;
}
export interface LE_VLEI_EDGES {
    d: string,
    qvi: QVI_VLEI_EDGE
}
export interface QVI_VLEI_EDGE {
    n: string,//issuer of the credential
    s: "EBfdlu8R27Fbx-ehrqwImnK-8Cm79sqbAQ4MmvEAYqao", //subject of the credential
}

export interface ECRVLEICredential {
    i: string;  // issuer
    dt: string; // date
    LEI: string; // LEI
    personLegalName: string; // person's legal name to which the role is assigned
    engagementContextRole: string; // TODO: find list of roles
}
export interface ECR_AUTH_EDGES {
    d: string,
    auth: ECR_AUTH_EDGE,
}
interface ECR_AUTH_EDGE {
    n: string, //SAID of the ACDC to which the edge connects
    s: "EH6ekLjSr8V32WyFbGe1zXjTzFs9PkTYmupJ9H65O14g",
    o: "I2I",
}
export interface ECR_LE_EDGES {
    d: string,
    le: ECR_LE_EDGE,
}
interface ECR_LE_EDGE {
    n: string, //SAID of the ACDC to which the edge connects
    s: "ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY"
}

export interface OORVLEICredential {
    i: string;  // issuer
    dt: string; // date
    LEI: string; // LEI
    personLegalName: string; // person's legal name to which the role is assigned
    officialRole: string; // TODO: find list of roles
}
export interface OOR_AUTH_EDGES {
    d: string,
    auth: OOR_AUTH_EDGE,
}
interface OOR_AUTH_EDGE {
    n: string, //SAID of the ACDC to which the edge connects
    s: "EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E",
    o: "I2I",
}