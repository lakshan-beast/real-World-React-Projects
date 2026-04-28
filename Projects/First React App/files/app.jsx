import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./app.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="{viteLogo}" alt="Vite Logo" className="logo" />
        </a>
        <a href="http://rect.dev" target="_blank" rel="noopener noreferrer">
          <img src="{reactLogo}" alt="React Logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card" onClick={() => setCount((count) => count + 1)}>
        <button>Count is {count}</button>
        <p>
          Edit <code>scr/app.jsx</code> and save to rest HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React Logos to Learn more
      </p>
    </>
  );
}
export default App;
