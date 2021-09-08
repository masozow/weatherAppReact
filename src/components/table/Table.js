import Card from "../layout/Card";
import TableRow from "./TableRow";
import styles from './Table.module.css';

function Table(props) {
    return (
        <Card>
            <table className={styles.table} rules='none'>
                <thead>
                    <tr>
                        <th>
                            Hour
                        </th>
                        <th>
                            Temperature
                        </th>
                        <th>
                            Feels Like
                        </th>
                        <th colSpan='2'>
                            Weather
                        </th>
                        <th>
                            Humidity
                        </th>
                        <th>
                            Clouds
                        </th>

                    </tr>
                </thead>
                <tbody className={styles.tableBody}>
                    {props.data.map((item, idx) => {
                        return <TableRow key={idx} {...item} />
                    })}
                </tbody>
            </table>
        </Card>
    );
}

export default Table;