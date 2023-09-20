import {SignifyClient} from 'signify-ts';
import {describe, expect, it} from '@jest/globals';
import {mock} from 'ts-mockito';
import {QVI} from "../src";

describe("a qvi", () => {
    it("should have schema", () => {
        const mockClient = mock(SignifyClient);

        let qvi = new QVI(mockClient);
        
        expect(qvi.SCHEMA_CACHE.LEGAL_ENTITY.RULES.usageDisclaimer.l).toBe("\"Usage of a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, does not assert that the Legal Entity is trustworthy, honest, reputable in its business dealings, safe to do business with, or compliant with any laws or that an implied or expressly intended purpose will be fulfilled.\"");
        expect(qvi.SCHEMA_CACHE.LEGAL_ENTITY.RULES.issuanceDisclaimer.l).toBe("\"All information in a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, is accurate as of the date the validation process was complete. The vLEI Credential has been issued to the legal entity or person named in the vLEI Credential as the subject; and the qualified vLEI Issuer exercised reasonable care to perform the validation process set forth in the vLEI Ecosystem Governance Framework.\"");
    });
});