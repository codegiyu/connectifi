import PropTypes from "prop-types";

const ToggleInput = ({ name, value = "", changeHandler, placeholder = "" }) => {

    return (
        <label
            className="w-full body-text-5 md:body-text-3 text-grey-89 p-4 bg-[#F2F2F2] rounded-[15px] border-none \
            focus:outline-none flex items-center justify-between gap-[10px]"
        >
            <span>{placeholder}</span>
            <input
                type="checkbox"
                name={name}
                checked={value}
                onChange={changeHandler}
                className="w-0 h-0 visibility-none"
            />
            <div className={`w-[1.875rem] h-fit p-[2px] border-[1.5px] border-[#292D32] rounded-[10px] flex ${value ? "bg-[#CCE3F2] justify-end" : "justify-start"} \
                transition-all duration-300 ease`}
            >
                <span className={`w-[10px] h-[10px] border-[1.5px] border-[#292D32] rounded-full block ${value ? "bg-[#292D32]" : ""}`}></span>
            </div>
        </label>
    )
}

ToggleInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    placeholder: PropTypes.string,
    changeHandler: PropTypes.func
}

export default ToggleInput;