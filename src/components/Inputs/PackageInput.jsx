import PropTypes from "prop-types";

const PackageInput = ({ name, value = "", type = "text", changeHandler, placeholder = "" }) => {

    return (
        <input
            name={name}
            value={value}
            type={type}
            placeholder={placeholder}
            className="w-full body-text-5 md:body-text-3 placeholder:text-grey-89 text-dark-19 p-4 bg-[#F2F2F2] rounded-[15px] border-none focus:outline-none"
            onChange={changeHandler}
        />
    )
}

PackageInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    changeHandler: PropTypes.func
}

export default PackageInput;