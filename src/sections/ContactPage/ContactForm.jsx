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
            <h3 className="leading-[122%] text-[28px] md:text-[36px] font-medium text-dark-19 text-center">
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
                <div className="w-full mt-[26px]">
                    <RoundedButton text="Send" styles={{ width: "100%", borderRadius: "8px", padding: "25px 16px" }} />
                </div>
            </div>
        </form>
    )
}

export default ContactForm;