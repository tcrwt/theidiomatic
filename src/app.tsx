import { h } from "preact";
import { useState } from "preact/hooks";
import "./app.css";
import { generateIdiom } from "./shared/idioms";

const numCardsToShow = 5;

export const App = () => {
  const [idiomList, setIdiomList] = useState(
    Array.from({ length: numCardsToShow }, generateIdiom)
  );
  const onClick = () => {
    setIdiomList((list) => [...idiomList, generateIdiom()]);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>The Idiomatic</h1>
      </header>
      <div className="cardsContainer">
        {idiomList.map((idiom, i) => {
          const indexFromEndOfList = idiomList.length - i;
          const indexInVisibleStack = numCardsToShow - indexFromEndOfList;
          if (indexInVisibleStack >= 0) {
            return (
              <div
                className="idiomCard inStack"
                onClick={onClick}
                key={i}
                style={{
                  //  TODO: this moves everything down a lot, rather than up
                  //    Really we should do (-20 * (len-i)) so the main card is central
                  transform: `
                    translate(0, ${-15 * indexInVisibleStack}px)
                    scale(${1 - 0.06 * indexInVisibleStack})
                `,
                  zIndex: indexFromEndOfList,
                  opacity: 1 - (indexInVisibleStack - 1) * 0.2,
                }}
              >
                <p className="idiomCardText">&ldquo;{idiom}&rdquo;</p>
              </div>
            );
          }
          if (indexInVisibleStack < 0 && indexInVisibleStack > -4) {
            return (
              <div className="idiomCard idiomCardSwiped" key={i}>
                <p className="idiomCardText">&ldquo;{idiom}&rdquo;</p>
              </div>
            );
          }
        })}
      </div>
      <div>
        <button className="generate" onClick={onClick}>
          Generate!
        </button>
      </div>
    </div>
  );
};

export default App;
