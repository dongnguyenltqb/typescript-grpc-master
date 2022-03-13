import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";

export type FnHandler<T, U> = (call: ServerUnaryCall<T, U>) => Promise<U>;

// wrapper help us to create handler function as a promise
// like FnHandler type above
export function wrapper<T, U>(
  f: FnHandler<T, U>
): (call: ServerUnaryCall<T, U>, callback: sendUnaryData<U>) => void {
  return (call: ServerUnaryCall<T, U>, callback: sendUnaryData<U>) => {
    f(call)
      .then((result) => callback(null, result))
      .catch((error) => callback(error));
  };
}
