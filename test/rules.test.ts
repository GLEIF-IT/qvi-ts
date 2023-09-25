import { describe, expect, it } from '@jest/globals';
import { Rules } from '../src/rules';

describe('rules', () => {
    it('should have rules for legal entity', () => {
        expect(Rules.LE.d).toBe('ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY');
        expect(Rules.LE.usageDisclaimer.l).toBe(
            'Usage of a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, does not assert that the Legal Entity is trustworthy, honest, reputable in its business dealings, safe to do business with, or compliant with any laws or that an implied or expressly intended purpose will be fulfilled.'
        );
        expect(Rules.LE.issuanceDisclaimer.l).toBe(
            'All information in a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, is accurate as of the date the validation process was complete. The vLEI Credential has been issued to the legal entity or person named in the vLEI Credential as the subject; and the qualified vLEI Issuer exercised reasonable care to perform the validation process set forth in the vLEI Ecosystem Governance Framework.'
        );
    });

    it('should have rules for ecr', () => {
        expect(Rules.ECR.d).toBe(
            'EEy9PkikFcANV1l7EHukCeXqrzT1hNZjGlUk7wuMO5jw'
        );
        expect(Rules.ECR.usageDisclaimer.l).toBe(
            'Usage of a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, does not assert that the Legal Entity is trustworthy, honest, reputable in its business dealings, safe to do business with, or compliant with any laws or that an implied or expressly intended purpose will be fulfilled.'
        );
        expect(Rules.ECR.issuanceDisclaimer.l).toBe(
            'All information in a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, is accurate as of the date the validation process was complete. The vLEI Credential has been issued to the legal entity or person named in the vLEI Credential as the subject; and the qualified vLEI Issuer exercised reasonable care to perform the validation process set forth in the vLEI Ecosystem Governance Framework.'
        );
        expect(Rules.ECR.privacyDisclaimer.l).toBe(
            'Privacy Considerations are applicable to QVI ECR AUTH vLEI Credentials.  It is the sole responsibility of QVIs as Issuees of QVI ECR AUTH vLEI Credentials to present these Credentials in a privacy-preserving manner using the mechanisms provided in the Issuance and Presentation Exchange (IPEX) protocol specification and the Authentic Chained Data Container (ACDC) specification.  https://github.com/WebOfTrust/IETF-IPEX and https://github.com/trustoverip/tswg-acdc-specification.'
        );
    });

    it('should have rules for ecr auth', () => {
        expect(Rules.ECRAuth.d).toBe(
            'EH6ekLjSr8V32WyFbGe1zXjTzFs9PkTYmupJ9H65O14g'
        );
        expect(Rules.ECRAuth.usageDisclaimer.l).toBe(
            'Usage of a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, does not assert that the Legal Entity is trustworthy, honest, reputable in its business dealings, safe to do business with, or compliant with any laws or that an implied or expressly intended purpose will be fulfilled.'
        );
        expect(Rules.ECRAuth.issuanceDisclaimer.l).toBe(
            'All information in a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, is accurate as of the date the validation process was complete. The vLEI Credential has been issued to the legal entity or person named in the vLEI Credential as the subject; and the qualified vLEI Issuer exercised reasonable care to perform the validation process set forth in the vLEI Ecosystem Governance Framework.'
        );
        expect(Rules.ECRAuth.privacyDisclaimer.l).toBe(
            'Privacy Considerations are applicable to QVI ECR AUTH vLEI Credentials.  It is the sole responsibility of QVIs as Issuees of QVI ECR AUTH vLEI Credentials to present these Credentials in a privacy-preserving manner using the mechanisms provided in the Issuance and Presentation Exchange (IPEX) protocol specification and the Authentic Chained Data Container (ACDC) specification.  https://github.com/WebOfTrust/IETF-IPEX and https://github.com/trustoverip/tswg-acdc-specification.'
        );
    });

    it('should have rules for oor', () => {
        expect(Rules.OOR.d).toBe(
            'EBNaNu-M9P5cgrnfl2Fvymy4E_jvxxyjb70PRtiANlJy'
        );
        expect(Rules.OOR.usageDisclaimer.l).toBe(
            'Usage of a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, does not assert that the Legal Entity is trustworthy, honest, reputable in its business dealings, safe to do business with, or compliant with any laws or that an implied or expressly intended purpose will be fulfilled.'
        );
        expect(Rules.OOR.issuanceDisclaimer.l).toBe(
            'All information in a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, is accurate as of the date the validation process was complete. The vLEI Credential has been issued to the legal entity or person named in the vLEI Credential as the subject; and the qualified vLEI Issuer exercised reasonable care to perform the validation process set forth in the vLEI Ecosystem Governance Framework.'
        );
    });

    it('should have rules for oor auth', () => {
        expect(Rules.OORAuth.d).toBe(
            'EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E'
        );
        expect(Rules.OORAuth.usageDisclaimer.l).toBe(
            'Usage of a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, does not assert that the Legal Entity is trustworthy, honest, reputable in its business dealings, safe to do business with, or compliant with any laws or that an implied or expressly intended purpose will be fulfilled.'
        );
        expect(Rules.OORAuth.issuanceDisclaimer.l).toBe(
            'All information in a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, is accurate as of the date the validation process was complete. The vLEI Credential has been issued to the legal entity or person named in the vLEI Credential as the subject; and the qualified vLEI Issuer exercised reasonable care to perform the validation process set forth in the vLEI Ecosystem Governance Framework.'
        );
    });
});
