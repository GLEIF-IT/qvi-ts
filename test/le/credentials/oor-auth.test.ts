import { describe, expect, it } from '@jest/globals';
import { OORAuthvLEICredentialData } from '../../../src/le/credentials/oor-auth';

describe('le credentials', () => {
    it('should create ecr auth edge', () => {
        let auth = new OORAuthvLEICredentialData({
            qviAID: 'qvi_aid',
            timestamp: 'timestamp',
            recipient: 'recipient',
            LEI: 'an LEI',
            personLegalName: 'My Legal Name',
            officialOrganizationalRole: 'my official role',
        });

        expect(auth.d).toBe('EKfY9zJk7F3KqOESHCLOf0HKofNfeigKveDMy-3QQGNt');
        expect(auth.i).toBe('qvi_aid');
        expect(auth.dt).toBe('timestamp');
        expect(auth.LEI).toBe('an LEI');
        expect(auth.personLegalName).toBe('My Legal Name');
        expect(auth.officialOrganizationalRole).toBe('my official role');
    });
});
