import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
            
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className="user-avatar">User Avatar</div>
      </nav>
    </div>
  );
};

export default Navbar;
