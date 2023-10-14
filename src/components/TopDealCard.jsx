import PropTypes from "prop-types";
// import { SwiperSlide } from "swiper/react";

const TopDealCard = ({ image, isActive, isNext, isPrev }) => {

    return (
        <div
            className={`aspect-[0.88] grid place-items-center p-7 rounded-[15px] 
            ${
                // isActive ? 
                "w-[250px] sm:w-[320px] lg:w-[380px]"
                // : isNext || isPrev ? "w-[215px] my-[17.5px] sm:w-[285px] lg:w-[320px] lg:my-[30px]"
                // : "w-[160px] my-[45px] sm:w-[210px] sm:my-[55px] lg:w-[240px] lg:my-[70px]"
                }
            `}
            style={{ backgroundColor: isActive ? "#049BFF" : isNext || isPrev ? "#B8DEF8" : "#CCE3F2" }}
        >
            <img src={image} alt="" className="w-full" />
        </div>
    )
}

TopDealCard.propTypes = {
    image: PropTypes.string,
    isActive: PropTypes.bool,
    isNext: PropTypes.bool,
    isPrev: PropTypes.bool,
}

export default TopDealCard;