import { services } from "../../data/productsData";
import ServiceSingle from "../../components/ServiceSingle";

const Services = () => {
    const [service1, service2] = services;

    return (
        <section id="services" className="p-container pt-[3.125rem] pb-[6.25rem] bg-white">
            <div className="w-full grid justify-items-center lg:flex lg:items-stretch gap-[25px] lg:flex-nowrap lg:justify-center">
                <ServiceSingle icon={service1.icon} heading={service1.heading} text={service1.text} />
                <ServiceSingle icon={service2.icon} heading={service2.heading} text={service2.text} />
            </div>
        </section>
    )
}

export default Services;