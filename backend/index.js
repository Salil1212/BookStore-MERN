// import express from "express";
// import mongoose from "mongoose";
// import booksRoute from "./routes/booksRoute.js";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();

// // Middleware for parsing request body
// app.use(express.json());

// // CORS configuration

// const corsOptions = {
//   // origin: "https://book-store-mern-client-dgangbqyz-salil1212s-projects.vercel.app/", // Allow your frontend origin
//   origin: [
//     "https://book-store-mern-client-dgangbqyz-salil1212s-projects.vercel.app/",
//     "https://book-store-mern-client-ten.vercel.app/",
//   ],
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   optionsSuccessStatus: 204,
// };
// app.use(cors(corsOptions));

// app.get("/", (request, response) => {
//   return response.status(200).send("Welcome To MERN Stack Tutorial");
// });

// app.use("/books", booksRoute);

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

// async function main() {
//   try {
//     await mongoose.connect(process.env.mongoDBURL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Database connected");
//   } catch (error) {
//     console.error("Database connection failed:", error);
//     process.exit(1); // Exit the process with failure
//   }
// }

// main();
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
const allowedOrigins = [
  "http://localhost:5173",
  "https://book-store-mern-client-dgangbqyz-salil1212s-projects.vercel.app",
  "https://book-store-mern-client-ten.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

// Manually set CORS headers for all responses (Optional for debugging)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

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
