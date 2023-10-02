import { describe, expect, it } from '@jest/globals';
import { OORvLEICredentialData } from '../../../src/qvi/credentials/oor';

describe('ecr credentials', () => {
    it('should create ecr data', () => {
        let data = new OORvLEICredentialData({
            issuee: 'issuee',
            nonce: 'a nonce',
            timestamp: 'timestamp',
            LEI: 'lei',
            personLegalName: 'my legal name',
            officialOrganizationalRole: 'my official role',
        });

        expect(data.d).toBe('EE-zF66f5qGrWfG5vnLH57gI0qcKqgV-PWxup_ctAjUy');
        expect(data.u).toBe('a nonce');
        expect(data.i).toBe('issuee');
        expect(data.dt).toBe('timestamp');
        expect(data.LEI).toBe('lei');
        expect(data.personLegalName).toBe('my legal name');
        expect(data.officialOrganizationalRole).toBe('my official role');
    });
});
