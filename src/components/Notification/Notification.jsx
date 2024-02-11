import styles from './Notification.module.css';
const Notification = ({ message }) => (
  <p className={styles.notification}>{message}</p>
);
export default Notification;
