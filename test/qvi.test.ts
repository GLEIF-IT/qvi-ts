import { SignifyClient, Credentials } from 'signify-ts';
import { describe, expect, it } from '@jest/globals';
import { anyOfClass, capture, instance, mock, verify, when } from 'ts-mockito';
import { QVI } from '../src';
import { rules } from '../src/rules';
import { credentials } from '../src/credentials';
import { edges } from '../src/edges';

describe('a qvi', () => {
    it('should create legal entity credential', () => {
        let mockedClient: SignifyClient = mock(SignifyClient);

        let c: Credentials = mock(Credentials);
        when(mockedClient.credentials()).thenReturn(instance(c));

        let client = instance(mockedClient);
        let qvi = new QVI(client, 'qvi_name', 'qvi_registry_aid');
        let data = new credentials.LegalEntityCredentialData({
            LEI: 'an LEI',
            issuee: 'issuee',
            timestamp: 'timestamp',
        });
        let edgeData = new edges.LegalEntityCredentialEdgeData({
            qviCredentialSAID: 'said',
        });
        let edge = new edges.LegalEntityCredentialEdge({ qvi: edgeData });

        qvi.createLegalEntityCredential('issuee aid', data, edge);

        let cap = capture(c.issue).last();

        verify(
            c.issue(
                'qvi_name',
                'qvi_registry_aid',
                'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY',
                'issuee aid',
                anyOfClass(credentials.LegalEntityCredentialData),
                rules.LE,
                anyOfClass(edges.LegalEntityCredentialEdge),
                false
            )
        ).once();

        let DATA_ARG = 4;
        expect(cap[DATA_ARG].LEI).toBe('an LEI');

        let EDGE_ARG = 6;
        expect(cap[EDGE_ARG].d).toBe(
            'EBXFKc37aSCngzHUOX0Rfxq0l2JNS8SBDzzkHamXpkle'
        );
        expect(cap[EDGE_ARG].qvi.n).toBe('said');
        expect(cap[EDGE_ARG].qvi.s).toBe(
            'EBfdlu8R27Fbx-ehrqwImnK-8Cm79sqbAQ4MmvEAYqao'
        );
    });

    it('should create engagement context role credential', () => {
        let mockedClient: SignifyClient = mock(SignifyClient);

        let c: Credentials = mock(Credentials);
        when(mockedClient.credentials()).thenReturn(instance(c));

        let client = instance(mockedClient);
        let qvi = new QVI(client, 'qvi_name', 'qvi_registry_aid');
        let data = new credentials.EngagementContextRoleCredentialData({
            issuee: 'issuee',
            nonce: 'nonce',
            timestamp: 'timestamp',
            LEI: 'an LEI',
            personLegalName: 'person legal name',
            engagementContextRole: 'my ocntext role',
        });
        let edgeData =
            new edges.EngagementContextRoleAuthorizationCredentialEdgeData({
                legalEntityCredentialSAID: 'a SAID',
            });
        let edge = new edges.EngagementContextRoleCredentialEdge({
            auth: edgeData,
        });

        qvi.createEngagementContextRoleCredential('issuee aid', data, edge);

        let cap = capture(c.issue).last();

        verify(
            c.issue(
                'qvi_name',
                'qvi_registry_aid',
                'EEy9PkikFcANV1l7EHukCeXqrzT1hNZjGlUk7wuMO5jw',
                'issuee aid',
                anyOfClass(credentials.EngagementContextRoleCredentialData),
                rules.ECR,
                anyOfClass(edges.EngagementContextRoleCredentialEdge),
                true
            )
        ).once();

        let DATA_ARG = 4;
        expect(cap[DATA_ARG].LEI).toBe('an LEI');

        let EDGE_ARG = 6;
        expect(cap[EDGE_ARG].d).toBe(
            'EM81ajLzAGXxHli47SKrxBuH1nHEv4p09gUsWdZirhsQ'
        );
        expect(cap[EDGE_ARG].auth.n).toBe('a SAID');
        expect(cap[EDGE_ARG].auth.s).toBe(
            'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY'
        );
    });

    it('should create official organizational role credential', () => {
        let mockedClient: SignifyClient = mock(SignifyClient);

        let c: Credentials = mock(Credentials);
        when(mockedClient.credentials()).thenReturn(instance(c));

        let client = instance(mockedClient);
        let qvi = new QVI(client, 'qvi_name', 'qvi_registry_aid');
        let data = new credentials.OfficialOrganizationalRoleCredentialData({
            issuee: 'issuee',
            nonce: 'nonce',
            timestamp: 'timestamp',
            LEI: 'an LEI',
            personLegalName: 'person legal name',
            officialOrganizationalRole: 'my official role',
        });
        let edgeData =
            new edges.OfficialOrganizationalRoleAuthorizationCredentialEdgeData(
                {
                    legalEntityCredentialSAID: 'a SAID',
                }
            );
        let edge = new edges.OfficialOrganizationalRoleCredentialEdge({
            auth: edgeData,
        });

        qvi.createOfficialOrganizationRoleCredential('issuee aid', data, edge);

        let cap = capture(c.issue).last();

        verify(
            c.issue(
                'qvi_name',
                'qvi_registry_aid',
                'EBNaNu-M9P5cgrnfl2Fvymy4E_jvxxyjb70PRtiANlJy',
                'issuee aid',
                anyOfClass(
                    credentials.OfficialOrganizationalRoleCredentialData
                ),
                rules.OOR,
                anyOfClass(edges.OfficialOrganizationalRoleCredentialEdge),
                false
            )
        ).once();

        let DATA_ARG = 4;
        expect(cap[DATA_ARG].LEI).toBe('an LEI');

        let EDGE_ARG = 6;
        expect(cap[EDGE_ARG].d).toBe(
            'EM81ajLzAGXxHli47SKrxBuH1nHEv4p09gUsWdZirhsQ'
        );
        expect(cap[EDGE_ARG].auth.n).toBe('a SAID');
        expect(cap[EDGE_ARG].auth.s).toBe(
            'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY'
        );
    });
});
