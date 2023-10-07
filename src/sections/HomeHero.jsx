import WhiteHeader from "./WhiteHeader";
import heroData from "../data/heroData";
import RoundedButton from "../components/RoundedButton";
import StatsSnippetGroup from "../components/StatsSnippetGroup";

const { home } = heroData;

const HomeHero = () => (
    <section className="w-full bg-homeHero pb-20 md:pb-28 lg:pb-36 xl:pb-44">
        <WhiteHeader />
        <section className={`z-0 bg-transparent relative`}>
            <section className="z-[2] relative w-full pt-16 md:pt-24 lg:pt-10 p-container grid grid-cols-1 lg:grid-cols-[min(700px,_55%)_1fr] 2xl:grid-cols-[700px_1fr] gap-12 md:gap-16 lg:gap-12">
                <div className={`w-full grid gap-10 lg:self-center`}>
                    <h1 className={`heading-4 font-bold md:heading-2-bold lg:heading-1-bold text-dark-19`}>
                        <span>Empowering Connectivity: Your</span>
                        <span className="text-bright-blue"> Data</span>
                        <span>, Your</span>
                        <span className="text-bright-blue"> Network</span>
                        <span>, Your Way</span>
                    </h1>
                    <p className="body-text-5 lg:body-text-3 text-grey-89">
                        {home.text}
                    </p>
                    <div className="grid gap-[3.125rem]">
                        <div className="w-fit">
                            <RoundedButton text="See our plans" />
                        </div>
                        <StatsSnippetGroup arr={home.stats} />
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <img src={home.heroImg} alt="" className="lg:translate-x-[3.625rem]" />
                </div>
            </section>
        </section>
    </section>
)

export default HomeHero