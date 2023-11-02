import WhyUsSingle from "../../components/WhyUsSingle";
import { whyUsData } from "../../data/homeData";


const WhyChooseUs = () => (
    <section className="p-container py-[6.25rem]">
        <section className="w-full grid gap-[72px] items-center">
            <h3 className="w-full text-dark-19 heading-3 md:heading-2-bold text-center">
                Why Choose Us
            </h3>
            <div className="w-full grid lg:grid-cols-3 gap-6 justify-center items-stretch">
                {whyUsData.map((item, idx) => (
                    <WhyUsSingle key={idx} icon={item.icon} heading={item.heading} text={item.text}/>
                ))}
            </div>
        </section>
    </section>
)

export default WhyChooseUs;