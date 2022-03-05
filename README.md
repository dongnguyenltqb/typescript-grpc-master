**Typescript gRPC Service**

---

**PREPARE**

- Write protobuf file in `src/protobuf` folder, define all message in `src/protobuf/message` and all rpc function in `src/protobuf/rpc/`
- To build `type definition` run command `npm run build:proto` . 
- Type definition is located in `src/proto-gen`, you can import and use in your code.

**BUILD**

```shell
$ npm install
$ npm run build
```

**RUN**

```shell
$ run start
```

**RELEASE**

```shell
$ npm release
```

