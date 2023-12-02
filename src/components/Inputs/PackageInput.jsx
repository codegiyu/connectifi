import PropTypes from "prop-types";

const PackageInput = ({ label, name, value, type = "text", changeHandler, placeholder = "" }) => {

    return (
        <label className="w-full grid gap-2">
            <span className="body-text-4 md:body-text-2 leading-5 text-white">
                {label}
            </span>
            <input
                name={name}
                value={value}
                type={type}
                placeholder={placeholder}
                className="w-full px-[12px] py-[16.75px] rounded bg-[#DAE9F2] body-text-5 md:body-text-3 placeholder:text-grey-89 text-[#3F3F3F] focus:outline-none"
                onChange={changeHandler}
            />
        </label>
    )
}

PackageInput.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    changeHandler: PropTypes.func
}

export default PackageInput;