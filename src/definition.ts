import path from "path";
import { loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

import { ProtoGrpcType as ProtoGrpcTypeUser } from "./proto-gen/user";
import { ProtoGrpcType as ProtoGrpcTypePost } from "./proto-gen/post";

// Suggested options for similarity to existing grpc.load behavior
var PROTO_PATH = [
  "message/user.proto",
  "message/post.proto",
  "rpc/user.proto",
  "rpc/post.proto",
];
var packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [
    // path.join(__dirname, "./protobuf/message"),
    // path.join(__dirname, "./protobuf/rpc"),
    path.join(__dirname, "./protobuf"),
  ],
});

type ProtoGrpcTypeMerge = ProtoGrpcTypeUser & ProtoGrpcTypePost;

var protoDescriptor = loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcTypeMerge;

export default protoDescriptor;

