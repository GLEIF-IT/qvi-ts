import { Saider } from 'signify-ts';
import { AID } from '.';

namespace credentials {
    /**
     * LegalEntityCredentialDataArgs
     *
     * Parameters for {@link LegalEntityCredentialData}
     *
     * @property {issuee AID} AID of credential issuee
     * @property {timestamp string} Date-time stamp
     * @property {LEI string} Legal Entity Identifier
     */
    export interface LegalEntityCredentialDataArgs {
        readonly issuee: AID;
        readonly timestamp: string;
        readonly LEI: string;
    }

    /**
     * LegalEntityCredentialData
     *
     * @property {d string} digest of {@link LegalEntityCredentialData} block
     * @property {i AID} AID of credential issuee
     * @property {dt string} Date-time stamp
     * @property {LEI string} Legal Entity Identifier
     */
    export class LegalEntityCredentialData {
        readonly d: string;
        readonly i: AID;
        readonly dt: string;
        readonly LEI: string;

        constructor({ issuee, timestamp, LEI }: LegalEntityCredentialDataArgs) {
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
}

export { credentials };
