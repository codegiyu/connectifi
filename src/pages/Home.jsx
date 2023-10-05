import MainLayout from "../layouts/MainLayout";
import HomeHero from "../sections/HomeHero";

const HomePage = () => {

    return (
        <MainLayout hasHeader={false}>
            <HomeHero />
            <div className="py-10">
                HomePage
            </div>
        </MainLayout>
    )
}

export default HomePage