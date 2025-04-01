import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [userId, setUserId] = useState('');
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Fetch userId from local storage on component mount
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  // Fetch notes for the user
  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users/notes', { params: { userId } });
      setNotes(response.data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchNotes();
    }
  }, [userId]);

  // Sort notes: pinned notes first
  const sortedNotes = [...notes].sort((a, b) => {
    if (a.pinned === b.pinned) return 0; // If both are pinned or unpinned, maintain order
    return a.pinned ? -1 : 1; // Pinned notes come first
  });

  // Create a new note
  const handleCreateNote = async () => {
    try {
      const response = await axios.post('http://localhost:8000/users/notes', {
        title,
        content,
        category,
        userId,
      });
      setNotes([...notes, response.data]);
      setTitle('');
      setContent('');
      setCategory('Personal'); // Reset category
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  // Update a note
  const handleUpdateNote = async () => {
    try {
      const response = await axios.put(`http://localhost:8000/users/notes/${selectedNoteId}`, {
        title,
        content,
        category,
      });
      setNotes(notes.map(note => (note._id === selectedNoteId ? response.data : note)));
      setTitle('');
      setContent('');
      setCategory('');
      setSelectedNoteId(null);
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  // Delete a note
  const handleDeleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/users/notes/${id}`);
      setNotes(notes.filter(note => note._id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  // Toggle pinned status
  const handleTogglePinned = async (id) => {
    try {
      const note = notes.find(note => note._id === id);
      const response = await axios.put(`http://localhost:8000/users/notes/${id}`, {
        pinned: !note.pinned,
      });
      setNotes(notes.map(note => (note._id === id ? response.data : note)));
    } catch (error) {
      console.error('Error toggling pinned status:', error);
    }
  };

  // Toggle archived status
  const handleToggleArchived = async (id) => {
    try {
      const note = notes.find(note => note._id === id);
      const response = await axios.put(`http://localhost:8000/users/notes/${id}`, {
        archived: !note.archived,
      });
      setNotes(notes.map(note => (note._id === id ? response.data : note)));
    } catch (error) {
      console.error('Error toggling archived status:', error);
    }
  };

  // Edit a note
  const handleEditNote = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setCategory(note.category);
    setSelectedNoteId(note._id);
  };

  return (
    <div className="min-h-screen dark:bg-gray-800 bg-opacity-60 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Note Form */}
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
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Update Note
            </button>
          ) : (
            <button
              onClick={handleCreateNote}
              className="relative p-1 rounded-lg bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 animate-gradient-border hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                <span className="text-green-800 dark:text-green-200 text-sm">Create Note</span>
              </div>
            </button>
          )}
        </div>

        {/* Notes List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Notes</h2>
          {sortedNotes.map(note => (
            <div
              key={note._id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4 border-2 border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{note.title}</h3>
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
                    {note.archived ? '🗂️' : '📁'}
                  </button>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{note.content}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{note.category}</p>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditNote(note)}
                  className="relative p-1 rounded-lg bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient-border hover:scale-105 transition-transform"
                >
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                    <span className="text-yellow-800 dark:text-yellow-200 text-sm">Edit</span>
                  </div>
                </button>
                <button
                  onClick={() => handleDeleteNote(note._id)}
                  className="relative p-1 rounded-lg bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 animate-gradient-border hover:scale-105 transition-transform"
                >
                  <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-lg">
                    <span className="text-red-800 dark:text-red-200 text-sm">Delete</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;