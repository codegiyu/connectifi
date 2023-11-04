import PropTypes from "prop-types";

const AuthInput = ({ label, name, value, type = "text", changeHandler, placeholder = "" }) => {

    return (
        <label className="w-full grid gap-2">
            <span className="body-text-6 md:body-text-5 text-white">
                {label}
            </span>
            <input
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                className="w-full body-text-5 md:body-text-3 placeholder:text-grey-89 text-[#DFDFDF] p-4 bg-transparent border-[0.7px] \
                border-[#DFDFDF] rounded-lg focus:outline-none"
                onChange={changeHandler}
            />
        </label>
    )
}

AuthInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    changeHandler: PropTypes.func
}

export default AuthInput;