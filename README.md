# ethlasBackend
## Architecture
### Synchronous Pattern
<img src="/images/ethlas_backend_sync.png" alt="Ethlas Backend Sync Pattern"/>

### Asynchronous Pattern
<img src="/images/ethlas_backend_async.png" alt="Ethlas Backend Async Pattern"/>

## Get Started
- Create Firestore DB
  
  reference: https://firebase.google.com/docs/firestore/quickstart#initialize
  
- Create `.env` file:
  ```
  # your firebase credentials
  apiKey="xxxxx"
  authDomain= "xxxxx.firebaseapp.com"
  projectId= "xxxxx-xxxxx"
  storageBucket= "xxxxx-xxxxx.appspot.com"
  messagingSenderId= "0123456789"
  appId= "1:012356789:web:xxxxxxxxxx"

  # your infura credential
  infuraApiKey="xxxxxxxx"
  
  HOST=http://localhost
  API_PORT=3000

  ```
  
- run
  
  `nvm use`

  `npm install`

  `npm run dev:api` to run the API service

  `npm run dev:websocket` to run the websocket worker process
