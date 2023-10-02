import { describe, expect, it } from '@jest/globals';
import { ECRvLEICredentialData } from '../../../src/qvi/credentials/ecr';

describe('ecr credentials', () => {
    it('should create ecr data', () => {
        let data = new ECRvLEICredentialData({
            issuee: 'issuee',
            nonce: 'a nonce',
            timestamp: 'timestamp',
            LEI: 'lei',
            personLegalName: 'my legal name',
            engagementContextRole: 'my context role',
        });

        expect(data.d).toBe('EJe2I27_e020_auO5pesYn7B23Ckdx2Cwu0kol4X-6zg');
        expect(data.u).toBe('a nonce');
        expect(data.i).toBe('issuee');
        expect(data.dt).toBe('timestamp');
        expect(data.LEI).toBe('lei');
        expect(data.personLegalName).toBe('my legal name');
        expect(data.engagementContextRole).toBe('my context role');
    });
});
