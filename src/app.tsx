import { h } from 'preact';
import { useState } from 'preact/hooks';
import styles from './app.module.css';
import { generateIdiom } from './shared/idioms';

const numCardsToShow = 5;

// TODO: split this into components. Currently it's a single terrible mess
//   but hey it works
export const App = () => {
  const [idiomList, setIdiomList] = useState(Array.from({ length: numCardsToShow }, () => generateIdiom(true)));
  const onClick = () => {
    gtag('event', 'generate_idiom');
    setIdiomList((list) => [...idiomList, generateIdiom(true)]);
  };

  const onClickShare = (idiomText: string) => {
    if (navigator.share) {
      navigator
        .share({
          text: idiomText,
          title: 'The Idiomatic',
          url: 'https://theidiomatic.com',
        })
        .then(() => {
          gtag('event', 'share', {
            content_type: 'idiom',
            method: 'webshare',
          });
        })
        .catch();
    }
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
                    {navigator.share && (
                      <a className={`${styles.smallShare} ${styles.nativeShare}`} onClick={() => onClickShare(idiom)}>
                        <span className={styles.tweetLinkLabel}>Share</span>
                      </a>
                    )}
                    <a
                      className={`${styles.smallShare} ${styles.tweetLink}`}
                      href={`http://twitter.com/intent/tweet?text=${encodeURIComponent(
                        idiom + ' – theidiomatic.com @The_Idiomatic',
                      )}`}
                      target="_blank"
                      rel="noopener"
                      onClick={() => {
                        gtag('event', 'share', {
                          content_type: 'idiom',
                          method: 'Twitter',
                        });
                      }}
                    >
                      Tweet
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
                    {navigator.share && (
                      <a className={`${styles.smallShare} ${styles.nativeShare}`} onClick={() => onClickShare(idiom)}>
                        <span className={styles.tweetLinkLabel}>Share</span>
                      </a>
                    )}
                    <a
                      className={`${styles.smallShare} ${styles.tweetLink}`}
                      href={`http://twitter.com/intent/tweet?text=${encodeURIComponent(
                        idiom + ' – theidiomatic.com @The_Idiomatic',
                      )}`}
                      target="_blank"
                      rel="noopener"
                      onClick={() => {
                        gtag('event', 'share', {
                          content_type: 'idiom',
                          method: 'Twitter',
                        });
                      }}
                    >
                      Tweet
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
