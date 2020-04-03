import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import  ListWrapper  from "./ListWrapper";
import { ComponentToChange } from "./ComponentToChange";

function App() {
  const [list, setList] = useState(["red", "green", "blue"]);
  const [color, setColor] = useState("red");

  const onClick = color => {
    setColor(color);
  };
  return (
    <div class='container'>
      <div class='item header'>header</div>
      <div class='item sidebar'>sidebar</div>
      <div class='item content-1'>
        <ComponentToChange color={color}></ComponentToChange>
      </div>
      <div class='item content-2'>
        <ListWrapper list={list} onClick={onClick}></ListWrapper>
      </div>
      <div class='item content-3'>Content-3</div>
      <div class='item footer'>footer</div>
    </div>
  );
}

export default App;
