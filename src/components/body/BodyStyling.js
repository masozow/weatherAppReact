function BodyStyling(props) {
    return (
        <style>{`body {background-color:${props.themeSelector ? '#E9ECEF' : '#1C1C27'};transition: ease-in 0.2s;}`}</style>
    );
}

export default BodyStyling;