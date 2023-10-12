import PropTypes from "prop-types";

const Input = ({ label, name, value, type = "text", changeHandler, placeholder = "" }) => {

    return (
        <label className="w-full grid gap-4">
            <span className="body-text-4 md:body-text-2 text-grey-89">
                {label}
            </span>
            <input
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                className="w-full body-text-5 md:body-text-3 placeholder:text-grey-89 text-dark-19 p-4 bg-white border \
                border-[#AEAEAE] rounded-[10px] focus:outline-none"
                onChange={changeHandler}
            />
        </label>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    changeHandler: PropTypes.func
}

export default Input;