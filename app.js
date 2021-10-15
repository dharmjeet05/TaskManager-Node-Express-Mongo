const express = require("express");
const app = express();
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware
app.use(express.json());

// routes
const tasks = require("./routes/tasks");

app.use("/api/v1/tasks", tasks);

// Starting Server
const port = 8000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is up and running at ${port}`));
    } catch (error) {
        console.log(error);
    }
};
start();
