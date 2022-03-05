import path from "path";
import { loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

import { ProtoGrpcType as ProtoGrpcTypeUser } from "./proto-gen/user";
import { ProtoGrpcType as ProtoGrpcTypePost } from "./proto-gen/post";
import { execSync } from "child_process";

// Suggested options for similarity to existing grpc.load behavior
const PROTOR_DIRS = [
  {
    DIR: path.join(__dirname, "./protobuf/message"),
    PREFIX: "message/",
  },
  {
    DIR: path.join(__dirname, "./protobuf/rpc"),
    PREFIX: "rpc/",
  },
];

const PROTO_PATH = PROTOR_DIRS.map(({ DIR, PREFIX }) =>
  execSync(`ls ${DIR}`, { encoding: "utf8" })
    .split("\n")
    .filter((e) => e)
    .map((e) => PREFIX + e)
    .join(" ")
)
  .join(" ")
  .split(" ");

const packageDefinition = loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [path.join(__dirname, "./protobuf")],
});

type ProtoGrpcTypeMerge = ProtoGrpcTypeUser & ProtoGrpcTypePost;

const protoDescriptor = loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcTypeMerge;

export default protoDescriptor;
