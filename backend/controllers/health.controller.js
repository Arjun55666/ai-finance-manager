export const healthCheck = (req, res) => {
  res.json({
    status: "OK",
    message: "API is healthy",
  });
};
