import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";

// Routes

const app = express();

// Middlewares

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();
mongoose
  .connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`);
    })
  )
  .catch((err) => {
    console.log(err);
  });

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/post", postRoute);
