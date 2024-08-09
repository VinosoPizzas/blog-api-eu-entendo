import getPostSchema from "../schemas/getPostSchema.js";
import Database from "better-sqlite3";

const db = new Database("./database/blog.db");

const getPost = async (fastifyInstance) => {
  await fastifyInstance.get(
    "/posts/:id",
    getPostSchema,
    async (request, response) => {
      const prepare = await db.prepare(`SELECT * FROM posts WHERE id = @id`);
      const post = prepare.get(request.params);

      if (!post) {
        return response.status(404).send({
          errorMsg: "Post not found",
        });
      }

      return response.status(200).send(post);
    }
  );
};

export default getPost;
