import { useState } from "react";
import Input from "../../components/Inputs/Inputs";
import Textarea from "../../components/Inputs/Textarea";
import RoundedButton from "../../components/RoundedButton";
import useNotAvailable from "../../hooks/useNotAvailable";


const ContactForm = () => {
    const defaultInputs = { name: "", email: "", message: "" };
    const [inputValues, setInputValues] = useState(defaultInputs);
    const { unavailable } = useNotAvailable();

    const handleInputChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        setInputValues((prevInputs) => ({ ...prevInputs, [name]: value }));
    }

    const semdMessage = (e) => {
        e.preventDefault();

        setInputValues(defaultInputs);
        unavailable();
    }

    return (
        <form
            className="w-full grid gap-10"
            onSubmit={semdMessage}
        >
            <h3 className="leading-[122%] text-[28px] md:text-[36px] font-medium text-dark-19">
                Send us a message
            </h3>
            <div className="w-full grid gap-6">
                <Input
                    label="Name"
                    name="name"
                    value={inputValues.name}
                    changeHandler={handleInputChange}
                />
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={inputValues.email}
                    changeHandler={handleInputChange}
                />
                <Textarea
                    label="Enter your message"
                    name="message"
                    value={inputValues.message}
                    changeHandler={handleInputChange}
                />
                <div className="w-[150px] md:w-[180px] lg:w-[220px]">
                    <RoundedButton text="Send" styles={{ background: "#0071BC", width: "100%" }} />
                </div>
            </div>
        </form>
    )
}

export default ContactForm;