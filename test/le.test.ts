import { describe, expect, it } from '@jest/globals';
import { Credentials, SignifyClient } from 'signify-ts';
import { anyOfClass, capture, instance, mock, verify, when } from 'ts-mockito';
import { LE, credentials, edges } from '../src';
import { rules } from '../src/rules';

describe('a legal entity', () => {
    it('should create ecr auth credential', () => {
        let mockedClient: SignifyClient = mock(SignifyClient);

        let c: Credentials = mock(Credentials);
        when(mockedClient.credentials()).thenReturn(instance(c));

        let client = instance(mockedClient);
        let le = new LE(client, 'qvi_name', 'qvi_registry_aid');
        let data =
            new credentials.EngagementContextRoleAuthorizationCredentialData({
                qviAID: 'issueing to this qvi',
                timestamp: 'time stamp',
                issuee: 'ecr is meant for this aid',
                LEI: 'LEI',
                personLegalName: 'legal name',
                engagementContextRole: 'my context role',
            });
        let edgeData =
            new edges.EngagementContextRoleAuthorizationCredentialEdgeData({
                legalEntityCredentialSAID: 'said',
            });
        let edge = new edges.EngagementContextRoleAuthorizationEdge({
            le: edgeData,
        });

        le.createECRAuthCredential('issuee aid', data, edge);

        let cap = capture(c.issue).last();

        verify(
            c.issue(
                'qvi_name',
                'qvi_registry_aid',
                'EH6ekLjSr8V32WyFbGe1zXjTzFs9PkTYmupJ9H65O14g',
                'issuee aid',
                anyOfClass(
                    credentials.EngagementContextRoleAuthorizationCredentialData
                ),
                rules.ECRAuth,
                anyOfClass(edges.EngagementContextRoleAuthorizationEdge),
                false
            )
        ).once();

        let DATA_ARG = 4;
        expect(cap[DATA_ARG].LEI).toBe('LEI');

        let EDGE_ARG = 6;
        expect(cap[EDGE_ARG].d).toBe(
            'EBlx5jE_cpbCQtypw1WLST-9Dz_PaNoRhgSIma7rWr0L'
        );
        expect(cap[EDGE_ARG].le.n).toBe('said');
        expect(cap[EDGE_ARG].le.s).toBe(
            'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY'
        );
    });

    it('should create oor auth credential', () => {
        let mockedClient: SignifyClient = mock(SignifyClient);

        let c: Credentials = mock(Credentials);
        when(mockedClient.credentials()).thenReturn(instance(c));

        let client = instance(mockedClient);
        let le = new LE(client, 'qvi_name', 'qvi_registry_aid');
        let data =
            new credentials.OfficialOrganizationalRoleAuthorizationCredentialData(
                {
                    qviAID: 'issueing to this qvi',
                    timestamp: 'time stamp',
                    issuee: 'oor is meant for this aid',
                    LEI: 'LEI',
                    personLegalName: 'legal name',
                    officialOrganizationalRole: 'my official role',
                }
            );
        let edgeData =
            new edges.OfficialOrganizationalRoleAuthorizationCredentialEdgeData(
                {
                    legalEntityCredentialSAID: 'said',
                }
            );
        let edge = new edges.OfficialOrganizationalRoleAuthorizationEdge({
            le: edgeData,
        });

        le.createOORAuthCredential('issuee aid', data, edge);

        let cap = capture(c.issue).last();

        verify(
            c.issue(
                'qvi_name',
                'qvi_registry_aid',
                'EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E',
                'issuee aid',
                anyOfClass(
                    credentials.OfficialOrganizationalRoleAuthorizationCredentialData
                ),
                rules.OORAuth,
                anyOfClass(edges.OfficialOrganizationalRoleAuthorizationEdge),
                false
            )
        ).once();

        let DATA_ARG = 4;
        expect(cap[DATA_ARG].LEI).toBe('LEI');

        let EDGE_ARG = 6;
        expect(cap[EDGE_ARG].d).toBe(
            'EBlx5jE_cpbCQtypw1WLST-9Dz_PaNoRhgSIma7rWr0L'
        );
        expect(cap[EDGE_ARG].le.n).toBe('said');
        expect(cap[EDGE_ARG].le.s).toBe(
            'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY'
        );
    });

    it('should create direct engagement context role credential', () => {
        let mockedClient: SignifyClient = mock(SignifyClient);

        let c: Credentials = mock(Credentials);
        when(mockedClient.credentials()).thenReturn(instance(c));

        let client = instance(mockedClient);
        let le = new LE(client, 'le_name', 'le_registry_aid');
        let data = new credentials.EngagementContextRoleCredentialData({
            issuee: 'issuee',
            nonce: 'nonce',
            timestamp: 'timestamp',
            LEI: 'an LEI',
            personLegalName: 'person legal name',
            engagementContextRole: 'my context role',
        });
        let edgeData =
            new edges.DirectEngagementContextRoleCredentialEdgeData({
                legalEntityCredentialSAID: 'a SAID',
            });
        let edge = new edges.DirectEngagementContextRoleCredentialEdge({
            le: edgeData,
        });

        le.createDirectEngagementContextRoleCredential('issuee aid', data, edge);

        let cap = capture(c.issue).last();

        verify(
            c.issue(
                'le_name',
                'le_registry_aid',
                'EEy9PkikFcANV1l7EHukCeXqrzT1hNZjGlUk7wuMO5jw',
                'issuee aid',
                anyOfClass(credentials.EngagementContextRoleCredentialData),
                rules.ECR,
                anyOfClass(edges.DirectEngagementContextRoleCredentialEdge),
                false
            )
        ).once();

        let DATA_ARG = 4;
        expect(cap[DATA_ARG].LEI).toBe('an LEI');

        let EDGE_ARG = 6;
        expect(cap[EDGE_ARG].d).toBe(
            'ECz2B-zXe2GADR_sZ9WEjaf1WXPKcOBBdW6Qeb6TIkoA'
        );
        expect(cap[EDGE_ARG].le.n).toBe('a SAID');
        expect(cap[EDGE_ARG].le.s).toBe(
            'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY'
        );
    });
});
