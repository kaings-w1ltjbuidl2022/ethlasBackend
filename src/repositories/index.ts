import { collection } from 'firebase/firestore';
import { FirestoreEthlasNFTRepository } from './firestore/ethlas-nft';
import { NftRepository } from './nft';

export type Repositories = {
  nftRepository: NftRepository;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function initRepositories(injector: Map<string, any>): Repositories {
  const db = injector.get('db');
  const ethlasNFTRepository = new FirestoreEthlasNFTRepository(
    collection(db, 'ethlasNFTs'),
  );

  return {
    nftRepository: ethlasNFTRepository,
  };
}
