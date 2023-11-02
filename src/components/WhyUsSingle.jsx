import PropTypes from "prop-types";

const WhyUsSingle = ({ icon, heading, text }) => (
    <div className="w-full h-full py-12 px-8 bg-white grid gap-6 rounded-[20px]">
        <div className="py-[5px] px-[6px] w-fit bg-[#C3D8E5] rounded-[5px]">
            <div className="w-[30px] h-[30px] grid place-items-center bg-bright-blue rounded">
                <img src={icon} alt="" className="w-[30px] h-[30px]" />
            </div>
        </div>
        <div className="w-full grid gap-4">
            <h6 className="capitalize body-text-6 md:body-text-3 font-medium text-[#3F3F3F]">
                {heading}
            </h6>
            <p className="body-text-7 md:body-text-6 text-grey-89">
                {text}
            </p>
        </div>
    </div>
)

WhyUsSingle.propTypes = {
    icon: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string
}

export default WhyUsSingle;