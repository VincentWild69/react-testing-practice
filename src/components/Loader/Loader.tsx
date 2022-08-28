import React from 'react';
import styles from './Loader.module.scss';
import { ILoaderProps } from './interfaces/ILoaderProps';

const Loader: React.FC<ILoaderProps> = ({boxHeight = '50px', size = '50px'}) => {
  return (
    <div
      className={styles.loaderWrapper}
      data-testid="loader"
      style={{
        height: `${boxHeight}`,
        minHeight: `${size}`
      }}
    >
      <div className={styles.loaderBody}>
        <svg
          stroke="#4fc56b"
          viewBox="0 0 40 40"
          className={styles.loaderSvg}
          style={{
            height: `${size}`,
            width: `${size}`
          }}
        >
          <g
            transform="translate(2 2)"
            strokeWidth={3}
            fill="none"
            fillRule="evenodd"
          >
            <circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
            <path d="M36 18c0-9.94-8.06-18-18-18">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 18 18"
                to="360 18 18"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Loader;
