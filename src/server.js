import express from 'express';
import { argv } from 'yargs';

const port = argv.port || process.env.PORT || 3000;
const app = express();

app.all("*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(port);
