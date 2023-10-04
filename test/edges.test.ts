import { describe, expect, it } from '@jest/globals';
import { credentials } from '../src/credentials';

describe('ecr credentials', () => {
    it('should create ecr data', () => {
        let data = new credentials.LegalEntityCredentialData({
            issuee: 'issuee',
            timestamp: 'timestamp',
            LEI: 'lei',
        });

        expect(data.d).toBe('EN04IEg4A-w_CN8-hb2YfZsl9k7pyH9uUOYJR2rhbWKn');
        expect(data.i).toBe('issuee');
        expect(data.dt).toBe('timestamp');
        expect(data.LEI).toBe('lei');
    });
});
