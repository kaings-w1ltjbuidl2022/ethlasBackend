import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getConfigs } from '../config';
import { initRepositories } from '../repositories';
import { Injector, handleWs } from '../utils';
import { initProviders } from '../provider';
import { initServices } from '../services';
import { mintSubscriptions } from './mint-subscriptions';

const configs = getConfigs();
const dbConfig = initializeApp(configs.firebase);
const db = getFirestore(dbConfig);
const injector = new Injector().getInstance();

injector.set('db', db);
injector.set('configs', configs);

const repositories = initRepositories(injector);
const providers = initProviders(injector);
const services = initServices(repositories);

// handle ws connection
const ws = providers.infuraProvider.getWebsocket();
handleWs(ws);

// subscibe to mint event
mintSubscriptions(providers, services);
