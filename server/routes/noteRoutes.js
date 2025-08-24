const express = require("express");

const {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} = require("../controllers/NoteController.js");

const router = express.Router();

// Notes Routes

router.route("/notes").post(createNote);
router.route("/notes").get(getNotes);
router.route("/notes/:id").put(updateNote);
router.route("/notes/:id").delete(deleteNote);



module.exports = router;
