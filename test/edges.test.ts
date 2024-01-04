import { describe, expect, it } from '@jest/globals';
import { edges } from '../src/edges';
import { schema } from '../src/schema';

describe('edges', () => {
    it('should create legal entity credential edge', () => {
        let data = new edges.LegalEntityCredentialEdgeData({
            qviCredentialSAID: 'my qvi credential said',
        });

        let edge = new edges.LegalEntityCredentialEdge({ qvi: data });

        expect(edge.d).toBe('EErRQydqQppqs8OsX5XPwbXvItMWx3U6jwmqiJR15IXc');
        expect(edge.qvi.n).toBe('my qvi credential said');
        expect(edge.qvi.s).toBe(schema.QVI);
    });

    it('should create engagement context role credential edge', () => {
        let data = new edges.EngagementContextRoleCredentialEdgeData({
            engagementContextRoleAuthorizationCredentialSAID:
                'my ecr auth credential said',
        });

        let edge = new edges.EngagementContextRoleCredentialEdge({
            auth: data,
        });

        expect(edge.d).toBe('ENmhHNmmrYqAWhisnSyQyQlsUrn5HFpDvUjZ5_ev043_');
        expect(edge.auth.n).toBe('my ecr auth credential said');
        expect(edge.auth.s).toBe(schema.ECRAuth);
    });

    it('should create direct engagement context role credential edge', () => {
        let data = new edges.DirectEngagementContextRoleCredentialEdgeData({
            legalEntityCredentialSAID:
                'my ecr auth credential said',
        });

        let edge = new edges.DirectEngagementContextRoleCredentialEdge({
            le: data,
        });

        expect(edge.d).toBe('EFmitYRo5Dgijnr0rtQ0QW0A-MGPxozV3e4F6BUSVWSR');
        expect(edge.le.n).toBe('my ecr auth credential said');
        expect(edge.le.s).toBe(schema.LE);
    });

    it('should create official organizational role credential edge', () => {
        let data = new edges.OfficialOrganizationalRoleCredentialEdgeData({
            officialOrganizationalRoleAuthorizationCredentialSAID:
                'my oor auth credential said',
        });

        let edge = new edges.OfficialOrganizationalRoleCredentialEdge({
            auth: data,
        });

        expect(edge.d).toBe('EOshmoza8V7wyEMOC0e4Qh31MP89hAo9GJwyctOTFvgg');
        expect(edge.auth.n).toBe('my oor auth credential said');
        expect(edge.auth.s).toBe(schema.OORAuth);
    });

    it('should create engagement context role authorization credential edge', () => {
        let data =
            new edges.EngagementContextRoleAuthorizationCredentialEdgeData({
                legalEntityCredentialSAID: 'my ecr auth credential said',
            });

        let edge = new edges.EngagementContextRoleAuthorizationEdge({
            le: data,
        });

        expect(edge.d).toBe('EFmitYRo5Dgijnr0rtQ0QW0A-MGPxozV3e4F6BUSVWSR');
        expect(edge.le.n).toBe('my ecr auth credential said');
        expect(edge.le.s).toBe(schema.LE);
    });

    it('should create official organizational role authorization credential edge', () => {
        let data =
            new edges.OfficialOrganizationalRoleAuthorizationCredentialEdgeData(
                {
                    legalEntityCredentialSAID: 'my ecr auth credential said',
                }
            );

        let edge = new edges.OfficialOrganizationalRoleAuthorizationEdge({
            le: data,
        });

        expect(edge.d).toBe('EFmitYRo5Dgijnr0rtQ0QW0A-MGPxozV3e4F6BUSVWSR');
        expect(edge.le.n).toBe('my ecr auth credential said');
        expect(edge.le.s).toBe(schema.LE);
    });
});
