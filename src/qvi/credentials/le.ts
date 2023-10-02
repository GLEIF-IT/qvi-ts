import { Saider } from 'signify-ts';
import { QVIvLEIEdge } from '../qvi';
import { AID } from '../..';

export interface LEvLEICredentialDataArgs {
    readonly issuee: AID;
    readonly timestamp: string;
    readonly LEI: string;
}

export class LEvLEICredentialData {
    readonly d: string;
    readonly i: AID;
    readonly dt: string;
    readonly LEI: string;

    constructor({ issuee, timestamp, LEI }: LEvLEICredentialDataArgs) {
        this.i = issuee;
        this.dt = timestamp;
        this.LEI = LEI;
        this.d = Saider.saidify({
            d: '',
            i: this.i,
            dt: this.dt,
            LEI: this.LEI,
        })[1]['d'];
    }
}

export class LEvLEICredentialEdge {
    readonly d: string;
    readonly qvi: QVIvLEIEdge;

    constructor(qviAID: string) {
        this.qvi = new QVIvLEIEdge(qviAID);
        this.d = Saider.saidify({ d: '', qvi: this.qvi })[1]['d'];
    }
}
