import { SignifyClient } from 'signify-ts';

type qb64 = string;

export class LE {
    private readonly client: SignifyClient;
    private readonly name: string;
    private readonly registryAID: qb64;

    /**
     * LE
     *
     * Class for performing LE as a QVI opertations:
     *
     *  - Issue Engagement Context Role Auth Credential
     *  - Issue Official Organizational Role Auth Credential
     *
     * @param client
     * @param name
     * @param registryAID
     */
    constructor(client: SignifyClient, name: string, registryAID: qb64) {
        this.client = client;
        this.name = name;
        this.registryAID = registryAID;
    }
}
