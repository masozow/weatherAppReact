function Li(props) {
    return (
        <li onClick={props.handleClick}>
            {props.children}
        </li>
    );
}

export default Li;