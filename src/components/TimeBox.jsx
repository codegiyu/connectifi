import PropTypes from "prop-types";

const TimeBox = ({ time, unit }) => (
    <div className="w-fit flex gap-2 items-center">
        <div className="w-[32px] lg:w-[52px] h-[34px] lg:h-[54px] grid place-items-center bg-bright-blue rounded-[10px]">
            <span className="body-text-6-medium md:body-text-4 text-white">{time}</span>
        </div>
        <span className="text-[#3F3F3F] font-medium body-text-3 md:text-[1.875rem] md:leading-9">
            {unit}
        </span>
    </div>
)

TimeBox.propTypes = {
    time: PropTypes.string,
    unit: PropTypes.string
}

export default TimeBox;