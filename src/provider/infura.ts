import { Contract, providers } from 'ethers';
import { ETHLS } from '../assets/erc721';
import { WebSocket } from 'ws';
import Big from 'big.js';

export class InfuraProvider {
  private static _provider: providers.InfuraWebSocketProvider;
  private static _ethlasNFT: Contract;
  private static _usdc: Contract;

  constructor(config: { network: string; apiKey: string }) {
    const network = config.network;
    const apiKey = config.apiKey;

    InfuraProvider._provider =
      InfuraProvider._provider ??
      new providers.InfuraWebSocketProvider(network, apiKey);

    InfuraProvider._ethlasNFT =
      InfuraProvider._ethlasNFT ??
      new Contract(ETHLS.ADDRESS, ETHLS.CONTRACT, InfuraProvider._provider);
  }

  getWebsocket(): WebSocket {
    return InfuraProvider._provider.websocket as WebSocket;
  }

  mintSubscription(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cb: (_from: string, to: string, tokenId: Big, event: any) => void,
  ) {
    const filter = InfuraProvider._ethlasNFT.filters.Transfer(
      '0x0000000000000000000000000000000000000000',
      null,
    );

    InfuraProvider._ethlasNFT.on(filter, cb);
  }
}
