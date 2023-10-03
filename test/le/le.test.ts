import { SignifyClient, Credentials } from 'signify-ts';
import { describe, expect, it } from '@jest/globals';
import { anyOfClass, capture, instance, mock, verify, when } from 'ts-mockito';
import { LE } from '../../src/le/le';
import { ECRAuthvLEICredentialData } from '../../src/le/credentials/ecr-auth';
import { ECRAuthEdge, ECRAuthEdgeData } from '../../src/qvi/credentials/ecr';
import { Rules } from '../../src/rules';
import { OORAuthvLEICredentialData } from '../../src/le/credentials/oor-auth';
import {
    OORAuthEdge,
    OORAuthvLEIEdgeData,
} from '../../src/qvi/credentials/oor';

describe('a legal entity', () => {
    it('should create ecr auth credential', () => {
        let mockedClient: SignifyClient = mock(SignifyClient);

        let c: Credentials = mock(Credentials);
        when(mockedClient.credentials()).thenReturn(instance(c));

        let client = instance(mockedClient);
        let le = new LE(client, 'qvi_name', 'qvi_registry_aid');

        let data = new ECRAuthvLEICredentialData({
            qviAID: 'qvi_aid',
            timestamp: 'timestamp',
            recipient: 'recipient',
            LEI: 'lei',
            personLegalName: 'my legal name',
            engagementContextRole: 'context role',
        });
        let auth = new ECRAuthEdgeData({ leCredentialSAID: 'a said' });
        let edge = new ECRAuthEdge({ auth: auth });

        le.createECRAuthCredential('issuee aid', data, edge);

        let cap = capture(c.issue).last();

        verify(
            c.issue(
                'qvi_name',
                'qvi_registry_aid',
                'EH6ekLjSr8V32WyFbGe1zXjTzFs9PkTYmupJ9H65O14g',
                'issuee aid',
                anyOfClass(ECRAuthvLEICredentialData),
                Rules.ECRAuth,
                anyOfClass(ECRAuthEdge),
                false
            )
        ).once();

        let DATA_ARG = 4;
        expect(cap[DATA_ARG].LEI).toBe('lei');

        let EDGE_ARG = 6;
        expect(cap[EDGE_ARG].d).toBe(
            'ENbbrJVx-rr8V7HzNmnrwt6OUaYD0sB-S-gxclr0TSM8'
        );
        expect(cap[EDGE_ARG].auth.n).toBe('a said');
        expect(cap[EDGE_ARG].auth.s).toBe(
            'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY'
        );
    });

    it('should create oor auth credential', () => {
        let mockedClient: SignifyClient = mock(SignifyClient);

        let c: Credentials = mock(Credentials);
        when(mockedClient.credentials()).thenReturn(instance(c));

        let client = instance(mockedClient);
        let le = new LE(client, 'qvi_name', 'qvi_registry_aid');

        let data = new OORAuthvLEICredentialData({
            qviAID: 'qvi_aid',
            timestamp: 'timestamp',
            recipient: 'recipient',
            LEI: 'lei',
            personLegalName: 'my legal name',
            officialOrganizationalRole: 'official role',
        });
        let auth = new OORAuthvLEIEdgeData({ legalEntity: 'legal_entity_aid' });
        let edge = new OORAuthEdge({ auth: auth });

        le.createOORAuthCredential('issuee aid', data, edge);

        let cap = capture(c.issue).last();

        verify(
            c.issue(
                'qvi_name',
                'qvi_registry_aid',
                'EKA57bKBKxr_kN7iN5i7lMUxpMG-s19dRcmov1iDxz-E',
                'issuee aid',
                anyOfClass(OORAuthvLEICredentialData),
                Rules.OORAuth,
                anyOfClass(OORAuthEdge),
                false
            )
        ).once();

        let DATA_ARG = 4;
        expect(cap[DATA_ARG].LEI).toBe('lei');

        let EDGE_ARG = 6;
        expect(cap[EDGE_ARG].d).toBe(
            'ED1dQiXEfyqMu2sh1zz7RMv5GP4g5b8YGMLrNdIht-TP'
        );
        expect(cap[EDGE_ARG].auth.n).toBe('legal_entity_aid');
        expect(cap[EDGE_ARG].auth.s).toBe(
            'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY'
        );
    });
});
