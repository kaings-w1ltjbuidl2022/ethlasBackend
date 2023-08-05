import { WebSocket } from 'ws';
export class Injector {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static _instance: Map<string, any>;

  constructor() {
    Injector._instance = Injector._instance ?? new Map();
  }

  getInstance() {
    return Injector._instance;
  }
}

export function handleWs(ws: WebSocket) {
  let pongTimeout: NodeJS.Timeout;
  let keepAlive: NodeJS.Timer;
  const PING = 10000;
  const PONG = 20000;
  ws.on('open', () => {
    keepAlive = setInterval(async () => {
      ws.ping();
      pongTimeout = setTimeout(() => {
        ws.terminate();
      }, PONG);
    }, PING);
  });
  ws.on('close', () => {
    console.log(`websocket.connection.close`);
    clearInterval(keepAlive);
    clearTimeout(pongTimeout);
    process.exit(); // trigger server restart (to re-established connections)
  });
  ws.on('pong', () => {
    console.log(`websocket.pong`);
    clearTimeout(pongTimeout);
  });
}
