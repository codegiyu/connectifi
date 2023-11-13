import PropTypes from 'prop-types';

const RegButton = ({
    type = 'button',
    styles = {},
    clickHandler,
    text,
    textStyles = {},
    ...props
}) => {

    return (
        <button
            type={type}
            onClick={clickHandler}
            className='w-full bg-bright-blue p-5 md:p-6 rounded-[15px]'
            style={styles}
            {...props}
        >
            <span className='font-medium body-text-3 md:text-[1.875rem] md:leading-9 text-white' style={textStyles}>
                {text}
            </span>
        </button>
    )
}

RegButton.propTypes = {
    type: PropTypes.string,
    styles: PropTypes.object,
    clickHandler: PropTypes.func,
    text: PropTypes.string,
    textStyles: PropTypes.object
}

export default RegButton