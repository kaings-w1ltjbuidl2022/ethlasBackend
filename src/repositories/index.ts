import { collection } from 'firebase/firestore';
import { EthlasNFTRepository } from './firestore/ethlas-nft';

export type Repositories = {
  EthlasNFTRepository: EthlasNFTRepository;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function initRepositories(container: Map<string, any>): Repositories {
  const db = container.get('db');
  const ethlasNFTRepository = new EthlasNFTRepository(
    collection(db, 'ethlasNFTs'),
  );

  return {
    EthlasNFTRepository: ethlasNFTRepository,
  };
}
