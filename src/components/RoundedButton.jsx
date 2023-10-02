import PropTypes from 'prop-types';

const RoundedButton = ({
    type = 'button',
    styles = {},
    clickHandler,
    text,
    textStyles = {},
    ...props
}) => {

    const stylesObj = Object.assign({ background: '#049BFF', borderRadius: '30px', padding: '16px 30px' }, styles);
    const textStylesObj = Object.assign({ fontSize: "20px", color: "#fff", lineHeight: "100%", fontWeight: "600" }, textStyles)

    return (
        <button
            type={type}
            onClick={clickHandler}
            style={stylesObj}
            {...props}
        >
            <span style={textStylesObj}>
                {text}
            </span>
        </button>
    )
}

RoundedButton.propTypes = {
    type: PropTypes.string,
    styles: PropTypes.object,
    clickHandler: PropTypes.func,
    text: PropTypes.string,
    textStyles: PropTypes.object
}

export default RoundedButton