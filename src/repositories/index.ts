import { collection } from 'firebase/firestore';
import { EthlasNFTRepository } from './firestore/ethlas-nft';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function initRepositories(injector: Map<string, any>) {
  const db = injector.get('db');
  const ethlasNFTRepository = new EthlasNFTRepository(
    collection(db, 'ethlasNFTs'),
  );

  return {
    ethlasNFTRepository,
  };
}
