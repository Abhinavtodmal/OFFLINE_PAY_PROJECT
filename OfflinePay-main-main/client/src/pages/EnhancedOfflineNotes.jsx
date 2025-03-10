import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NotesIcon from '@mui/icons-material/Notes';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import PushPinIcon from '@mui/icons-material/PushPin';
import ArchiveIcon from '@mui/icons-material/Archive';

const EnhancedOfflineNotes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '', category: 'Personal' });
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editNoteId, setEditNoteId] = useState(null);

  const addNote = () => {
    if (newNote.title.trim() && newNote.content.trim()) {
      setNotes([...notes, { id: Date.now(), ...newNote, pinned: false, archived: false }]);
      setNewNote({ title: '', content: '', category: 'Personal' });
    }
  };

  const editNote = (id, updatedNote) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, ...updatedNote } : note)));
    setIsEditing(false);
    setEditNoteId(null);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const togglePin = (id) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, pinned: !note.pinned } : note)));
  };

  const toggleArchive = (id) => {
    setNotes(notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note)));
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative p-1 rounded-lg bg-gradient-to-r from-purple-400 via-indigo-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform shadow-lg hover:shadow-indigo-500/50"
    >
      <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg p-8 h-[600px] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <NotesIcon className="text-indigo-600 dark:text-indigo-400 text-4xl mr-2" />
            <span className="text-indigo-800 dark:text-indigo-200 text-2xl font-semibold">
              Enhanced Offline Notes
            </span>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search notes..."
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
            />
            <SearchIcon className="text-gray-500 dark:text-gray-400 ml-2" />
          </div>
        </div>

        {/* Add/Edit Note Form */}
        <div className="mb-6">
          <input
            type="text"
            value={newNote.title}
            onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
            placeholder="Title"
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
          />
          <textarea
            value={newNote.content}
            onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            placeholder="Write your note..."
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
            rows="3"
          />
          <div className="flex items-center justify-between">
            <select
              value={newNote.category}
              onChange={(e) => setNewNote({ ...newNote, category: e.target.value })}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
            >
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="Transactions">Transactions</option>
            </select>
            <button
              onClick={isEditing ? () => editNote(editNoteId, newNote) : addNote}
              className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
            >
              {isEditing ? 'Save Changes' : <AddIcon />}
            </button>
          </div>
        </div>

        {/* Notes List */}
        <div className="flex-1 overflow-y-auto">
          {filteredNotes
            .filter((note) => !note.archived)
            .sort((a, b) => (a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1))
            .map((note) => (
              <div
                key={note.id}
                className="p-4 mb-4 rounded-lg shadow-md transition-transform hover:scale-105 bg-white dark:bg-gray-700"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{note.title}</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => togglePin(note.id)}
                      className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 transition-colors mr-2"
                    >
                      <PushPinIcon style={{ transform: note.pinned ? 'rotate(45deg)' : 'rotate(0)' }} />
                    </button>
                    <button
                      onClick={() => toggleArchive(note.id)}
                      className="text-gray-500 dark:text-gray-400 hover:text-indigo-500 transition-colors mr-2"
                    >
                      <ArchiveIcon />
                    </button>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{note.content}</p>
                <span className="text-xs text-gray-500 dark:text-gray-400">{note.category}</span>
              </div>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedOfflineNotes;