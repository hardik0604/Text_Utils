import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  // Update body class when darkMode changes
  useEffect(() => {
    document.body.className = darkMode
      ? 'bg-dark text-light'
      : 'bg-light text-dark';
  }, [darkMode]);

  return (
    <>
      {/* Navbar */}
      <Navbar darkMode={darkMode} />

      <div className="container-fluid p-0 m-0">
        <div className="row g-0 min-vh-100">

          {/* Sidebar */}
          <div
            className={`col-md-2 sidebar ${
              sidebarOpen ? 'active' : ''
            } ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'} border-end`}
          >
            <Sidebar darkMode={darkMode} />
          </div>

          {/* Main Content */}
          <div className="col-md-10">
            {/* Top Controls */}
            <div className="d-flex justify-content-between align-items-center p-3">
              {/* Sidebar Toggle (mobile only) */}
              <button
                onClick={toggleSidebar}
                className="btn btn-sm btn-outline-secondary d-md-none"
              >
                ☰ Menu
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="btn btn-sm btn-outline-primary"
              >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>

            {/* TextForm Section */}
            <div className="container mb-4">
              <div className="card p-4 shadow-sm">
                <TextForm darkMode={darkMode} />
              </div>
            </div>

            {/* Hero Section */}
            <div className="container mb-4">
              <div className="card p-4 shadow-sm">
                <Hero darkMode={darkMode} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
