import PropTypes from "prop-types";

const ServiceSingle = ({ icon, heading, text }) => (
    <div className="w-full sm:w-[490px] h-full pt-7 pb-8 px-8 bg-white grid gap-5 rounded-[20px] border border-[#AFAFAF] shadow-service">
        <div className="w-[42px] lg:w-[52px] h-[44px] lg:h-[54px] grid place-items-center bg-bright-blue rounded-[10px]">
            <img src={icon} alt="" className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h6 className="capitalize font-medium body-text-3 md:text-[1.875rem] md:leading-9 text-dark-19">
            {heading}
        </h6>
        <p className="body-text-6 md:body-text-5 capitalize text-[#585858]">
            {text}
        </p>
    </div>
)

ServiceSingle.propTypes = {
    icon: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string
}

export default ServiceSingle;