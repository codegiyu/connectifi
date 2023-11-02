import PropTypes from "prop-types";
import perkIcon from "../assets/perkIcon.svg";

const Perk = ({text}) => {

    return (
        <div className="w-max flex items-center gap-3">
            <img src={perkIcon} alt="" className="w-[28px] h-[28px]" />
            <span className="text-xl text-[#3f3f3f]">
                {text}
            </span>
        </div>
    )
}

Perk.propTypes = {
    text: PropTypes.string,
}

export default Perk;