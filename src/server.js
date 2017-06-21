import express from 'express';
import { argv } from 'yargs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import TempApp from 'src/TempApp';

const port = argv.port || process.env.PORT || 3000;
const app = express();

app.all("*", (req, res) => {
  const renderedHTML = ReactDOMServer.renderToString(
    <TempApp />
  );
  res.send(renderedHTML);
});

app.listen(port);
