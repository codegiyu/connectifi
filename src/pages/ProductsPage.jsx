import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import heroData from "../data/heroData";
import GoToTop from "../hooks/GoToTop";
import Searchbar from "../sections/Products/Searchbar";
import BestDeals from "../sections/Products/BestDeals";
import FeaturedProducts from "../sections/Products/Featured Products";
import DealOfTheDay from "../sections/Products/DealOfTheDay";
import Services from "../sections/Products/Services";
import TopDeals from "../sections/Products/TopDeals";
import TitleWithBtn from "../components/TitleWithBtn";

const { products } = heroData;

const ProductsPage = () => (
    <MainLayout>
        <>
            <GoToTop />
            <Hero
                heading={products.heading}
                text={products.text}
                heroImg={products.heroImg}
                bothHalvesCentered={false}
                sideIcon={products.sideIcon}
                headingWidth={products.headingWidth}
                textWidth={products.textWidth}
            ></Hero>
            <Searchbar />
            <BestDeals />
            <DealOfTheDay />
            <FeaturedProducts />
            <section className="p-container mt-[6.25rem] mb-[3.125rem]">
                <TitleWithBtn heading="Top Deals" />
            </section>
            <TopDeals />
            <Services />
        </>
    </MainLayout>
)

export default ProductsPage