export abstract class BaseRepository<T> {
  constructor() {}

  protected abstract create(dataObj: T): Promise<void>;
  protected abstract get(filter: unknown): Promise<T | null>;
  protected abstract getAll(): Promise<T[]>;
  protected abstract update(
    dataObj: Partial<T>,
    filter: unknown,
  ): Promise<void>;
  //   protected abstract delete(filter: any): Promise<void>;
}
