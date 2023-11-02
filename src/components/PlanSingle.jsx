import PropTypes from "prop-types";
import circle from "../assets/down.svg";
import Perk from "./Perk";

const PlanSingle = ({icon, heading, data, price, duration, text, perks}) => {

    return (
        <div className="w-full grid gap-4 justify-center">
            <div className="icon-wrap w-[169px] aspect-square relative">
                <img src={circle} alt="" className="absolute top-0 left-0 w-full h-full object-cover z-[1]" />
                <img src={icon} alt="" className="absolute top-0 left-0 w-[169px] h-[169px] object-cover z-[2]" />
            </div>
            <h3 className="body-text-1 md:heading-3 text-[#3F3F3F] mt-2 text-center">
                { heading }
            </h3>
            <p className="w-max flex gap-1 items-end text-[#3F3F3F] text-center">
                <span className="text-[27px] leading-8">
                    {`${data}GB`}
                </span>
                <span className="text-sm">
                    {`N${price}/ ${duration}`}
                </span>
            </p>
            <p className="text-[#667085] text-lg leading-[25px]">
                {text}
            </p>

            <div className="w-max mt-[26px] grid gap-[13px]">
                {perks.map((item, idx) => <Perk key={idx} text={item} />)}
            </div>
        </div>
    )
}

PlanSingle.propTypes = {
    icon: PropTypes.string, 
    heading: PropTypes.string, 
    data: PropTypes.string, 
    price: PropTypes.string, 
    duration: PropTypes.string, 
    text: PropTypes.string, 
    perks: PropTypes.array,
}

export default PlanSingle;