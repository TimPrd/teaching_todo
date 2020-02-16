const express = require("express");
const ejs = require("ejs");
const fs = require("fs");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const Todo = require("./models/todo");

const todoFront = fs.readFileSync("./src/front/todo.ejs", "utf-8");

const app = express();

mongoose.connect(process.env.DB || "mongodb://localhost/todo", { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => app.emit("db ready"))
	.catch(err => console.error(err));


app.use(bodyParser.urlencoded({ extended: false }));

app.post("/add_todo", async (req, res) => {
  if(req.body.todo) {
    await Todo.create({ content: req.body.todo });
		res.status(201).redirect("/");
  } else {
    res.json({ error: "cannot create empty todo" });
  }
})

app.post("/delete_todo/:id", async (req, res) => {
	const id = req.params.id;
	if (id)
		await Todo.findOneAndDelete({"_id": id})
	res.status(200).redirect("/");
})

app.get("/", async (req, res) => {
  const todos = await Todo.find({}, ["content", "_id"]);
  res.end(ejs.render(todoFront, { todos }));
})


app.on("db ready", () => {
  const PORT = process.env.PORT || 4000;
  console.log(`app listening on port ${PORT}`);
  app.listen(PORT);
});
