import React from 'react';
import '../App.css';

function Sidebar({ darkMode }) {
  return (
    <div>
      <h5 className="mb-4">📂 Sidebar</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#">🏠 Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">📝 TextForm</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">📸 Hero</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;