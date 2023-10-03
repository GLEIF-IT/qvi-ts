import { Saider } from 'signify-ts';
import { AID } from '../..';
import { Schema } from '../../schema';

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

export class LEQVIEdge {
    readonly d: string;
    readonly qvi: QVIEdgeData;

    constructor(qviAID: string) {
        this.qvi = new QVIEdgeData({ qviAID: qviAID });
        this.d = Saider.saidify({ d: '', qvi: this.qvi })[1]['d'];
    }
}

export interface QVIEdgeDataArgs {
    qviAID: string;
}

export class QVIEdgeData {
    n: string;
    s: string;

    constructor({ qviAID }: QVIEdgeDataArgs) {
        this.n = qviAID;
        this.s = Schema.QVI;
    }
}
