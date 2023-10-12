import worldMap from "../../assets/images/world-map.png";
import ContactForm from "./ContactForm";

const SendMessage = () => {
    return (
        <section className="p-container pt-[45px] pb-20 lg:pb-[150px]">
            <section className="w-full grid lg:grid-cols-2 gap-16 lg:gap-4">
                <div className="w-full">
                    <ContactForm />
                </div>
                <div className="w-full grid justify-items-center">
                    <img src={worldMap} alt="" className=" lg:pt-36 flex-none" />
                </div>
            </section>
        </section>
    )
}

export default SendMessage;