import {SignifyClient} from 'signify-ts';
import {describe, expect, it} from '@jest/globals';
import {mock} from 'ts-mockito';
import {QVI} from "../src";

describe("a qvi", () => {
    it("should have schema", () => {
        const mockClient = mock(SignifyClient);

        let qvi = new QVI(mockClient);
        console.log(qvi);

        expect(true).toBe(true);        
    });
});