import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import heroData from "../data/heroData";
import { cashback } from "../data/packagesData";
import TextPictureLeft from "../sections/TextPictureLeft";

const { packages } = heroData;

const PackagesPage = () => (
    <MainLayout>
        <>
            <Hero
                heading={packages.heading}
                text={packages.text}
                heroImg={packages.heroImg}
            ></Hero>
            <TextPictureLeft
                image={cashback.image}
                heading={cashback.heading}
                text={cashback.text}
                btnText={cashback.btnText}
            />
        </>
    </MainLayout>
)

export default PackagesPage