import PropTypes from "prop-types";

const ContactDetailsBlock = ({ icon, heading, children }) => {

    return (
        <div className="w-full h-full bg-[#F6F6F6] py-6 px-7 grid items-center gap-6 rounded-[20px]">
            <img src={icon} alt="" className="w-[30px]" />
            <div className="w-full grid gap-4">
                <h3 className="body-text-6 md:body-text-3 font-medium text-dark-19">
                    {heading}
                </h3>
                {children}
            </div>
        </div>
    )
}

ContactDetailsBlock.propTypes = {
    icon: PropTypes.string,
    heading: PropTypes.string,
    children: PropTypes.element,
}

export default ContactDetailsBlock;