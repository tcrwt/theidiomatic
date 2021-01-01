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
    const newIdiom = generateIdiom();
    console.log("newIdiom", newIdiom);
    setIdiomList((list) => [...idiomList, newIdiom]);
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
        {idiomList.map((idiom, i) => {
          const indexFromEndOfList = idiomList.length - i;
          const indexInVisibleStack = numCardsToShow - indexFromEndOfList;
          if (indexInVisibleStack >= 0) {
            return (
              <div
                className="idiomCard inStack"
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
                &ldquo;{idiom}&rdquo;
              </div>
            );
          }
          if (indexInVisibleStack < 0 && indexInVisibleStack > -4) {
            return (
              <div className="idiomCard idiomCardSwiped" key={i}>
                &ldquo;{idiom}&rdquo;
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default App;
