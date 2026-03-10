import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRouter from "./routes/user.route.js";
import bookRouter from "./routes/book.route.js";

dotenv.config();

const app = express();

app.use(express.json());

// routes
app.use("/api/authuser", userRouter);
app.use("/api/book", bookRouter);
app.get("/", (req,res) => {
  res.send("Libspace API is working...");
});
const PORT = process.env.PORT || 5000;
app.get("/books", (req, res) => {
  res.json([
    { id: 1, name: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, name: "Rich Dad Poor Dad", author: "Robert Kiyosaki" }
  ]);
});

app.post("/books", (req, res) => {
  const newBook = req.body;
  res.json({
    message: "Book added successfully",
    book: newBook
  });
});

app.listen(PORT, () => {
  connectDb();
  console.log(`Our server is working at PORT: ${PORT}`);
});