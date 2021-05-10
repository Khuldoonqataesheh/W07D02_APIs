const express = require("express");

const app = express();
const port = 5000;

const todos = [{ todo: " wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];

app.use(express.json());

app.get("/todos", (req, res) => {
    res.json(todos);
  });





