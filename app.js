const express = require("express");
const app = express();

// middleware
app.use(express.json());

// routes
const tasks = require("./routes/tasks");

app.use("/api/v1/tasks", tasks);

// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/tasks/:id')  - delete task

const port = 8000;
app.listen(port, console.log(`Server is up and running at ${port}`));
