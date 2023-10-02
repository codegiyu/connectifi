import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SocialMediaIcon = ({ icon, link }) => {

    return (
        <Link to={link} className="">
            <div className="w-[45px] h-[45px] rounded-full bg-bright-blue grid place-items-center">
                <img src={icon} alt="" className="" />
            </div>
        </Link>
    )
}

SocialMediaIcon.propTypes = {
    icon: PropTypes.string,
    link: PropTypes.string
}

export default SocialMediaIcon