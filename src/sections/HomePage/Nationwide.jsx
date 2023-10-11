import nigeria from "../../assets/images/nigeria.png";

const Nationwide = () => (
    <section className="p-container pt-14 pb-32 grid gap-[4.75rem] items-center">
        <div className="max-w-max mx-auto grid gap-[1.875rem]">
            <h3 className="w-max text-dark-19 heading-3 font-semibold md:heading-2 text-center">
                Experience Blazing Fast Internet Nationwide
            </h3>
            <span className="w-4/5 text-grey-89 body-text-6 md:body-text-3 text-center mx-auto">
                Surf, stream, and work with unparalleled speed and reliability wherever you are in the country
            </span>
        </div>
        <img src={nigeria} alt="" className="max-w-[90%] md:max-w-[70%] lg:max-w-[740px] mx-auto" />
    </section>
)

export default Nationwide;