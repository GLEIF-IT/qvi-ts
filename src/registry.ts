import {SignifyClient} from "signify-ts";

export const QVI_CREDENTIAL_REGISTRY = "qvi_credential_registry";
export const getQviRegistry = async (client: SignifyClient, name: string) => {
    return await client.registries().list(name);
};
