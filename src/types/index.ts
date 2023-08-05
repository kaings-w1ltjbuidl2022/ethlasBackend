export type EthlasNFT = {
  id: number;
  name: string;
  contractAddress: string;
  ownerAddress: string;
  mintReceipt: object;
  transferReceipt: object[];
};
