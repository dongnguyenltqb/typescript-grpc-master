// Original file: /home/dong/code/typescript-grpc-master/src/protobuf/message/user.proto

import type { AccessToken as _message_AccessToken, AccessToken__Output as _message_AccessToken__Output } from '../message/AccessToken';

export interface LogoutRequest {
  'access_token'?: (_message_AccessToken | null);
}

export interface LogoutRequest__Output {
  'access_token': (_message_AccessToken__Output | null);
}
