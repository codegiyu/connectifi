import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { topDeals } from "../../data/productsData";
import TopDealCard from "../../components/TopDealCard";
import 'swiper/css';
import 'swiper/css/effect-coverflow';

const TopDeals = () => {

    return (
        <section className="w-full mb-[6.25rem] bg-white">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                // autoplay={{ delay: 5, disableOnInteraction: true }}
                mousewheel={true}
                spaceBetween={20}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 0,
                    scale: 1,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={false}
                modules={[EffectCoverflow]}
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