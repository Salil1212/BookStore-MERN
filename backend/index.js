import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware for parsing request body
app.use(express.json());

// CORS configuration

const corsOptions = {
<<<<<<< HEAD
  origin:
    "https://book-store-mern-client-mofhtxlgn-salil1212s-projects.vercel.app", // Allow your frontend origin
=======
  origin: "https://book-store-mern-client-mofhtxlgn-salil1212s-projects.vercel.app", // Allow your frontend origin
>>>>>>> c7c9285644fdfd6fc6b969a03d79b5d83c5a2c8b
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

app.get("/", (request, response) => {
  return response.status(200).send("Welcome To MERN Stack Tutorial");
});

app.use("/books", booksRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

async function main() {
  try {
    await mongoose.connect(process.env.mongoDBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit the process with failure
  }
}

main();
