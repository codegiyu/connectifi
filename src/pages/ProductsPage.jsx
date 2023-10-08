import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import heroData from "../data/heroData";
import GoToTop from "../hooks/GoToTop";

const { products } = heroData;

const ProductsPage = () => (
    <MainLayout>
        <>
            <GoToTop />
            <Hero
                heading={products.heading}
                text={products.text}
                heroImg={products.heroImg}
                // bothHalvesCentered={false}
                sideIcon={products.sideIcon}
            ></Hero>
            <section className="py-10">
                Products and Services Page
            </section>
        </>
    </MainLayout>
)

export default ProductsPage