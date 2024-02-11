import styles from './Filter.module.css';

export default function Filter({ onFilter, value }) {
  return (
    <div className={styles.filterWraper}>
      <input
        type="text"
        name="filter"
        className={styles.filterInput}
        onChange={onFilter}
        value={value}
      />
    </div>
  );
}
