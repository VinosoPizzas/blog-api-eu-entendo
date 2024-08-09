import getPostsSchema from "../schemas/getPostsSchema.js";
import Database from "better-sqlite3";

const db = new Database("./database/blog.db");

const getPosts = async (fastifyInstance) => {
  await fastifyInstance.get(
    "/posts",
    getPostsSchema,
    async (request, response) => {
      const posts = await db.prepare("SELECT * FROM posts").all();
      response.status(200).send(posts);
    }
  );
};

export default getPosts;
