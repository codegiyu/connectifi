import MainLayout from "../layouts/MainLayout";
import HomeHero from "../sections/HomeHero";
import Clients from "../sections/HomePage/Clients";
import { feature1, feature2 } from "../data/homeData";
import TextPictureLeft from "../sections/TextPictureLeft";
import TextPictureRight from "../sections/TextPictureRight";
import Reviews from "../sections/HomePage/Reviews";
import Cta from "../sections/Cta";
import GoToTop from "../hooks/GoToTop";
import WhyChooseUs from "../sections/HomePage/WhyChooseUs";
import Team from "../sections/HomePage/Team";
import Demo from "../sections/HomePage/Demo";

const HomePage = () => {

    return (
        <MainLayout hasHeader={false}>
            <>
                <GoToTop />
                <HomeHero />
                <Clients />
                <WhyChooseUs />
                <section className="bg-white">
                    <TextPictureLeft
                        image={feature1.image}
                        heading={feature1.heading}
                        text={feature1.text}
                        btnText={feature1.btnText}
                        link="/packages#compare-packages"
                    />
                    <div className="w-full flex justify-center py-5 md:py-10 lg:py-0">
                        <div className="w-[70%] h-[2px] bg-[#CBE1F053] blur-[2px]"></div>
                    </div>
                    <TextPictureRight
                        image={feature2.image}
                        heading={feature2.heading}
                        text={feature2.text}
                        btnText={feature2.btnText}
                        link="/products-and-services#available-products"
                    />
                </section>
                <Reviews />
                <Demo />
                <Team />
                <Cta />
            </>
        </MainLayout>
    )
}

export default HomePage