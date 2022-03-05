// Original file: /Users/dong/Desktop/master/src/protobuf/message/user.proto

import type { AccessToken as _message_AccessToken, AccessToken__Output as _message_AccessToken__Output } from '../message/AccessToken';
import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface LoginResult {
  'ok'?: (boolean);
  'error'?: (string);
  'data'?: (_message_AccessToken | null);
  'login_at'?: (_google_protobuf_Timestamp | null);
  '_error'?: "error";
  '_data'?: "data";
  '_login_at'?: "login_at";
}

export interface LoginResult__Output {
  'ok': (boolean);
  'error'?: (string);
  'data'?: (_message_AccessToken__Output | null);
  'login_at'?: (_google_protobuf_Timestamp__Output | null);
  '_error': "error";
  '_data': "data";
  '_login_at': "login_at";
}
