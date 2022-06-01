// api/server.js

const express = require("express");
const db = require("./models");

const server = express();

// Para que nuestra api puede responder JSON.
server.use(express.json());

server.get("/products", async (req, res) => {
  const products = await db.Product.findAll();

  res.json({ products });
});

server.listen(3000, () => {
  console.log("Hey 👋 I am listening in port 3000");
});
