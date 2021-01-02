import { h } from 'preact';
import { useState } from 'preact/hooks';
import styles from './app.module.css';
import { generateIdiom } from './shared/idioms';

const numCardsToShow = 5;

export const App = () => {
  const [idiomList, setIdiomList] = useState(Array.from({ length: numCardsToShow }, generateIdiom));
  const onClick = () => {
    setIdiomList((list) => [...idiomList, generateIdiom()]);
  };

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>The Idiomatic</h1>
      </header>
      <div className={styles.cardsAndButtonContainer}>
        <div className={styles.cardsContainer}>
          {idiomList.map((idiom, i) => {
            const indexFromEndOfList = idiomList.length - i;
            const indexInVisibleStack = numCardsToShow - indexFromEndOfList;
            if (indexInVisibleStack >= 0) {
              return (
                <div
                  className={`${styles.idiomCard} ${styles.inStack}`}
                  onClick={onClick}
                  key={i}
                  style={{
                    transform: `
                    translate(0, ${-5 * indexInVisibleStack}%)
                    scale(${1 - 0.08 * indexInVisibleStack})
                `,
                    zIndex: indexFromEndOfList,
                    opacity: 1 - (indexInVisibleStack - 1) * 0.2,
                  }}
                >
                  <p className={styles.idiomCardText}>&ldquo;{idiom}&rdquo;</p>
                </div>
              );
            }
            if (indexInVisibleStack < 0 && indexInVisibleStack > -4) {
              return (
                <div className={`${styles.idiomCard} ${styles.idiomCardSwiped}`} key={i}>
                  <p className={styles.idiomCardText}>&ldquo;{idiom}&rdquo;</p>
                </div>
              );
            }
          })}
        </div>
        <div className={styles.generateButtonContainer}>
          <button className={styles.generateButton} onClick={onClick}>
            <span className={styles.generateButtonInner}>Generate!</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
