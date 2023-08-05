export class Container {
  private static _instance: Map<string, unknown>;

  constructor() {
    Container._instance = Container._instance ?? new Map();
  }

  getInstance() {
    return Container._instance;
  }
}
