import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  const compBox = {
    border: "solid black"
  }
  return (
    <div style={compBox}>
      <h1>&#x265A; &#x265A; &#x265A; &#x265A; &#x265A; CHESS VARIANT &#x265A; &#x265A; &#x265A; &#x265A; &#x265A;</h1>
      <Link to="/">Home</Link> <Link to="/rules">Rules</Link> <Link to="/pieces">Game Pieces</Link>
    </div>
  );
}

export default Header;
