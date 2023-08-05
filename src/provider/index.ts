import { InfuraProvider } from './infura';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function initProviders(injector: Map<string, any>) {
  const configs = injector.get('configs');

  const infuraProvider = new InfuraProvider(configs.infura);

  return {
    infuraProvider,
  };
}
