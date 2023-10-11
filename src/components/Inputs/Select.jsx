import PropTypes from "prop-types";

const Select = ({ name, value = "", optionsArray, changeHandler, placeholder = "" }) => {

    return (
        <select
            name={name}
            value={value}
            className="w-full body-text-5 md:body-text-3 text-grey-89 p-4 bg-[#F2F2F2] rounded-[15px] border-none focus:outline-none"
            onChange={changeHandler}
        >
            {placeholder ? (
                <option value="" disabled>{placeholder}</option>
            ) : null}
            {optionsArray.map((item, idx) => (
                <option key={`${name}-opt-${idx}`} value={item.value} className="text-dark-19">{item.text}</option>
            ))}
        </select>
    )
}

Select.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    optionsArray: PropTypes.array,
    changeHandler: PropTypes.func
}

export default Select;