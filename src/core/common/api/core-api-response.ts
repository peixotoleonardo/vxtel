import { Code } from "./code";

export class CoreApiResponse<T> {
  public readonly code: number;
  public readonly message: string;
  public readonly timestamp: number;
  public readonly data: T;

  private constructor(code: number, message: string, data?: T) {
    this.code      = code;
    this.message   = message;
    this.data      = data || null;
    this.timestamp = Date.now();
  }

  public static success<T>(data?: T, message?: string): CoreApiResponse<T> {
    return new CoreApiResponse(
      Code.SUCCESS.code,
      message || Code.SUCCESS.message,
      data
    );
  }
}
