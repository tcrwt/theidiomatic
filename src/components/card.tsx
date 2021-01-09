import styles from './card.module.css';
import { h } from 'preact';
import { classNames } from 'shared/utils';

export interface IIdiomCardProps {
  idiom: string;
  indexInVisibleStack: number;
  indexFromEndOfList: number;
  swiped: boolean;
}

export const IdiomCard = ({ idiom, indexInVisibleStack, indexFromEndOfList, swiped }: IIdiomCardProps) => {
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
    <div
      className={classNames(
        styles.idiomCard,
        swiped ? styles.idiomCardSwiped : styles.inStack,
        indexInVisibleStack === 0 ? styles.frontOfStack : '',
      )}
      style={
        swiped
          ? {}
          : {
              transform: `
                    translate(0, ${-(3 * (indexInVisibleStack - indexInVisibleStack ** 2 / 10))}%)
                    scale(${1 - 0.07 * indexInVisibleStack})
                `,
              transformOrigin: '50% 0',
              zIndex: indexFromEndOfList,
              opacity: 1 - (indexInVisibleStack - 1) * 0.15,
            }
      }
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
};
