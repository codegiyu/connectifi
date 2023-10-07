import mtn from "../../assets/images/mtn-logo.svg";
import airtel from "../../assets/images/airtel-logo.png";
import smile from "../../assets/images/smile-logo.svg";
import spectranet from "../../assets/images/spectranet-logo.png";
import tizeti from "../../assets/images/tizeti-logo.png";

const Clients = () => (
    <section className="p-container py-12 md:py-[3.75rem] lg:py-[4.6875rem] bg-white">
        <div className="w-full flex items-center justify-center gap-5 md:gap-[4.6875rem] 2xl:gap-[6rem]">
            <img src={mtn} alt="" className="w-[3rem] md:w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem] 2xl:w-[8.5rem]" />
            <img src={airtel} alt="" className="w-[3rem] md:w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem] 2xl:w-[8.5rem]" />
            <img src={spectranet} alt="" className="w-[3rem] md:w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem] 2xl:w-[8.5rem]" />
            <img src={tizeti} alt="" className="w-[3rem] md:w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem] 2xl:w-[8.5rem]" />
            <img src={smile} alt="" className="w-[3rem] md:w-[5.5rem] lg:w-[6.5rem] xl:w-[7.5rem] 2xl:w-[8.5rem]" />
        </div>
    </section>
)

export default Clients;