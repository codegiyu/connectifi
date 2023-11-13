import PropTypes from "prop-types";

const TeamCard = ({ name, role, image, smallText }) => {

    return (
        <div className="w-full md:w-[320px] grid gap-4">
            <img src={image} alt="" className="w-full" />
            <div className="">
                <h3 
                    className={`${smallText ? "text-2xl md:text-[24px] tracking-[1.2px]" : "text-3xl md:text-[30px] tracking-[1.5px]"} 
                    leading-[30px] md:leading-[42px] font-bold text-[#3F3F3F]`}
                >
                    { name }
                </h3>
                <p className="text-lg md:text-lg leading-5 md:leading-[25px] tracking-[0.9px] text-grey-89">
                    { role }
                </p>
            </div>
        </div>
    )
}

TeamCard.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    image: PropTypes.string,
    smallText: PropTypes.bool,
}

export default TeamCard;