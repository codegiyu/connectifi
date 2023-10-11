import PropTypes from "prop-types";
import TimeBox from "./TimeBox";

const TimeBoxGroup = ({ hour, min, sec }) => (
    <div className="w-fit flex gap-6">
        <TimeBox time={hour} unit="h" />
        <TimeBox time={min} unit="m" />
        <TimeBox time={sec} unit="s" />
    </div>
)

TimeBoxGroup.propTypes = {
    hour: PropTypes.string,
    min: PropTypes.string,
    sec: PropTypes.string
}

export default TimeBoxGroup;