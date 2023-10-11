import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import heroData from "../data/heroData";
import { cashback } from "../data/packagesData";
import TextPictureLeft from "../sections/TextPictureLeft";
import GoToTop from "../hooks/GoToTop";
import DataBundles from "../sections/Packages/DataBundles";
import ComparePackages from "../sections/Packages/ComparePackages";

const { packages } = heroData;

const PackagesPage = () => (
    <MainLayout>
        <>
            <GoToTop />
            <Hero
                heading={packages.heading}
                text={packages.text}
                heroImg={packages.heroImg}
                headingWidth={packages.headingWidth}
                textWidth={packages.textWidth}
            ></Hero>
            <DataBundles />
            <ComparePackages />
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