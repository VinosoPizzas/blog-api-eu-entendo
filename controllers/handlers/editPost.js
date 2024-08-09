import editPostSchema from "../schemas/editPostSchema.js";
import Database from "better-sqlite3";

const db = new Database("./database/blog.db");

const editPost = async (fastifyInstance) => {
  fastifyInstance.patch(
    "/editPost/:id",
    editPostSchema,
    async (request, response) => {
      const { title, article, category } = request.body;
      const { id } = request.params;
      if (request.body === null) {
        response.status(404).send({ message: "o body da request está vazio" });
      }
      const post = await db
        .prepare(
          "UPDATE posts SET title = :title, article = :article, category = :category WHERE id = :id"
        )
        .bind({ id: id, title: title, article: article, category: category });
      await post.run();
      response.status(200).send({ message: "Post atualizado com sucesso" });
    }
  );
};

export default editPost;
