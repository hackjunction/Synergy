const index_path = `${__dirname}/public/index.html`;

const serverRenderReactAppMiddleware = (req, res) => {
  res.send(index_path);
};

export default serverRenderReactAppMiddleware;
