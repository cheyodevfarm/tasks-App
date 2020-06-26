require("dotenv").config();
const app = require("./server");
require("./database");

app.listen(app.get("port") || 4000, () => {
  console.log("server on port", app.get("port") || 4000);
});
