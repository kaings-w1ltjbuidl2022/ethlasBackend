export class Container {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static _instance: Map<string, any>;

  constructor() {
    Container._instance = Container._instance ?? new Map();
  }

  getInstance() {
    return Container._instance;
  }
}
