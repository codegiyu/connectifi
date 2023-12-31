import WhiteHeader from "./WhiteHeader";
import heroData from "../data/heroData";
import RoundedButton from "../components/RoundedButton";
import StatsSnippetGroup from "../components/StatsSnippetGroup";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const { home } = heroData;

const HomeHero = () => (
    <section className="w-full bg-[#F6F6F6] pb-20 md:pb-28 lg:pb-36 xl:pb-44">
        <WhiteHeader />
        <section className={`z-0 bg-transparent relative`}>
            <section className="w-full pt-16 md:pt-24 lg:pt-10">
                <section className="z-[2] relative p-container grid grid-cols-1 lg:grid-cols-[1fr_445px] xl:grid-cols-[min(610px,_55%)_1fr] gap-12 md:gap-16 lg:gap-12">
                    <div className={`w-full grid gap-4 lg:self-center`}>
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
                        <div className="grid gap-11 mt-2">
                            <div className="w-fit">
                                <Link to="/packages#data-bundles">
                                    <RoundedButton text="See our plans" />
                                </Link>
                            </div>
                            <StatsSnippetGroup arr={home.stats} />
                        </div>
                    </div>
                    <div className="h-fit flex justify-center lg:justify-end">
                        <LazyLoadImage
                            src={home.heroImg.src}
                            height={home.heroImg.height}
                            width={home.heroImg.width}
                            visibleByDefault={true}
                            className=""
                            alt=""
                        />
                    </div>
                </section>
            </section>
        </section>
    </section>
)

export default HomeHero