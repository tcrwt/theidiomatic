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

  // console.log('containerRef', containerRef?.current && containerRef.current.scrollHeight);
  // console.log('idiomRef', idiomRef?.current && idiomRef?.current?.scrollHeight);
  useEffect(() => {
    console.log('idiomRef?.current', idiomRef?.current, idiomRef?.current.scrollHeight);
    if (containerRef?.current !== null) {
      console.log('containerRef.current', containerRef.current, containerRef.current.scrollHeight);
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
