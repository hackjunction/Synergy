import React from 'react';
import ReactDOMServer from 'react-dom/server';

import TempApp from 'src/TempApp';

// TODO: use templating engine and move HTML template to an external file
const renderHTML = (appHtml) => `<html>
  <body>
    <div id="app">${appHtml}</div>
  </body>
</html>`;

const serverRenderReactAppMiddleware = (req, res) => {
  const appHtml = ReactDOMServer.renderToString(<TempApp />);
  const completeHTML = renderHTML(appHtml);
  res.send(completeHTML);
};

export default serverRenderReactAppMiddleware;
