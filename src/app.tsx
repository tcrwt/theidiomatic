import { h } from "preact";
import { useState } from "preact/hooks";
import "./app.css";
import { generateIdiom } from "./shared/idioms";

export const App = () => {
  const [idiom, setIdiom] = useState(generateIdiom());
  const onClick = () => {
    setIdiom(generateIdiom());
  };

  return (
    <div className="app">
      <header className="header">
        <h1>The Idiomatic</h1>
      </header>
      <button className="generate" onClick={onClick}>
        Generate!
      </button>
      <div className="cardsContainer">
        <div className="idiomCard">&ldquo;{idiom}&rdquo;</div>
        <div className="idiomCard">&ldquo;{idiom}&rdquo;</div>
        <div className="idiomCard">&ldquo;{idiom}&rdquo;</div>
      </div>
    </div>
  );
};

export default App;
