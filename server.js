import fastify from "fastify";
import getPosts from "./controllers/handlers/getPosts.js";
import getPost from "./controllers/handlers/getPost.js";
import newPost from "./controllers/handlers/newPost.js";
import editPost from "./controllers/handlers/editPost.js";
import deletePost from "./controllers/handlers/deletePost.js";
/* import newPost from "./routes/post.js";
import putPosts from "./routes/put.js";
import deletePosts from "./routes/delete.js"; */

const app = fastify();

app.register(getPosts);
app.register(getPost);
app.register(newPost);
app.register(editPost);
app.register(deletePost);
/* app.register(newPost);
app.register(putPosts);
app.register(deletePosts); */

const PORT = process.env.PORT || 3000;

try {
  app.listen({ port: PORT }).then(() => {
    console.log("Server running !");
  });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
