import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSearch, FaUser, FaMoon, FaSun, FaSignOutAlt, FaHome, FaSignInAlt, FaUserPlus } from "react-icons/fa";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState(localStorage.getItem("userId") || null);
  const [username, setUsername] = useState(null);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true" || false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Fetch user data if logged in
  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  // Toggle dark mode and save preference to localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
    document.body.classList.toggle("dark-mode", newDarkMode);
  };

  // Apply dark mode on initial load
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Fetch user data
  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found. Redirecting to login page...");
        navigate("/login");
        return;
      }

      const res = await axios.get("http://localhost:8000/users/getUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsername(res.data.user.userName);
    } catch (error) {
      console.error("Error fetching user data:", error);
      if (error.response?.status === 401) {
        console.error("Unauthorized: Redirecting to login page...");
        navigate("/login");
      }
    }
  };

  // Toggle mobile menu
  const toggleActiveClass = () => setIsActive(!isActive);

  // Close mobile menu
  const removeActive = () => setIsActive(false);

  // Handle logout
  const handleLogOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      searchTextOnPage(searchQuery);
    }
  };

  // Search for text on the page and highlight matches
  const searchTextOnPage = (query) => {
    // Remove previous highlights
    const previousHighlights = document.querySelectorAll(".highlight");
    previousHighlights.forEach((highlight) => {
      highlight.outerHTML = highlight.innerHTML; // Remove the highlight wrapper
    });

    if (!query) return;

    const bodyText = document.body.innerHTML;
    const regex = new RegExp(`(${query})`, "gi");
    const newText = bodyText.replace(regex, '<span class="highlight">$1</span>');
    document.body.innerHTML = newText;

    // Scroll to the first match
    const firstMatch = document.querySelector(".highlight");
    if (firstMatch) {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Dynamic background effect
  useEffect(() => {
    const navbar = document.querySelector(`.${styles.navbar}`);

    const handleMouseMove = (e) => {
      const rect = navbar.getBoundingClientRect();
      const x = e.clientX - rect.left; // X position within the navbar
      const y = e.clientY - rect.top; // Y position within the navbar

      // Calculate the gradient position based on cursor position
      const gradientX = (x / rect.width) * 100;
      const gradientY = (y / rect.height) * 100;

      // Update the navbar's background with a smaller, more intense radial gradient
      navbar.style.background = `
        radial-gradient(
          circle 100px at ${gradientX}% ${gradientY}%, /* Smaller circle */
          rgba(255, 200, 0, 1), /* Lighter orange */
          rgba(255, 140, 0, 1)  /* Base orange */
        )
      `;
    };

    const handleMouseLeave = () => {
      navbar.style.background = "orange"; // Reset to base orange
    };

    navbar.addEventListener("mousemove", handleMouseMove);
    navbar.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      navbar.removeEventListener("mousemove", handleMouseMove);
      navbar.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar} ${darkMode ? styles.dark : ""}`}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <img className="w-34 h-14 mr-2" src={logo} alt="logo" />
          </Link>
          {/* Search Bar */}
          <form onSubmit={handleSearch} className={styles.searchBar}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit">
              <FaSearch />
            </button>
          </form>
          {/* Menu */}
          <NavbarMenu
            isActive={isActive}
            removeActive={removeActive}
            user={user}
            username={username}
            handleLogOut={handleLogOut}
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          />
          {/* Hamburger Icon for Mobile */}
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
            aria-label="Toggle navigation"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}

function NavbarMenu({ isActive, removeActive, user, username, handleLogOut, toggleDarkMode, darkMode }) {
  return (
    <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
      <li onClick={removeActive}>
        <Link to="/" className={styles.navLink}>
          <FaHome /> Home
        </Link>
      </li>
      {!user ? (
        <>
          <li onClick={removeActive}>
            <Link to="/login" className={styles.navLink}>
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li onClick={removeActive}>
            <Link to="/signup" className={styles.navLink}>
              <FaUserPlus /> Signup
            </Link>
          </li>
        </>
      ) : (
        <>
          <li onClick={removeActive}>
            <span className={styles.navLink}>
              <FaUser /> Welcome, {username}
            </span>
          </li>
          <li onClick={removeActive}>
            <button onClick={handleLogOut} className={styles.navLink}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        </>
      )}
      <li onClick={removeActive}>
        <button onClick={toggleDarkMode} className={styles.navLink}>
          {darkMode ? <FaSun /> : <FaMoon />} {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </li>
    </ul>
  );
}

export default Navbar;