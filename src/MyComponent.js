import React from "react";
import "./mycomponent.css";
import { MyContext } from "./MyContext";
import { useContext } from "react";
function MyComponent() {
  const { text, setText } = useContext(MyContext);
  return (
    <div>
      <header class='header'>
        <h1 class='title'>A Good Joke</h1>
      </header>

      <main class='content'>
        <h1 className='title-joke'> {text}</h1>
        <button
          className='click-button'
          onClick={() => setText("your Life is a joke 😜 ")}
        >
          CLICK ME FOR A GOOD JOKE
        </button>
      </main>

      <footer class='footer'>
        <p>&copy; 2023 A Good Joke. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default MyComponent;
