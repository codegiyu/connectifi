import MainLayout from "../layouts/MainLayout";
import heroData from "../data/heroData";
import { cashback } from "../data/packagesData";
import TextPictureLeft from "../sections/TextPictureLeft";
import GoToTop from "../hooks/GoToTop";
import DataBundles from "../sections/Packages/DataBundles";
import ComparePackages from "../sections/Packages/ComparePackages";
import Cta from "../sections/Cta";
import HeroNoImage from "../components/HeroNoImage";
import Plans from "../sections/Packages/Plans";

const { packages } = heroData;

const PackagesPage = () => (
    <MainLayout>
        <>
            <GoToTop />
            <HeroNoImage
                heading={packages.heading}
                text={packages.text}
                btnText="Packages for you"
                btnLink="/packages#data-bundles"
            />
            <Plans />
            <DataBundles />
            <ComparePackages />
            <section className="pt-8 md:pt-12 lg:pt-16 xl:pt-20">
                <TextPictureLeft
                    image={cashback.image}
                    heading={cashback.heading}
                    text={cashback.text}
                    btnText={cashback.btnText}
                    vPadding={false}
                />
            </section>
            <Cta />
        </>
    </MainLayout>
)

export default PackagesPage