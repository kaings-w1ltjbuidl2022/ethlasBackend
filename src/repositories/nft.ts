import { Nft } from '../types';

export interface NftFilter {
  id: string;
  // add more filters
}

export interface NftRepository {
  create(nft: Nft): Promise<void>;
  getAll(): Promise<Nft[]>;
  get(filter: Partial<NftFilter>): Promise<Nft | null>;
  update(data: Partial<Nft>, filter: Partial<NftFilter>): Promise<void>;
}
