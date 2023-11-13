import PropTypes from "prop-types";
import ReviewSingle from "./ReviewSingle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel } from "swiper/modules";

const ReviewGroup = ({ arr }) => {

    return (
        <section className="w-full flex flex-nowrap flex-none h-full">
            <section className="flex flex-nowrap items-stretch gap-9 2xl:gap-14 2xl:justify-center animate-marquee">
            {/* <Swiper
                // loop={true}
                slidesPerView={"auto"}
                slideToClickedSlide={true}
                // autoplay={{ delay: 6000, disableOnInteraction: true }}
                pagination={false}
                mousewheel={true}
                spaceBetween={36}
                modules={[Autoplay, Mousewheel]}
            > */}
                {arr.map((item, idx) => (
                    // <SwiperSlide
                        // key={`review-${idx}`}
                    //     className="w-fit"
                    // >
                        <ReviewSingle
                            key={`review-${idx}`}
                            text={item.text}
                            image={item.image}
                            name={item.name}
                            title={item.title}
                        />
                    // </SwiperSlide>
                ))}
            {/* </Swiper>  */}
            </section>
            <div className="w-4 sm:w-12 lg:w-16 xl:w-[6.25rem] 2xl:w-40 bg-transparent h-full flex-none"></div>
        </section>
    )
}

ReviewGroup.propTypes = {
    arr: PropTypes.array
}

export default ReviewGroup;