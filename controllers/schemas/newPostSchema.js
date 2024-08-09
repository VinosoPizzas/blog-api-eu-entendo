const newPostSchema = {
  body: {
    type: "object",
    required: ["title", "article", "author", "created_at", "category"],
    properties: {
      title: "string",
      article: "string",
      author: "string",
      created_at: "string",
      category: "string",
    },
  },
  response: {
    200: "string",
  },
};

export default newPostSchema;
