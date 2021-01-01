import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import './App.css';
import { generateIdiom } from './shared/idioms';

function App() {
  const [idiom, setIdiom] = useState(generateIdiom());
  const containerRef = useRef<HTMLDivElement>(null);
  const idiomRef = useRef<HTMLParagraphElement>(null);
  const onClick = () => {
    setIdiom(generateIdiom());
  };

  useEffect(() => {
    if (containerRef?.current !== null) {
      containerRef.current.style.height = idiomRef?.current?.scrollHeight.toString() + 'px';
    }
  }, [idiom, idiomRef?.current?.scrollHeight]);
  return (
    <div className="app">
      <header className="header">
        <h1>The Idiomatic</h1>
      </header>
      <button className="generate" onClick={onClick}>
        Generate!
      </button>
      <div className="idiomCard" ref={containerRef}>
        <p className="idiom" ref={idiomRef}>
          {idiom}
        </p>
      </div>
    </div>
  );
}

export default App;
