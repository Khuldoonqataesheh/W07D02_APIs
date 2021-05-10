const express = require("express");

const app = express();
const port = 5000;

const todos = [
  { todo: " wakeup", isCompleted: false },
  { todo: "Eat Breakfast", isCompleted: false },
];

app.use(express.json());

app.get("/todos", (req, res) => {
  res.json(todos);
});
app.post("/create/todo", (req, res) => {
  const todo = req.body.todo;
  const isCompleted = req.body.isCompleted;
  const newTodo = { todo, isCompleted };

  todos.push(newTodo);
  res.status(201);
  res.json("todo added");
});

app.put("/update/todo/:name", (req, res) => {
  const name = req.params.name;
  const found = todos.find((element) => {
    return element.todo === name;
  });
  if (found) {
    res.status(200);
   /* const todo = req.body.todo;
    const isCompleted = req.body.isCompleted;
    const newTodo = { todo, isCompleted };*/
    res.json('1');
  } else {
    res.status(404);
    res.json("todo not found");
  }
});
app.listen(port, () => {
  console.log(`the server run on http://localhost:${port}`);
});
