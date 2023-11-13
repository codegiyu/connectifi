import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FooterLink = ({ text, link }) => {

    return (
        <Link to={link} className="text-decoration-none text-grey-d9">
            <span className="body-text-6 md:body-text-5 leading-5 hover:text-white">{text}</span>
        </Link>
    )
}

FooterLink.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string
}

export default FooterLink