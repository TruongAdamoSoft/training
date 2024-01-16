const express = require('express');
const router = express.Router();

// Init task list
const tasks = [
    {name: "Task 1"},
    {name: "Task 2"}
]

// List tasks
router.get('/', (req, res) => {
    res.json(tasks);
})

// Get task by id
router.get("/:id", (req, res) => {
    const id = req.params.id;
    // validate index here
    res.json(tasks[id-1]);
})

// Add task
router.post('/', (req, res) => {
    const task = {name: req.body.name};
    tasks.push(task);
    res.json({success: true});
})

// Edit task
router.put("/:id", (req, res) => {
    const id = req.params.id;
    // validate index here
    const task = tasks[id-1];
    task.name = req.body.name;
    res.json({success: true});
})

// Delete task
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    // validate index here
    tasks.splice(id -1, 1);
    res.json({success: true});
})

module.exports = router;