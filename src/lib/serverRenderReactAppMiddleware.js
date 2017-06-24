import React from "react";
import ReactDOMServer from "react-dom/server";
const index_path = __dirname + "/public/index.html";

import TempApp from "src/app/index";

// TODO: use templating engine and move HTML template to an external file
const renderHTML = appHtml => `<html>
  <body>
    <div id="app">${appHtml}</div>
  </body>
</html>`;

const serverRenderReactAppMiddleware = (req, res) => {
  // const appHtml = ReactDOMServer.renderToString(<TempApp />);
  // const completeHTML = renderHTML(appHtml);
  res.send(index_path);
};

export default serverRenderReactAppMiddleware;
