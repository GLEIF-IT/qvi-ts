import { Saider } from 'signify-ts';
import { AID } from '../../index';

export interface OORAuthvLEICredentialArgs {
    readonly qviAID: AID;
    readonly timestamp: string;
    readonly recipient: AID;
    readonly LEI: string;
    readonly personLegalName: string;
    readonly officialOrganizationalRole: string;
}

export class OORAuthvLEICredentialData {
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
        recipient,
        LEI,
        personLegalName,
        officialOrganizationalRole,
    }: OORAuthvLEICredentialArgs) {
        this.i = qviAID;
        this.dt = timestamp;
        this.AID = recipient;
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
