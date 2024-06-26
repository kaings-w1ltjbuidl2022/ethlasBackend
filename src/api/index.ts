import express, { type Express } from 'express';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getConfigs } from '../config';
import { initRepositories } from '../repositories';
import { Injector } from '../utils';
import { initServices } from '../services';
import { initControllers } from './controllers';
import { initRoutes } from './routes';

const configs = getConfigs();
const dbConfig = initializeApp(configs.firebase);
const db = getFirestore(dbConfig);
const injector = new Injector().getInstance();

injector.set('db', db);
injector.set('configs', configs);

const repositories = initRepositories(injector);
const services = initServices(repositories);
const controllers = initControllers(services);
const router = initRoutes(controllers);

const app: Express = express();
const HOST = process.env.HOST;
const PORT = process.env.API_PORT;

app.use(express.json());
app.use('/api/v1', router);

app.listen(PORT, async () => {
  if (!HOST || !PORT) {
    console.log(
      `[${process.env.NODE_ENV}] failed to listen on ${HOST}:${PORT}`,
    );
    process.exit(2);
  }
  console.log(`[${process.env.NODE_ENV}] listening on ${HOST}:${PORT}`);
});
