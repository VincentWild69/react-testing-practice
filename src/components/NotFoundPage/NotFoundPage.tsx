import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
      <div className={styles.nfpContainer}>
        <div className={styles.nfpContent}>
          <div>Page not exist</div>
          <div>&#128528;</div>
        </div>
      </div>
  );
}

export default NotFoundPage;