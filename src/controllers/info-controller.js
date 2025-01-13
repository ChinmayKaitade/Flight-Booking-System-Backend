const info = (req, res) => {
  return res.json({
    success: true,
    msg: "API is Live",
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};
