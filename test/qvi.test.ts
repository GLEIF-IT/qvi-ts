import {QVI} from "../src";

describe("a qvi", () => {
    it("should have schema", () => {
        let qvi = new QVI("my_alias", "qvi_registry", "registry_nonce");
        console.log(qvi);
    });
});
