import { initRepositories } from '../repositories';
import { EthlasNFTService } from './ethlas-nft';

export function initServices(
  repositories: ReturnType<typeof initRepositories>,
) {
  const ethlasNFTService = new EthlasNFTService(
    repositories.ethlasNFTRepository,
  );

  return { ethlasNFTService };
}
