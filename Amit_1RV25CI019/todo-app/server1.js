const express = require('express');
const cors = require('cors');
const crypto = require('crypto');

const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

/* GET all tasks */
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

/* CREATE task with validation */
app.post('/tasks', (req, res) => {

    const { text } = req.body;

    if (!text || typeof text !== "string" || text.trim() === "") {
        return res.status(400).json({ error: "Invalid task text" });
    }

    const task = {
        id: crypto.randomUUID(),
        text: text.trim(),
        completed: false
    };

    tasks.push(task);

    res.status(201).json(task);
});

/* TOGGLE task completion */
app.put('/tasks/:id', (req, res) => {

    const task = tasks.find(t => t.id === req.params.id);

    if (!task) {
        return res.status(404).json({ error: "Task not found" });
    }

    task.completed = !task.completed;

    res.json(task);
});

/* DELETE task */
app.delete('/tasks/:id', (req, res) => {

    const index = tasks.findIndex(t => t.id === req.params.id);

    if (index === -1) {
        return res.status(404).json({ error: "Task not found" });
    }

    tasks.splice(index, 1);

    res.json({ message: "Task deleted" });
});

/* Start server */
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});