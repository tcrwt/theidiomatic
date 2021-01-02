import { h } from 'preact';
import { useState } from 'preact/hooks';
import styles from './app.module.css';
import { generateIdiom } from './shared/idioms';

const numCardsToShow = 5;

export const App = () => {
  const [idiomList, setIdiomList] = useState(Array.from({ length: numCardsToShow }, () => generateIdiom(true)));
  const onClick = () => {
    setIdiomList((list) => [...idiomList, generateIdiom(true)]);
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
                  key={i}
                  style={{
                    transform: `
                    translate(0, ${-(3 * (indexInVisibleStack - indexInVisibleStack ** 2 / 10))}%)
                    scale(${1 - 0.07 * indexInVisibleStack})
                `,
                    transformOrigin: '50% 0',
                    zIndex: indexFromEndOfList,
                    opacity: 1 - (indexInVisibleStack - 1) * 0.15,
                  }}
                >
                  <div className={styles.idiomTextContainer}>
                    <p className={styles.idiomText}>{idiom}</p>
                  </div>
                  <div className={styles.tweetButton}>
                    <a
                      className={styles.tweetLink}
                      href={`http://twitter.com/intent/tweet?text=${encodeURIComponent(
                        idiom + ' – theidiomatic.com @The_Idiomatic',
                      )}`}
                      target="_blank"
                      rel="noopener"
                    >
                      <span className={styles.tweetLinkLabel}>Tweet</span>
                    </a>
                  </div>
                </div>
              );
            }
            if (indexInVisibleStack < 0 && indexInVisibleStack > -4) {
              return (
                <div className={`${styles.idiomCard} ${styles.idiomCardSwiped}`} key={i}>
                  <div className={styles.idiomTextContainer}>
                    <p className={styles.idiomText}>{idiom}</p>
                  </div>
                  <div className={styles.tweetButton}>
                    <a
                      className={styles.tweetLink}
                      href={`http://twitter.com/intent/tweet?text=${encodeURIComponent(
                        idiom + ' – theidiomatic.com @The_Idiomatic',
                      )}`}
                      target="_blank"
                    >
                      <span className={styles.tweetLinkLabel}>Tweet</span>
                    </a>
                  </div>
                </div>
              );
            }
            return null;
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
