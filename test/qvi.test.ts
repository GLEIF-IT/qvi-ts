import { SignifyClient, Credentials } from 'signify-ts';
import { describe, expect, it } from '@jest/globals';
import { anyOfClass, capture, instance, mock, verify, when } from 'ts-mockito';
import { QVI } from '../src';
import { LEvLEICredentialData, LEvLEICredentialEdge } from '../src/credentials';
import { Rules } from '../src/rules';

describe('a qvi', () => {
    it('should create legal entity credential', () => {
        let mockedClient: SignifyClient = mock(SignifyClient);

        let c: Credentials = mock(Credentials);
        when(mockedClient.credentials()).thenReturn(instance(c));

        let client = instance(mockedClient);
        let qvi = new QVI(client, 'qvi_name', 'qvi_registry_aid');

        qvi.createLegalEntityCredential('qvi aid', 'issuee aid', 'an LEI');

        let cap = capture(c.issue).last();

        verify(
            c.issue(
                'qvi_name',
                'qvi_registry_aid',
                'ENPXp1vQzRF6JwIuS-mp2U8Uf1MoADoP_GqQ62VsDZWY',
                'issuee aid',
                anyOfClass(LEvLEICredentialData),
                Rules.LE,
                anyOfClass(LEvLEICredentialEdge),
                false
            )
        ).once();

        let DATA_ARG = 4;
        expect(cap[DATA_ARG].LEI).toBe('an LEI');

        let EDGE_ARG = 6;
        expect(cap[EDGE_ARG].d).toBe(
            'ENGyJEXhLMmS9UWNVmvDFfj95cvC1RCbomQHy-7bQrn8'
        );
        expect(cap[EDGE_ARG].qvi.n).toBe('qvi aid');
        expect(cap[EDGE_ARG].qvi.s).toBe(
            'EBfdlu8R27Fbx-ehrqwImnK-8Cm79sqbAQ4MmvEAYqao'
        );
    });
});
