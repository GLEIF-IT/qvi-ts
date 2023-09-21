import { SignifyClient, Siger, messagize, d } from 'signify-ts';
import { getKeriaOperationResult, sendKeriaMessage } from '../operations';
import { Rules } from '../rules';
import { Schema } from '../schema';

export class QVI {
  private readonly client: SignifyClient;
  private readonly registry_name: string = 'qvi_issuer_registry';
  private readonly qvi_aid_name: string = 'qvi_aid';

  constructor(client: SignifyClient) {
    this.client = client;
  }

  public async createLegalEntityCredential(
    client: SignifyClient,
    recipientName: string,
    credentialData: any,
    source: any | undefined,
    _private?: boolean
  ) {
    let recipient = await client.identifiers().get(recipientName);
    recipient = await getKeriaOperationResult(this.client, recipient);

    let registry = await client.registries().list(this.registry_name);
    return await client.credentials().issue(
      //create
      recipientName,
      registry,
      Schema.LE,
      recipient,
      credentialData,
      Rules.LERules,
      source,
      _private
    );
  }

  public async sendLegalEntityCredential(
    alias: string,
    recipient: string,
    getFromAgent: boolean,
    credential?: any //result for createLegalEntityCredential
  ) {
    let sender = await this.client.identifiers().get(this.qvi_aid_name);
    sender = await getKeriaOperationResult(this.client, sender);

    if (getFromAgent) {
      let msgSaid = '';
      while (msgSaid == '') {
        let notifications = await this.client.notifications().list();
        for (let notif of notifications.notes) {
          if (notif.a.r == '/multisig/iss') {
            msgSaid = notif.a.d;
            await this.client.notifications().mark(notif.i);
            console.log(
              'alex@alex.com-member3 received exchange message to join multisig'
            );
          }
        }
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      // let res = await this.client.credentials().getRequest(msgSaid)
      // let exn = res[0].exn
      // credential = exn.e.cred
    }

    let serder = credential.serder;
    let sigs = credential.sigs;
    let sigers = sigs.map((sig: any) => new Siger({ qb64: sig }));

    let ims = d(messagize(serder, sigers));
    let atc = ims.substring(serder.size);
    let embeds = {
      cred: [serder, atc],
    };
    return await sendKeriaMessage(
      this.client,
      alias,
      'multisig_issuance',
      sender,
      '/multisig/iss',
      {}, //TODO:payload
      embeds,
      [recipient]
    );
  }
}
