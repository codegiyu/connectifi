import mtn from "../../assets/images/mtn-logo-white.png";
import airtel from "../../assets/images/airtel-logo-white.png";
import smile from "../../assets/images/smile-logo-white.png";
import spectranet from "../../assets/images/spectranet-logo-white.png";
import glo from "../../assets/images/glo-logo-white.png";

const Clients = () => (
    <section className="py-4 bg-bright-blue">
        <div className="w-full flex items-center justify-center gap-5 md:gap-[4.6875rem] xl:gap-[6.25rem]">
            <img src={mtn} alt="" className="w-[3rem] md:w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem] 2xl:w-[8.5rem]" />
            <img src={airtel} alt="" className="w-[3rem] md:w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem] 2xl:w-[8.5rem]" />
            <img src={glo} alt="" className="w-[3rem] md:w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem] 2xl:w-[8.5rem]" />
            <img src={spectranet} alt="" className="w-[3rem] md:w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem] 2xl:w-[8.5rem]" />
            <img src={smile} alt="" className="w-[3rem] md:w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem] 2xl:w-[8.5rem]" />
        </div>
    </section>
)

export default Clients;