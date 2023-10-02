import { Saider } from 'signify-ts';
import { AID } from '../../index';

export class ECRAuthvLEICredentialData {
    readonly d: string;
    readonly i: AID;
    readonly dt: string;
    readonly AID: AID;
    readonly LEI: string;
    readonly personLegalName: string;
    readonly engagementContextRole: string;

    constructor(
        qviAID: AID,
        timestamp: string,
        recipient: AID,
        LEI: string,
        personLegalName: string,
        engagementContextRole: string
    ) {
        this.i = qviAID;
        this.dt = timestamp;
        this.AID = recipient;
        this.LEI = LEI;
        this.personLegalName = personLegalName;
        this.engagementContextRole = engagementContextRole;
        this.d = Saider.saidify({
            d: '',
            i: this.i,
            dt: this.dt,
            AID: this.AID,
            LEI: this.LEI,
            personLegalName: this.personLegalName,
            officialOrganizationalRole: this.engagementContextRole,
        })[1]['d'];
    }
}
