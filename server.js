const express = require("express");
const connectDB = require("./config/db");
const app = express();

//DB Connectivity
connectDB();

//Initializing Middleware
app.use(express.json({ extended: false }));

app.use("/api/user", require("./routes/api/user"));
app.use("/api/blog", require("./routes/api/blog"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
