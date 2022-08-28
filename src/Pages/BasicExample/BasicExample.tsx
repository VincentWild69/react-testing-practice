import React, { useEffect, useState } from 'react';
import styles from './BasicExample.module.scss';

const BasicExample = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setData('data ready');
    }, 1000);
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2>basic test</h2>
      <p>{`Its timouted text: ${data}`}</p>
      <button
        className={styles.btn}
        type="button"
      >
        click
      </button>
      <input
        className={styles.input}
        type="text"
        placeholder="type..."
      />
    </div>
  );
};

export default BasicExample;
