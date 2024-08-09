const deletePostSchema = {
  params: {
    id: { type: "number" },
  },
  response: {
    200: { type: "string" },
  },
};

export default deletePostSchema;
