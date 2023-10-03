import { SignifyClient, Credentials, Operations } from 'signify-ts';
import { describe, expect, it } from '@jest/globals';
import { instance, mock, when } from 'ts-mockito';
import { operations } from '../src/operations';

describe('operations', () => {
    it('should complete', async () => {
        let mockedClient: SignifyClient = mock(SignifyClient);

        let c: Credentials = mock(Credentials);
        when(mockedClient.credentials()).thenReturn(instance(c));

        let client = instance(mockedClient);

        let op = { done: true, name: 'my_op', response: 'yay'};

        let resp = await operations.getResult({client: client, op: op});
        expect(resp).toEqual('yay');
    });

    it('should retry', async () => {
        let mockedClient: SignifyClient = mock(SignifyClient);

        let c: Credentials = mock(Credentials);
        when(mockedClient.credentials()).thenReturn(instance(c));

        let mockedOps: Operations = mock(Operations);
        when(mockedOps.get('my_op')).thenResolve({done: true, name: 'my_op', response: 'yay'});
        when(mockedClient.operations()).thenReturn(instance(mockedOps));

        let client = instance(mockedClient);

        let op = { done: false, name: 'my_op' };
        let resp = await operations.getResult({ client: client, op: op });
        expect(resp).toEqual('yay');
    });
});
