import Big from 'big.js';
import { ETHLS } from '../assets/erc721';
import { Nft } from '../types';
import { NftRepository } from '../repositories/nft';

export class NftService {
  private readonly _repository: NftRepository;
  constructor(repository: NftRepository) {
    this._repository = repository;
  }

  async create(tokenData: Nft) {
    return await this._repository.create(tokenData);
  }

  async getAll() {
    return await this._repository.getAll();
  }

  async get(tokenId: string) {
    return await this._repository.get({ id: tokenId });
  }

  async update(tokenData: Partial<Nft>, tokenId: string) {
    return await this._repository.update(tokenData, { id: tokenId });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async onMinted(_from: string, to: string, tokenId: Big, event: any) {
    const txReceipt = await event.getTransactionReceipt();
    const txReceipts = [JSON.stringify(txReceipt)];

    this._repository.create({
      id: tokenId.toString(),
      contractAddress: ETHLS.ADDRESS,
      name: ETHLS.NAME,
      ownerAddress: to,
      transferReceipts: txReceipts,
    });
  }
}
