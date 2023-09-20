namespace Rules {

    const usageDisclaimer: string = "Usage of a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, does not assert that the Legal Entity is trustworthy, honest, reputable in its business dealings, safe to do business with, or compliant with any laws or that an implied or expressly intended purpose will be fulfilled."
    const issuanceDisclaimer: string = "All information in a valid, unexpired, and non-revoked vLEI Credential, as defined in the associated Ecosystem Governance Framework, is accurate as of the date the validation process was complete. The vLEI Credential has been issued to the legal entity or person named in the vLEI Credential as the subject; and the qualified vLEI Issuer exercised reasonable care to perform the validation process set forth in the vLEI Ecosystem Governance Framework."

    export class LERules {
        readonly d = "EDIai3Wkd-Z_4cezz9nYEcCK3KNH5saLvZoS_84JL6NU";
        usageDisclaimer = usageDisclaimer;
        issuanceDisclaimer = issuanceDisclaimer;

    }
}

export {};