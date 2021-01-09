import { h } from 'preact';
import { useState } from 'preact/hooks';
import styles from './app.module.css';
import { generateIdiom } from 'shared/idioms';
import { IdiomCard } from 'components/card';

const numCardsToShow = 5;

export const App = () => {
  const [idiomList, setIdiomList] = useState(Array.from({ length: numCardsToShow }, () => generateIdiom(true)));
  const onClick = () => {
    gtag('event', 'generate_idiom');
    setIdiomList((list) => [...list, generateIdiom(true)]);
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
                <IdiomCard
                  idiom={idiom}
                  indexInVisibleStack={indexInVisibleStack}
                  indexFromEndOfList={indexFromEndOfList}
                  key={i}
                  swiped={false}
                />
              );
            }
            if (indexInVisibleStack < 0 && indexInVisibleStack > -4) {
              return (
                <IdiomCard
                  idiom={idiom}
                  indexInVisibleStack={indexInVisibleStack}
                  indexFromEndOfList={indexFromEndOfList}
                  key={i}
                  swiped={true}
                />
              );
            }
            return null;
          })}
        </div>
        <div className={styles.generateButtonContainer}>
          <button className={styles.generateButton} onMouseDown={onClick} onTouchStart={() => ''}>
            <div className={styles.generateButtonInner}>Next!</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
