import { describe, expect, it } from '@jest/globals';
import { Schema } from '../src/schema';

describe("shema", () => {
    it("should have saids", () => {
        expect(Schema.LE).toBe("ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY");
        expect(Schema.ECR).toBe("EEy9PkikFcANV1l7EHukCeXqrzT1hNZjGlUk7wuMO5jw");
        expect(Schema.ECRAuth).toBe("EH6ekLjSr8V32WyFbGe1zXjTzFs9PkTYmupJ9H65O14g");
        expect(Schema.OOR).toBe("EBNaNu-M9P5cgrnfl2Fvymy4E_jvxxyjb70PRtiANlJy");
        expect(Schema.OORAuth).toBe("EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E");
    });
});