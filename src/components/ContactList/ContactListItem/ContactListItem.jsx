import styles from './ContactListItem.module.css';

export default function ContactListItem({ id, name, number, onDelete }) {
  return (
    <li className={styles.item}>
      <span>{name}: </span>
      <span>{number} </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}
