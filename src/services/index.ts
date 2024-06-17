import { initRepositories } from '../repositories';
import { NftService } from './nft';

export type Services = {
  nftService: NftService;
};

export function initServices(
  repositories: ReturnType<typeof initRepositories>,
): Services {
  const nftService = new NftService(repositories.nftRepository);

  return { nftService };
}
