import { initServices } from '../../services';
import { NftController } from './nft';

export type Controllers = {
  nftController: NftController;
};

export function initControllers(
  services: ReturnType<typeof initServices>,
): Controllers {
  const nftController = new NftController(services.nftService);

  return { nftController };
}
