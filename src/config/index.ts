import path from 'path';
import dotenv from 'dotenv';

function getEnv() {
  dotenv.config({
    path: path.join(__dirname, '../../.env'),
    override: true,
  });
}

export function getConfigs() {
  getEnv();

  const firebase = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
  };

  const infura = {
    apiKey: process.env.infuraApiKey,
    // ethereum: 'homestead', // for testnet, change the value to 'goerli'
    ethereum: 'goerli',
  };

  return {
    firebase,
    infura,
  };
}
