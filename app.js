const bodyParser = require("body-parser");
const express = require("express");

const path = require("path");

const shopRoutes = require("./Routes/shop");
const adminRoutes = require("./Routes/admin");
const rootDir = require("./utils/helper");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use((req, res) => {
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
