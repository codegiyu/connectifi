import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Mousewheel } from "swiper/modules";
import { topDeals } from "../../data/productsData";
import TopDealCard from "../../components/TopDealCard";
import 'swiper/css';
import 'swiper/css/bundle';

const TopDeals = () => {

    return (
        <section id="top-deals" className="w-full mb-[6.25rem] bg-white">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: true }}
                mousewheel={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    scale: 0.85,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                modules={[EffectCoverflow, Mousewheel, Autoplay]}
                className="mySwiper"
            >
                {topDeals.map((item, idx) => (
                    <SwiperSlide key={`tdeal-${idx}`} className="w-fit rounded-[15px] m-0">
                        {({ isActive, isNext, isPrev }) => (
                            <TopDealCard image={item} index={idx - 1} isActive={isActive} isNext={isNext} isPrev={isPrev} />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default TopDeals;