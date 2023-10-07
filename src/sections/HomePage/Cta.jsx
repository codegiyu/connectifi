import RoundedButton from "../../components/RoundedButton";

const Cta = () => (
    <section className="w-full p-container py-32">
        <section className="w-full bg-pri-blue rounded-[20px] py-[45px] px-8 md:px-[45px]">
            <div className="flex flex-col md:flex-row gap-12 justify-between">
                <div className="w-full md:w-[400px] lg:w-[480px] grid gap-4 text-white">
                    <h5 className="body-text-1 md:heading-3">
                        Start Connecting Today
                    </h5>
                    <p className="body-text-6 md:body-text-5">
                        Join the ever-growing community of millions nationwide and revel in the swiftness and unwavering reliability of our internet service.
                    </p>
                </div>
                <div className="w-full md:w-[150px] flex items-center justify-start md:justify-end">
                    <RoundedButton text="Get Started" textStyles={{ color: "#0071BC" }} styles={{ background: "white" }} />
                </div>
            </div>
        </section>
    </section>
)

export default Cta;