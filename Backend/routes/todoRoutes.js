import express from "express";
import Todo from "../models/Todo.js";

const router = express.Router();


router.get("/", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});


router.post("/", async (req, res) => {
    const todo = await Todo.create({ text: req.body.text });
    res.json(todo);
});


router.put("/:id", async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        { completed: req.body.completed },
        { new: true }
    );
    res.json(todo);
});


router.delete("/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
});

export default router;
