const express = require("express");
const app = express();

const port = 5000;

app.use(express.json());
app.use("/users", require("./routes/socialUserRoutes"));
app.use("/posts", require("./routes/socialPostsRoute."));

app.use(express.static("./web"))

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
});

module.exports = app