import PropTypes from 'prop-types';

const RoundedButton = ({
    type = 'button',
    styles = {},
    clickHandler,
    text,
    textStyles = {},
    rightIcon = "",
    ...props
}) => {

    return (
        <button
            type={type}
            onClick={clickHandler}
            className='bg-bright-blue px-4 md:px-[1.875rem] py-[0.625rem] md:py-4 rounded-[1.875rem] flex gap-2 items-center justify-center'
            style={styles}
            {...props}
        >
            <span className='text-base md:text-xl leading-4 md:leading-5 lg:font-semibold text-white' style={textStyles}>
                {text}
            </span>
            {rightIcon ? (
                <img src={rightIcon} alt="" className='w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6' />
            ) : null}
        </button>
    )
}

RoundedButton.propTypes = {
    type: PropTypes.string,
    styles: PropTypes.object,
    clickHandler: PropTypes.func,
    text: PropTypes.string,
    textStyles: PropTypes.object,
    rightIcon: PropTypes.string
}

export default RoundedButton