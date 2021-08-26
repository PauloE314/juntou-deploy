if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const cors = require("cors");
// const BodyParser = require("body-parser");

require("./database");

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

app.get("/test/", (_, res) => res.send({ message: "Working" }));

app.listen(process.env.PORT || 3003);
