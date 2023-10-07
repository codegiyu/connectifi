import PropTypes from "prop-types";

const StatsSnippet = ({ heading, value }) => {

    return (
        <div className="w-max grid gap-4 px-5 border-r border-[#ececec] [&:nth-of-type(1)]:pl-0 [&:nth-last-of-type(1)]:pr-0 
            [&:nth-last-of-type(1)]:border-none"
        >
            <h2 className="body-text-2 md:heading-2 text-dark-19">
                {heading}
            </h2>
            <p className="body-text-6 md:body-text-4 text-grey-89">
                {value}
            </p>
        </div>
    )
}

StatsSnippet.propTypes = {
    heading: PropTypes.string,
    value: PropTypes.string
}

export default StatsSnippet;