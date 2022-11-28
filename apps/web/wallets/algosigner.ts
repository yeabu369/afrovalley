import algosdk from 'algosdk'
declare const AlgoSigner: any

export class AlgoSignerSession {
  // q: What's the problem with the declaration below?
  // a: The return type is not inferred correctly
  accounts: Array<{address: string}>

  constructor () {
    if (typeof AlgoSigner === 'undefined') {
      alert('AlgoSigner is not installed')
    } else {
      AlgoSigner.connect()
    }
  }

  async getAccounts () {
    this.accounts = await AlgoSigner.accounts({ ledger: 'TestNet' })
  }

  async signTxns (unsignedTxns: Array<algosdk.Transaction>) {
    AlgoSigner.signTxns(unsignedTxns.map(txn => AlgoSigner.encoding.msgpackToBase64(txn.toByte())))
  }
}
