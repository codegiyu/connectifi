import PropTypes from "prop-types";

const ToggleInput = ({ name, value = "", changeHandler }) => {

    return (
        <label
            className="w-fit relative"
        >
            <input
                type="checkbox"
                name={name}
                checked={value}
                onChange={changeHandler}
                className="w-0 h-0 visibility-none absolute"
            />
            <div className={`w-[5.625rem] h-fit p-[6px] rounded-[18px] flex ${value ? "bg-bright-blue justify-end" : "bg-[#17374C] justify-start"} \
                transition-all duration-[500ms] ease`}
            >
                <span 
                    className={`w-[20px] h-[20px] border-[1.5px] rounded-full block transition-all duration-[500ms] ease 
                    ${value ? "bg-[#17374C] border-[#17374C]" : "bg-bright-blue border-bright-blue"}`}
                ></span>
            </div>
        </label>
    )
}

ToggleInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    changeHandler: PropTypes.func
}

export default ToggleInput;