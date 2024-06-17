import type { NextFunction, Request, Response } from 'express';
import { NftService } from '../../services/nft';
import { Nft } from '../../types';

export class NftController {
  private readonly _service: NftService;

  constructor(service: NftService) {
    this._service = service;
  }

  getMintedNFTs = async (req: Request, res: Response, next: NextFunction) => {
    let nfts: Nft[];
    try {
      nfts = await this._service.getAll();
    } catch (err) {
      return next(err);
    }

    res.status(200).json({ data: nfts });
  };

  getMintedNFT = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.query.id?.toString() || '';
    let nft: Nft | null;
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
