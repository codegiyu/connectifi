import PropTypes from "prop-types";

const PolicySubData = ({ numbering, heading, text }) => (
    <div className="body-text-6 md:body-text-3">
        <span className="text-[#585858] font-bold">
            {numbering + " " + heading}
        </span>
        <span> </span>
        <span className="text-grey-89">
            {text}
        </span>
    </div>
)

PolicySubData.propTypes = {
    numbering: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
}

export default PolicySubData;