import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "../components/Navbar/Navbar";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Personal');
  const [userId, setUserId] = useState('');
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [showArchivedExpanded, setShowArchivedExpanded] = useState(false);

 
  // Fetch userId from local storage
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  // Fetch notes
  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users/notes', { 
        params: { userId } 
      });
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    if (userId) fetchNotes();
  }, [userId]);

  // Organize notes: separate archived and active, sort pinned first
  const { archivedNotes, activeNotes } = notes.reduce(
    (acc, note) => {
      if (note.archived) acc.archivedNotes.push(note);
      else acc.activeNotes.push(note);
      return acc;
    },
    { archivedNotes: [], activeNotes: [] }
  );

  const sortedActiveNotes = [...activeNotes].sort((a, b) => 
    a.pinned === b.pinned ? 0 : a.pinned ? -1 : 1
  );

  // Note CRUD operations
  const handleCreateNote = async () => {
    try {
      const response = await axios.post('http://localhost:8000/users/notes', {
        title,
        content,
        category,
        userId,
      });
      setNotes([...notes, response.data]);
      resetForm();
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  const handleUpdateNote = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/users/notes/${selectedNoteId}`,
        { title, content, category }
      );
      setNotes(notes.map(note => 
        note._id === selectedNoteId ? response.data : note
      ));
      resetForm();
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/notes/${id}`);
      setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleTogglePinned = async (id) => {
    try {
      const note = notes.find(note => note._id === id);
      const response = await axios.put(
        `http://localhost:8000/users/notes/${id}`,
        { pinned: !note.pinned }
      );
      setNotes(notes.map(note => 
        note._id === id ? response.data : note
      ));
    } catch (error) {
      console.error('Error toggling pin:', error);
    }
  };

  const handleToggleArchived = async (id) => {
    try {
      const note = notes.find(note => note._id === id);
      const response = await axios.put(
        `http://localhost:8000/users/notes/${id}`,
        { archived: !note.archived }
      );
      setNotes(notes.map(note => 
        note._id === id ? response.data : note
      ));
    } catch (error) {
      console.error('Error toggling archive:', error);
    }
  };

  const handleEditNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
    setSelectedNoteId(note._id);
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setCategory('Personal');
    setSelectedNoteId(null);
  };

  return (
    <>
    <Navbar/>
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-gray-800`}>
      <div className=" mx-auto px-4 py-8 text-2xl font-semibold mb-4  text-gray-900 dark:text-white">
      QuickNote
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              rows="4"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="Personal">Personal</option>
              <option value="Work">Work</option>
              <option value="Transactions">Transactions</option>
            </select>
            {selectedNoteId ? (
           <button
           onClick={handleUpdateNote}
           className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform w-full"
         >
           <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
             <span className="text-green-800 dark:text-green-200 text-sm">Update Note</span>
           </div>
         </button>
            ) : (
              <button
                onClick={handleCreateNote}
                className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform w-full"
              >
                <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
            <span className="text-green-800 dark:text-green-200 text-sm">Create Note</span>
                </div>
              </button>
            )}
          </div>

          { /* Active Notes */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Active Notes
              </h2>
              {sortedActiveNotes.length === 0 ? (
                <p className="text-gray-500 dark:text-gray-400">No active notes</p>
              ) : (
                sortedActiveNotes.map(note => (
            <div
              key={note._id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4 border-2 border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {note.pinned && '📌 '}{note.title}
                </h3>
                <div className="flex space-x-2">
            <button
              onClick={() => handleTogglePinned(note._id)}
              className="text-yellow-500 hover:text-yellow-600"
            >
              {note.pinned ? '📌' : '📍'}
            </button>
            <button
              onClick={() => handleToggleArchived(note._id)}
              className="text-blue-500 hover:text-blue-600"
            >
              📁
            </button>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{note.content}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {note.category}
              </p>
              <div className="flex space-x-2">
                <button
            onClick={() => handleEditNote(note)}
            className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
                >
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
              <span className="text-green-800 dark:text-green-200 text-sm">Edit</span>
            </div>
                </button>
                <button
            onClick={() => handleDeleteNote(note._id)}
            className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
                >
            <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
              <span className="text-green-800 dark:text-green-200 text-sm">Delete</span>
            </div>
                </button>
              </div>
            </div>
                ))
              )}
            </div>

            {/* Archived Notes */}
        {archivedNotes.length > 0 && (
  <div className="mb-8">
    <div className="flex items-center mb-4 relative">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mx-auto">
        Archived Notes
      </h2>
      <button
        onClick={() => setShowArchivedExpanded(!showArchivedExpanded)}
        className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 absolute right-0"
      >
        {showArchivedExpanded ? 'Collapse' : `Show (${archivedNotes.length})`}
      </button>
    </div>
            {showArchivedExpanded ? (
              archivedNotes.map(note => (
                <div
                  key={note._id}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4 border-2 border-gray-200 dark:border-gray-700 opacity-80"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {note.title}
                    </h3>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleToggleArchived(note._id)}
                        className="text-green-500 hover:text-green-600"
                      >
                        Unarchive
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{note.content}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {note.category}
                  </p>
                </div>
              ))
            ) : (
              <div className="space-y-2">
                {archivedNotes.map(note => (
                  <div
                    key={note._id}
                    className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-4 py-3 rounded-lg"
                  >
                    <p className="truncate text-gray-600 dark:text-gray-300">
                      {note.title}
                    </p>
                    <button
                      onClick={() => handleToggleArchived(note._id)}
                      className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400"
                    >
                      Unarchive
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default App;