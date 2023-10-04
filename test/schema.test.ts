import { describe, expect, it } from '@jest/globals';
import { schema } from '../src/schema';

describe('shema', () => {
    it('should have saids', () => {
        expect(schema.LE).toBe('ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY');
        expect(schema.ECR).toBe('EEy9PkikFcANV1l7EHukCeXqrzT1hNZjGlUk7wuMO5jw');
        expect(schema.ECRAuth).toBe(
            'EH6ekLjSr8V32WyFbGe1zXjTzFs9PkTYmupJ9H65O14g'
        );
        expect(schema.OOR).toBe('EBNaNu-M9P5cgrnfl2Fvymy4E_jvxxyjb70PRtiANlJy');
        expect(schema.OORAuth).toBe(
            'EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E'
        );
    });
});
