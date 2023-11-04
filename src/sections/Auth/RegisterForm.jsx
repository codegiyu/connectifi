import PropTypes from "prop-types";
import { useState } from "react";
import useAppStore from "../../store/useAppStore";
import { toast } from "react-toastify";
import AuthFormLayout from "../../layouts/AuthFormLayout";
import AuthInput from "../../components/Inputs/AuthInput";


const defaultValues = {
    fullName: "",
    email: "",
    password: ""
}

const RegisterForm = ({topRef}) => {
    const showLogin = useAppStore(state => state.openLoginScreen);
    const registerUser = useAppStore(state => state.registerUser);
    const [inputs, setInputs] = useState(defaultValues);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let allInputsOkay = true;

        for (let key in inputs) {
            if (inputs[key] === "") {
                allInputsOkay = false
            }
        }

        if (!allInputsOkay) {
            toast.error("Please fill out all form fields");
            return;
        }
        
        const { fullName, email, password } = inputs;
        const [first_name, last_name] = fullName.split(" ");

        const payload = {
            first_name,
            last_name,
            email,
            password
        }

        const res = await registerUser(payload);

        if (res) {
            setInputs(defaultValues);
            showLogin();
            toast.warn("Please log in");
        }
    }

    return (
        <AuthFormLayout 
            heading="Sign Up"
            text="Create an account and let's get started"
            submitHandler={handleSubmit}
            bottomText="Already have an account?"
            bottomLinkText="Sign In"
            bottomLinkFunc={showLogin}
            topRef={topRef}
        >
            <fieldset className="w-full border-none grid gap-4">
                <AuthInput 
                    label="Full Name"
                    name="fullName"
                    value={inputs.fullName}
                    changeHandler={handleChange}
                />
                <AuthInput 
                    label="Email"
                    type="email"
                    name="email"
                    value={inputs.email}
                    changeHandler={handleChange}
                />
                <AuthInput 
                    label="Password"
                    name="password"
                    value={inputs.password}
                    changeHandler={handleChange}
                />
            </fieldset>
        </AuthFormLayout>
    )
}

RegisterForm.propTypes = {
    topRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(HTMLDivElement)})
    ])
}

export default RegisterForm;