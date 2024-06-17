import { Router } from 'express';
import { Controllers } from '../controllers';

export function initRoutes(controllers: Controllers): Router {
  const router = Router();

  router.get('/ethlasnfts', controllers.nftController.getMintedNFTs);
  router.get('/ethlasnft', controllers.nftController.getMintedNFT);

  return router;
}
