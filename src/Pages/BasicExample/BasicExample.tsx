import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import styles from './BasicExample.module.scss';
import Button from '../../components/Button/Button';

const BasicExample = () => {
  const [data, setData] = useState<string>('');
  const [elActive, setElActive] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');
  const timeout = useRef<NodeJS.Timeout | null>(null);

  const btnClick = () => {
    setElActive(state => !state);
  };

  useEffect(() => {
    timeout.current = setInterval(() => {
      setData(String(Math.random().toFixed(2)));
    }, 1000);
    
    return () => {
      if (timeout.current) {
        clearInterval(timeout.current);
      }
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>basic test</h2>
      <p>
        Its timouted text:&nbsp;
        <span className={clsx({
          [styles.redText]: true,
          [styles.orangeText]: elActive
        })}
        >
          {data}
        </span>
      </p>
      <div>
        <Button
          className={styles.btn}
          onClick={btnClick}
        >
          click
        </Button>
        {elActive && <p style={{backgroundColor: 'khaki'}}>You see active element</p>}
      </div>
      <input
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => setInputValue(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="type..."
      />
      <Button type="submit">custom button</Button>
      <div style={{border: '1px solid grey'}}>
        <Button clear>clear button</Button>
      </div>
    </div>
  );
};

export default BasicExample;
