import express from "express";
import Book from "../models/book.mjs";
import { body, validationResult } from "express-validator";
import { requestErrorHandler } from "../helpers/helper.mjs";
import {
  getBookById,
  getAllBooks,
  deleteBook,
  registBook,
  updateBook,
} from "../controllers/books.mjs";

const router = express.Router();

router.get("/", async function (req, res) {
  const books = await Book.find().sort({ updatedAt: -1 });
  res.json(books);
});

router.get("/:id", async function (req, res) {
  const _id = req.params.id;
  const books = await Book.findById(_id);
  res.json(books);
});
router.delete("/:id", async function (req, res) {
  const _id = req.params.id;
  await Book.deleteOne({ _id });
  res.json({ msg: "Delete successed" });
});
// router.post("/", body("title").notEmpty().withMessage("エラーメッセージ"),registBook);
// router.post("/", async function (req, res) {
//   const errors = validationResult(req);
//   if (errors.isEmpty()) {
//     const errs = errors.array();
//     return res.status(400).json(errs);
//   }
//   const body = req.body;
//   const book = new Book(body);
//   const newBook = await book.save();
//   res.json(newBook);
// });
// router.patch("/:id", async function (req, res) {
//   const { title, rating, description, comment } = req.body;
//   const _id = req.params.id;
//   const book = await Book.findById(_id);
//   if (title !== undefined) book.title = title;
//   if (rating !== undefined) book.rating = rating;
//   if (comment !== undefined) book.comment = comment;
//   if (description !== undefined) book.description = description;
//   await book.save();
//   res.json(book);
// });

// router.get('/', requestErrorHandler(getAllBooks));

// router.get("/:id", requestErrorHandler(getBookById));

router.post(
  "/",
  body("title").notEmpty(),
  body("description").notEmpty(),
  body("comment").notEmpty(),
  body("rating").notEmpty().isInt({ min: 1, max: 5 }),
  requestErrorHandler(registBook)
);

// validator.js
// https://github.com/validatorjs/validator.js
router.patch(
  "/:id",
  body("title").optional().notEmpty(),
  body("description").optional().notEmpty(),
  body("comment").optional().notEmpty(),
  body("rating").optional().notEmpty().isInt({ min: 1, max: 5 }),
  requestErrorHandler(updateBook)
);

// router.delete("/:id", requestErrorHandler(deleteBook));

export default router;
