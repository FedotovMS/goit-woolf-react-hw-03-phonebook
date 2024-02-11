import ContactListItem from './ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
