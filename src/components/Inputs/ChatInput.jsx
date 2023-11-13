import PropTypes from "prop-types";

const ChatInput = ({ name, value, type = "text", changeHandler, placeholder = "" }) => {

    return (
        <input
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            className="w-full text-[14px] leading-[20px] placeholder:text-grey-89 text-[#3F3F3F] p-[10px] bg-[#EAEAEA] rounded-[45px] focus:outline-none"
            onChange={changeHandler}
        />
    )
}

ChatInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    changeHandler: PropTypes.func
}

export default ChatInput;