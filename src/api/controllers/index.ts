import { initServices } from '../../services';
import { EthlasNFTController } from './ethlas-nft';

export function initControllers(services: ReturnType<typeof initServices>) {
  const ethlasNFTController = new EthlasNFTController(
    services.ethlasNFTService,
  );

  return { ethlasNFTController };
}
