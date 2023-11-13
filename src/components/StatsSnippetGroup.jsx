import PropTypes from "prop-types";
import StatsSnippet from "./StatsSnippet";

const StatsSnippetGroup = ({ arr }) => (
    <div className="w-max flex ">
        {arr.map((item, idx) => <StatsSnippet key={`stat-${idx}`} heading={item.heading} value={item.value} />)}
    </div>
)

StatsSnippetGroup.propTypes = {
    arr: PropTypes.array
}

export default StatsSnippetGroup