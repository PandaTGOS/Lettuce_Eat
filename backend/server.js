const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const PORT = 2000;
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
const cors = require("cors");

const connectToDb = async() => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB");
    }
    catch (error) {
        console.log(error);
    }
};
connectToDb();


app.use(express.json());
express.json()
app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);

app.use(bodyParser.json());
// app.use("/api", todoRoutes);
app.use("/api", userRoutes);
app.use("/api", cartRoutes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));