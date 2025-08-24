const Note = require("../models/NoteModel.js");
require("dotenv").config();

require("crypto-js");

const createNote = async (req, res) => {
  try {
    const { title, content, category, userId } = req.body;

   

    const note = new Note({ title, content, category, userId });
   
    await note.save();
  
    res.status(201).json(note);
  } catch (error) {
    
    res.status(500).json({ error: "Failed to create note" });
  }
};

// Get all notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};

// Update a note
const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, pinned, archived } = req.body;
    const note = await Note.findByIdAndUpdate(
      id,
      { title, content, category, pinned, archived },
      { new: true }
    );
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: "Failed to update note" });
  }
};

// Delete a note
const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    await Note.findByIdAndDelete(id);
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete note" });
  }
};

module.exports = {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
};
