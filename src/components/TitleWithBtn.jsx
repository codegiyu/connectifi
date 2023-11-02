import PropTypes from "prop-types";

const TitleWithBtn = ({ heading }) => {

    return (
        <div className="w-full ">
            <h2 className="body-text-2 md:heading-3 font-medium lg:heading-2 text-center">{heading}</h2>
        </div>
    )
}

TitleWithBtn.propTypes = {
    heading: PropTypes.string,
}

export default TitleWithBtn;