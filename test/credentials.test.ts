import { describe, expect, it } from '@jest/globals';
import { credentials } from '../src/credentials';

describe('qvi credentials', () => {
    it('should create legal entity credential', () => {
        let le = new credentials.LegalEntityCredentialData({
            timestamp: 'timestamp',
            issuee: 'recipient',
            LEI: 'an LEI',
        });

        expect(le.d).toBe('EOJuU6TMOARm-VyjRoApxT-K8GD65eZRn-sPKZQInUKe');
        expect(le.i).toBe('recipient');
        expect(le.dt).toBe('timestamp');
        expect(le.LEI).toBe('an LEI');
    });

    it('should create ecr credential', () => {
        let ecr =
            new credentials.EngagementContextRoleCredentialData({
                nonce: 'a nonce',
                issuee: 'recipient',
                timestamp: 'timestamp',
                LEI: 'an LEI',
                personLegalName: 'My Legal Name',
                engagementContextRole: 'my context role',
            });

        expect(ecr.d).toBe('EA_-RuJ0fFvWzHBWqVs5FqDJL3DUkexDRM4qKetTL1rL');
        expect(ecr.u).toBe('a nonce');
        expect(ecr.i).toBe('recipient');
        expect(ecr.dt).toBe('timestamp');
        expect(ecr.LEI).toBe('an LEI');
        expect(ecr.personLegalName).toBe('My Legal Name');
        expect(ecr.engagementContextRole).toBe('my context role');
    });

    it('should create oor credential', () => {
        let oor =
            new credentials.OfficialOrganizationalRoleCredentialData(
                {
                    nonce: 'a nonce',
                    issuee: 'recipient',
                    timestamp: 'timestamp',
                    LEI: 'an LEI',
                    personLegalName: 'My Legal Name',
                    officialOrganizationalRole: 'my official role',
                }
            );

        expect(oor.d).toBe('ECQty9qAGnqCzxHkfucDmoaDPi_p6mAyoGqXHj1dhtqN');
        expect(oor.u).toBe('a nonce');
        expect(oor.i).toBe('recipient');
        expect(oor.dt).toBe('timestamp');
        expect(oor.LEI).toBe('an LEI');
        expect(oor.personLegalName).toBe('My Legal Name');
        expect(oor.officialOrganizationalRole).toBe('my official role');
    });
});

describe('le credentials', () => {
    it('should create ecr auth credential', () => {
        let ecrAuth =
            new credentials.EngagementContextRoleAuthorizationCredentialData({
                qviAID: 'qvi_aid',
                timestamp: 'timestamp',
                issuee: 'recipient',
                LEI: 'an LEI',
                personLegalName: 'My Legal Name',
                engagementContextRole: 'my context role',
            });

        expect(ecrAuth.d).toBe('EB9QkDZJW5iS2vyiTJQ1lVAo1qImK_HteOXaZE9aQRjG');
        expect(ecrAuth.i).toBe('qvi_aid');
        expect(ecrAuth.dt).toBe('timestamp');
        expect(ecrAuth.LEI).toBe('an LEI');
        expect(ecrAuth.personLegalName).toBe('My Legal Name');
        expect(ecrAuth.engagementContextRole).toBe('my context role');
    });

    it('should create oor auth credential', () => {
        let oorAuth =
            new credentials.OfficialOrganizationalRoleAuthorizationCredentialData(
                {
                    qviAID: 'qvi_aid',
                    timestamp: 'timestamp',
                    issuee: 'recipient',
                    LEI: 'an LEI',
                    personLegalName: 'My Legal Name',
                    officialOrganizationalRole: 'my official role',
                }
            );

        expect(oorAuth.d).toBe('EKfY9zJk7F3KqOESHCLOf0HKofNfeigKveDMy-3QQGNt');
        expect(oorAuth.i).toBe('qvi_aid');
        expect(oorAuth.dt).toBe('timestamp');
        expect(oorAuth.LEI).toBe('an LEI');
        expect(oorAuth.personLegalName).toBe('My Legal Name');
        expect(oorAuth.officialOrganizationalRole).toBe('my official role');
    });
});
