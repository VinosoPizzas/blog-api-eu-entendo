const getPostSchema = {
  params: {
    id: { type: "string" },
  },
  response: {
    200: {
      type: "array",
      items: {
        id: { type: "number" },
        title: { type: "string" },
        article: { type: "string" },
        author: { type: "string" },
        created_at: { type: "string" },
        category: { type: "string" },
      },
    },
  },
};

export default getPostSchema;
