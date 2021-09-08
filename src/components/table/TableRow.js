import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconNameSelection } from "../../functionality/IconNameSelection";
import styles from './TableRow.module.css';
function TableRow(props) {
    return (
        <tr className={styles.row}>
            <td>
                {props.time}
            </td>
            <td>
                {props.temperature}
            </td>
            <td>
                {props.feelsLike}
            </td>
            <td>
                {<FontAwesomeIcon icon={iconNameSelection(props.icon)} style={{ fontSize: '1rem' }} />}
            </td>
            <td>
                {props.description}
            </td>
            <td>
                {props.humidity}
            </td>
            <td>
                {props.clouds}
            </td>
        </tr>
    );
}
export default TableRow;