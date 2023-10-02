import { describe, expect, it } from '@jest/globals';
import { ECRAuthvLEICredentialData } from '../../../src/le/credentials/ecr-auth';

describe('le credentials', () => {
    it('should create ecr auth edge', () => {
        let auth = new ECRAuthvLEICredentialData({
            qviAID: 'qvi_aid',
            timestamp: 'timestamp',
            recipient: 'recipient',
            LEI: 'an LEI',
            personLegalName: 'My Legal Name',
            engagementContextRole: 'my context role',
        });

        expect(auth.d).toBe('EB9QkDZJW5iS2vyiTJQ1lVAo1qImK_HteOXaZE9aQRjG');
        expect(auth.i).toBe('qvi_aid');
        expect(auth.dt).toBe('timestamp');
        expect(auth.LEI).toBe('an LEI');
        expect(auth.personLegalName).toBe('My Legal Name');
        expect(auth.engagementContextRole).toBe('my context role');
    });
});
