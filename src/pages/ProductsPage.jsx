import MainLayout from "../layouts/MainLayout";
import heroData from "../data/heroData";
import GoToTop from "../hooks/GoToTop";
import BestDeals from "../sections/Products/BestDeals";
import DealOfTheDay from "../sections/Products/DealOfTheDay";
import Services from "../sections/Products/Services";
import Cta from "../sections/Cta";
import HeroNoImage from "../components/HeroNoImage";

const { products } = heroData;

const ProductsPage = () => (
    <MainLayout>
        <>
            <GoToTop />
            <HeroNoImage
                heading={products.heading}
                text={products.text}
                btnText="Available products"
                btnLink="/products-and-services#available-products"
            />
            <DealOfTheDay />
            <BestDeals />
            <Services />
            <Cta />
        </>
    </MainLayout>
)

export default ProductsPage