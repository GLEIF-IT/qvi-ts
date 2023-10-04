import { Saider } from 'signify-ts';
import { Schema } from './schema';

namespace edges {
    /**
     * LegalEntityCredentialEdgeArgs
     *
     * Parameters for {@link LegalEntityCredentialEdge}
     *
     * @property {qvi LegalEntityCredentialEdgeData} data for the edge
     */
    export interface LegalEntityCredentialEdgeArgs {
        qvi: LegalEntityCredentialEdgeData;
    }

    /**
     * LegalEntityCredentialEdge
     *
     * Used as edge property for {@link createLegalEntityCredential}
     *
     * @property {d string} digest of {@link LegalEntityCredentialEdge} block
     * @property {qvi LegalEntityCredentialEdgeData} nested block of {@link LegalEntityCredentialEdgeData}
     */
    export class LegalEntityCredentialEdge {
        readonly d: string;
        readonly qvi: LegalEntityCredentialEdgeData;

        constructor({ qvi }: LegalEntityCredentialEdgeArgs) {
            this.qvi = qvi;
            this.d = Saider.saidify({ d: '', qvi: this.qvi })[1]['d'];
        }
    }

    /**
     * LegalEntityCredentialEdgeDataArgs
     *
     * Parameters for {@link LegalEntityCredentialEdgeData}
     *
     * @property {qviCredentialSAID string} SAID of previously issued QVI credential
     */
    export interface LegalEntityCredentialEdgeDataArgs {
        qviCredentialSAID: string;
    }

    /**
     * LegalEntityCredentialEdgeData
     *
     * Nested property for {@link LegalEntityCredentialEdge}
     *
     * @property {n string} SAID of previously issued QVI credential
     * @property {s string} SAID of QVI credential schema
     */
    export class LegalEntityCredentialEdgeData {
        n: string;
        s: string;

        constructor({ qviCredentialSAID }: LegalEntityCredentialEdgeDataArgs) {
            this.n = qviCredentialSAID;
            this.s = Schema.QVI;
        }
    }
}

export { edges };
