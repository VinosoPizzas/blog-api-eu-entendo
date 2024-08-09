import deletePostSchema from "../schemas/deletePostSchema.js";
import Database from "better-sqlite3";

const db = new Database("./database/blog.db");

const deletePost = async (fastifyInstance) => {
  fastifyInstance.delete(
    "/deletePost/:id",
    deletePostSchema,
    async (request, response) => {
      const { id } = request.params;
      if (request.body === null) {
        response.status(404).send({ message: "o body da request está vazio" });
      }
      const post = await db
        .prepare("DELETE FROM posts WHERE id = :id")
        .bind({ id: id });
      await post.run();
      response.status(200).send({ message: "Post deletado com sucesso" });
    }
  );
};

export default deletePost;
