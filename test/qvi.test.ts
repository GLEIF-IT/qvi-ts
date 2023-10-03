import { SignifyClient, Credentials } from 'signify-ts';
import { describe, expect, it } from '@jest/globals';
import { anyOfClass, capture, instance, mock, verify, when } from 'ts-mockito';
import { QVI } from '../src';
import { Rules } from '../src/rules';
import {
    LEvLEICredentialData,
    LEvLEICredentialEdge,
} from '../src/qvi/credentials/le';

describe('a qvi', () => {
    it('should create legal entity credential', () => {
        let mockedClient: SignifyClient = mock(SignifyClient);

        let c: Credentials = mock(Credentials);
        when(mockedClient.credentials()).thenReturn(instance(c));

        let client = instance(mockedClient);
        let qvi = new QVI(client, 'qvi_name', 'qvi_registry_aid');
        let data = new LEvLEICredentialData({
            LEI: 'an LEI',
            issuee: 'issuee',
            timestamp: 'timestamp',
        });
        let edge = new LEvLEICredentialEdge('qvi_aid');

        qvi.createLegalEntityCredential('issuee aid', data, edge);

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
            'EPfoOyfjSMVJhdiuq1wlcHR1XB7KMrgzziWZqL0iYWyZ'
        );
        expect(cap[EDGE_ARG].qvi.n).toBe('qvi_aid');
        expect(cap[EDGE_ARG].qvi.s).toBe(
            'EBfdlu8R27Fbx-ehrqwImnK-8Cm79sqbAQ4MmvEAYqao'
        );
    });
});
