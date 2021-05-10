const express = require("express");

const app = express();
const port = 5000;

const todos = [
  { todo: "wake up", isCompleted: false },
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
    const todo = req.body.todo;
    const isCompleted = req.body.isCompleted;
    const newTodo = { todo, isCompleted };
    res.json(newTodo);
  } else {
    res.status(404);
    res.json("todo not found");
  }
});
app.delete("/delete/todo/:name", (req, res) => {
  const name = req.params.name;
  let x;
  const found = todos.filter((element, i) => {
    if (element.todo === name) {
      x = i;
      return element;
    }
  });
  todos.splice(x);
  if (found) {
    res.status(200);
    res.json(found);
  } else {
    res.status(404);
    res.json("todo not found");
  }
});
app.put("/complete/todo/:name", (req, res) => {
  const name = req.params.name;
  let x;
  const found = todos.filter((element, i) => {
    if (element.todo === name) {
      x = i;
      return element;
    }
  });
  todos[x].isCompleted = true;
  if (found) {
    res.status(200);

    res.json(todos);
  } else {
    res.status(404);
    res.json("todo not found");
  }
});
app.get("/completed/todos", (req, res) => {
  res.json(todos);
});
app.listen(port, () => {
  console.log(`the server run on http://localhost:${port}`);
});
