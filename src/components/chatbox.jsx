import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function ChatBox(){
  const compBox = {
    border: "solid black"
  }
  return (
    <div>
    <h1 style={compBox}>YOU MADE IT!  CHATBOX</h1>
    </div>
  );
}

export default ChatBox;
