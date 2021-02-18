export interface UseCase<TUseCasePort, TUseCaseResult> {
  execute(port?: TUseCasePort): TUseCaseResult;
}
