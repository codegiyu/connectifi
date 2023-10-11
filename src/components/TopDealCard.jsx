import PropTypes from "prop-types";
// import { SwiperSlide } from "swiper/react";

const TopDealCard = ({ image, isActive, isNext, isPrev }) => {

    return (
        <div
            className="w-[250px] sm:w-[320px] lg:w-[380px] aspect-[0.88] grid place-items-center p-7 rounded-[15px]"
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