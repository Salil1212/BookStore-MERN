// import express, { response } from "express";

// import mongoose from "mongoose";
// import { Book } from "./models/bookModel.js";
// import booksRoute from "./routes/booksRoute.js";
// import cors from "cors";
// import dotenv from "dotenv";
// const app = express();
// dotenv.config();

// //Middleware for parsing request body
// app.use(express.json());

// const port = 3000;
// // Middleware for parsing request body
// //Option1 : Allow All Origiins with Default of cors(*)
// app.use(cors());

// app.get("/", (request, response) => {
//   return response.status(234).send("Welcome To MERN Stack Tutorial");
// });

// app.use("/books", booksRoute);
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
// // mongoose.connect(MongoDBURL).then(() => {
// //   console.log("App connected to database");

// // });
import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for parsing request body
// Option1 : Allow All Origins with Default of cors(*)
app.use(cors());

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
