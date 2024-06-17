import { initProviders } from '../provider';
import { initServices } from '../services';

export function mintSubscriptions(
  providers: ReturnType<typeof initProviders>,
  services: ReturnType<typeof initServices>,
) {
  providers.infuraProvider.mintSubscription(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (_from: string, to: string, tokenId: Big, event: any) => {
      await services.nftService.onMinted(_from, to, tokenId, event);
    },
  );
}
