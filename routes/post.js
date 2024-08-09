import Database from "better-sqlite3";

// instanciar base de dados
const db = new Database(
  "./database/blog.db" /*  (option.fileMustExist = True) */
);

export default async function newPosts(fastifyInstance) {
  fastifyInstance.post("/newPost", async (request, reply) => {
    const date = new Date();
    const posts = await db.prepare(
      "INSERT INTO posts (title, article, author, created_at, category) VALUES (@title, @article, @author, @created_at, @category)"
    );
    posts.run({
      title: "Teste novo post",
      article: "Post de teste",
      author: "Eu mesmo",
      created_at: "2024-08-07",
      category: "Meme",
    });
    reply.send(posts);
  });
}
