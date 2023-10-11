import PropTypes from "prop-types";
import PolicySubData from "./PolicySubData";

const PolicyNumberGroup = ({ numbering, heading, text, subData }) => (
    <section className="w-full bg-white grid gap-[3.125rem]">
        <h2 className="body-text-1 md:heading-3 text-dark-19">
            {numbering + " " + heading}
        </h2>
        {text ? (
            <p className="text-grey-89 body-text-6 md:body-text-3">
                {text}
            </p>
        ) : null}
        {subData.length ? (
            <div className="grid gap-10">
                {subData.map((item, idx) => (
                    <PolicySubData
                        key={`ppnum-${idx}`}
                        numbering={item.numbering}
                        heading={item.heading}
                        text={item.text}
                    />
                ))}
            </div>
        ) : null}
    </section>
)

PolicyNumberGroup.propTypes = {
    numbering: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
    subData: PropTypes.object,
}

export default PolicyNumberGroup;