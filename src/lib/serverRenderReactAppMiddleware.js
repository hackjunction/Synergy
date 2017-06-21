import React from 'react';
import ReactDOMServer from 'react-dom/server';

import TempApp from 'src/TempApp';

const serverRenderReactAppMiddleware = (req, res) => {
  const renderedHTML = ReactDOMServer.renderToString(
    <TempApp />
  );
  res.send(renderedHTML);
};

export default serverRenderReactAppMiddleware;
