import { Saider } from 'signify-ts';
import { QVIvLEIEdge } from '../qvi';

export class LEvLEICredentialData {
    readonly LEI: string;

    constructor(LEI: string) {
        this.LEI = LEI;
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

export interface ECRLEEdges {
    d: string;
    le: ECRLEEdge;
}

interface ECRLEEdge {
    n: string; //SAID of the ACDC to which the edge connects
    s: 'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY';
}
