// import worldMap from "../../assets/images/world-map.png";
import ContactForm from "./ContactForm";

const SendMessage = () => {
    return (
        <section className="p-container pt-[45px] pb-0">
            <section className="w-full md:w-[550px] lg:w-[700px] xl:w-[885px] grid bg-white pt-[84px] pb-[68px] px-4 md:px-[140px] rounded-[20px] mx-auto">
                <div className="w-full">
                    <ContactForm />
                </div>
                {/* <div className="w-full grid justify-items-center">
                    <img src={worldMap} alt="" className=" lg:pt-36 flex-none" />
                </div> */}
            </section>
        </section>
    )
}

export default SendMessage;