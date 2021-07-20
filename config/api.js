module.exports = ({ env }) => ({
  responses: {
    privateAttributes: ["_v", "id", "created_at"],
  },
  rest: {
    defaultLimit: null,
    maxLimit: null,
  },
});
