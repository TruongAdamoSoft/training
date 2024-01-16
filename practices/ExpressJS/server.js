// require express
const express = require('express');

// Init express
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const taskRouter = require("./routes/tasks");
app.use("/tasks", taskRouter);

// Set port for server
app.listen(3000);