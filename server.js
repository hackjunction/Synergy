import express from "express";
import apiProxy from "src/server/apiProxy";

const app = express();
const port = process.env.PORT || 3000;
const public_path = express.static(__dirname + "/public");
const index_path = __dirname + "/public/index.html";

app.use(public_path);
app.use("/api", apiProxy);
app.get("*", function(request, response) {
  response.sendFile(index_path, function(error) {
    if (error) {
      console.log(error);
    }
  });
});
app.listen(port);
console.log("Listening at http://localhost:" + port);
