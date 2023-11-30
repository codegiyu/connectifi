import PropTypes from "prop-types";

const Textarea = ({ label, name, value, changeHandler, rows = 3, ...props }) => {

    return (
        <label className="w-full grid gap-4">
            <span className="body-text-4 md:body-text-2 text-grey-89">
                {label}
            </span>
            <textarea
                name={name}
                value={value}
                rows={rows}
                className="w-full body-text-5 md:body-text-3 placeholder:text-grey-89 text-dark-19 p-4 bg-white border \
                border-[#AEAEAE] rounded-[10px] focus:outline-none"
                onChange={changeHandler}
                {...props}
            >

            </textarea>
        </label>
    )
}

Textarea.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    rows: PropTypes.number,
    changeHandler: PropTypes.func
}

export default Textarea;