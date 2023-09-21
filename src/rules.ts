import { Schema } from './schema';

namespace Rules {
    const usageDisclaimer =
        'Usage of a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, does not assert that the Legal Entity is trustworthy, honest, reputable in its business dealings, safe to do business with, or compliant with any laws or that an implied or expressly intended purpose will be fulfilled.';
    const issuanceDisclaimer =
        'All information in a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, is accurate as of the date the validation process was complete. The vLEI Credential has been issued to the legal entity or person named in the vLEI Credential as the subject; and the qualified vLEI Issuer exercised reasonable care to perform the validation process set forth in the vLEI Ecosystem Governance Framework.';
    const privacyDisclaimer =
        'Privacy Considerations are applicable to QVI ECR AUTH vLEI Credentials.  It is the sole responsibility of QVIs as Issuees of QVI ECR AUTH vLEI Credentials to present these Credentials in a privacy-preserving manner using the mechanisms provided in the Issuance and Presentation Exchange (IPEX) protocol specification and the Authentic Chained Data Container (ACDC) specification.  https://github.com/WebOfTrust/IETF-IPEX and https://github.com/trustoverip/tswg-acdc-specification.';

    export interface IRules {
        readonly d: string;
        readonly usageDisclaimer: Rule;
        readonly issuanceDisclaimer: Rule;
    }

    export interface IPrivacyRules {
        readonly d: string;
        readonly usageDisclaimer: Rule;
        readonly issuanceDisclaimer: Rule;
        readonly privacyDisclaimer: Rule;
    }

    interface Rule {
        l: string;
    }

    export const LERules = {
        d: Schema.LE,
        usageDisclaimer: {
            l: usageDisclaimer,
        },
        issuanceDisclaimer: {
            l: issuanceDisclaimer,
        },
    };

    export const ECRRules = {
        d: Schema.ECR,
        usageDisclaimer: {
            l: usageDisclaimer,
        },
        issuanceDisclaimer: {
            l: issuanceDisclaimer,
        },
        privacyDisclaimer: {
            l: privacyDisclaimer,
        },
    };

    export const ECRAuthRules = {
        d: Schema.ECRAuth,
        usageDisclaimer: {
            l: usageDisclaimer,
        },
        issuanceDisclaimer: {
            l: issuanceDisclaimer,
        },
        privacyDisclaimer: {
            l: privacyDisclaimer,
        },
    };

    export const OORRules = {
        d: Schema.OOR,
        usageDisclaimer: {
            l: usageDisclaimer,
        },
        issuanceDisclaimer: {
            l: issuanceDisclaimer,
        },
    };

    export const OORAuthRules = {
        d: Schema.OORAuth,
        usageDisclaimer: {
            l: usageDisclaimer,
        },
        issuanceDisclaimer: {
            l: issuanceDisclaimer,
        },
    };
}

export { Rules };
