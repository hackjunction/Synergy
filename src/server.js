import express from 'express';
import { argv } from 'yargs';

import serverRenderReactAppMiddleware from 'src/lib/serverRenderReactAppMiddleware';

const port = argv.port || process.env.PORT || 3000;
const app = express();

app.all("*", serverRenderReactAppMiddleware);

app.listen(port);
