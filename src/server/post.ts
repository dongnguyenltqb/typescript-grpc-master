import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { CreatePost } from "../proto-gen/message/CreatePost";
import { CreatePostResult } from "../proto-gen/message/CreatePostResult";
import  {PostHandlers} from "../proto-gen/rpc/Post"
const postHandler: PostHandlers = {
  Create(
    call: ServerUnaryCall<CreatePost,CreatePostResult>,
    callback: sendUnaryData<CreatePostResult>
  ) {
    try {
      // process here
      console.log(call.request.title);
      callback(null, {
        id:1
      });
    } catch (error) {
      callback(error);
    }
  },
};

export { postHandler };
