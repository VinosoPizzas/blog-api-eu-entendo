import newPostSchema from "../schemas/newPostSchema.js";
import Database from "better-sqlite3";

const db = new Database("./database/blog.db");

const newPost = async (fastifyInstance) => {
  fastifyInstance.post("/newPost", newPostSchema, async (request, response) => {
    const { title, article, author, category } = request.body;
    const created_at = new Date().toString();
    if (request.body === null) {
      response.status(404).send({ message: "o body da request está vazio" });
    }
    const post = await db.prepare(
      `INSERT INTO posts (title, article, author, created_at, category) VALUES (:title, :article, :author, :created_at, :category)`
    );

    await post.run({
      title: title,
      article: article,
      author: author,
      created_at: created_at,
      category: category,
    });
    response.status(200).send("Post adicionado com sucesso");
  });
};

export default newPost;
