import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import heroData from "../data/heroData";

const { packages } = heroData;

const PackagesPage = () => (
    <MainLayout>
        <Hero
            heading={packages.heading}
            text={packages.text}
            heroImg={packages.heroImg}
        ></Hero>
        <section className="py-10">
            Packages Page
        </section>
    </MainLayout>
)

export default PackagesPage