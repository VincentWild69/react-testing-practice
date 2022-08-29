import React, { useEffect, useRef, useState } from 'react';
import styles from './BasicExample.module.scss';

const BasicExample = () => {
  const [data, setData] = useState<string>('');
  const [elActive, setElActive] = useState<boolean>(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const btnClick = () => {
    setElActive(state => !state);
  };

  useEffect(() => {
    timeout.current = setTimeout(() => {
      setData('data ready');
    }, 1000);
    
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>basic test</h2>
      <p>{`Its timouted text: ${data}`}</p>
      <div>
        <button
          className={styles.btn}
          type="button"
          onClick={btnClick}
        >
          click
        </button>
        {elActive && <p style={{backgroundColor: 'khaki'}}>You see active element</p>}
      </div>
      <input
        className={styles.input}
        type="text"
        placeholder="type..."
      />
    </div>
  );
};

export default BasicExample;
