import TableRow from "./TableRow";
import styles from './Table.module.css';

function Table(props) {
    return (
        <div className={styles.table}>
            {props.data.map((item, idx) => {
                return <TableRow key={idx} {...item} />
            })}
        </div>
    );
}

export default Table;