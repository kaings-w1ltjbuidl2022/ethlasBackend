import { collection } from 'firebase/firestore';
import { FirestoreEthlasNFTRepository } from './firestore/ethlas-nft';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function initRepositories(injector: Map<string, any>) {
  const db = injector.get('db');
  const ethlasNFTRepository = new FirestoreEthlasNFTRepository(
    collection(db, 'ethlasNFTs'),
  );

  return {
    ethlasNFTRepository,
  };
}
