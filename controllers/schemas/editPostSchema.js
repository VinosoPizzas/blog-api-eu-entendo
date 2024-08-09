const editPostSchema = {
  params: {
    id: { type: "number" },
  },
  body: {
    type: "object",
    required: ["title", "article", "category"],
    properties: {
      title: "string",
      article: "string",
      category: "string",
    },
  },
  response: {
    200: "string",
  },
};

export default editPostSchema;
