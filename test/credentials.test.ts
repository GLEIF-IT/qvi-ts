import { describe, expect, it } from '@jest/globals';
import { credentials } from '../src/credentials';

describe('qvi credentials', () => {
    it('should create legal entity credential', () => {
        let auth = new credentials.LegalEntityCredentialData({
            timestamp: 'timestamp',
            issuee: 'recipient',
            LEI: 'an LEI',
        });

        expect(auth.d).toBe('EOJuU6TMOARm-VyjRoApxT-K8GD65eZRn-sPKZQInUKe');
        expect(auth.i).toBe('recipient');
        expect(auth.dt).toBe('timestamp');
        expect(auth.LEI).toBe('an LEI');
    });

    it('should create ecr credential', () => {
        let auth =
            new credentials.EngagementContextRoleAuthorizationCredentialData({
                qviAID: 'qvi_aid',
                timestamp: 'timestamp',
                issuee: 'recipient',
                LEI: 'an LEI',
                personLegalName: 'My Legal Name',
                engagementContextRole: 'my context role',
            });

        expect(auth.d).toBe('EB9QkDZJW5iS2vyiTJQ1lVAo1qImK_HteOXaZE9aQRjG');
        expect(auth.i).toBe('qvi_aid');
        expect(auth.dt).toBe('timestamp');
        expect(auth.AID).toBe('recipient');
        expect(auth.LEI).toBe('an LEI');
        expect(auth.personLegalName).toBe('My Legal Name');
        expect(auth.engagementContextRole).toBe('my context role');
    });

    it('should create oor credential', () => {
        let auth =
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

        expect(auth.d).toBe('EKfY9zJk7F3KqOESHCLOf0HKofNfeigKveDMy-3QQGNt');
        expect(auth.i).toBe('qvi_aid');
        expect(auth.dt).toBe('timestamp');
        expect(auth.AID).toBe('recipient');
        expect(auth.LEI).toBe('an LEI');
        expect(auth.personLegalName).toBe('My Legal Name');
        expect(auth.officialOrganizationalRole).toBe('my official role');
    });
});

describe('le credentials', () => {
    it('should create ecr auth credential', () => {
        let auth =
            new credentials.EngagementContextRoleAuthorizationCredentialData({
                qviAID: 'qvi_aid',
                timestamp: 'timestamp',
                issuee: 'recipient',
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

    it('should create oor auth credential', () => {
        let auth =
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

        expect(auth.d).toBe('EKfY9zJk7F3KqOESHCLOf0HKofNfeigKveDMy-3QQGNt');
        expect(auth.i).toBe('qvi_aid');
        expect(auth.dt).toBe('timestamp');
        expect(auth.LEI).toBe('an LEI');
        expect(auth.personLegalName).toBe('My Legal Name');
        expect(auth.officialOrganizationalRole).toBe('my official role');
    });
});
