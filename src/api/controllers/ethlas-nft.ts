import type { NextFunction, Request, Response } from 'express';
import { EthlasNFTService } from '../../services/ethlas-nft';
import { EthlasNFT } from '../../types';

export class EthlasNFTController {
  private readonly _service: EthlasNFTService;

  constructor(service: EthlasNFTService) {
    this._service = service;
  }

  getMintedNFTs = async (req: Request, res: Response, next: NextFunction) => {
    let nfts: EthlasNFT[];
    try {
      nfts = await this._service.getAll();
    } catch (err) {
      return next(err);
    }

    res.status(200).json({ data: nfts });
  };

  getMintedNFT = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.query.id?.toString() || '';
    let nft: EthlasNFT | null;
    try {
      if (id.length <= 0) {
        throw new Error('invalid tokenId');
      }

      nft = await this._service.get(id);

      if (!nft) {
        throw new Error('TokenId not found');
      }
    } catch (err) {
      return next(err);
    }

    res.status(200).json({ data: nft });
  };
}
