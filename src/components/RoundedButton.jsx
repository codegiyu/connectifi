import PropTypes from 'prop-types';

const RoundedButton = ({
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
            className='bg-bright-blue px-[1.875rem] py-4 rounded-[1.875rem]'
            style={styles}
            {...props}
        >
            <span className='text-base md:text-xl leading-4 md:leading-5 lg:font-semibold text-white' style={textStyles}>
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