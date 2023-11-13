import PropTypes from "prop-types";
import { useState } from "react";
import useAppStore from "../../store/useAppStore";
import { toast } from "react-toastify";
import AuthFormLayout from "../../layouts/AuthFormLayout";
import AuthInput from "../../components/Inputs/AuthInput";


const defaultValues = {
    email: "",
    password: ""
}

const LoginForm = ({topRef}) => {
    const showRegister = useAppStore(state => state.openRegisterScreen);
    const closeAuth = useAppStore(state => state.closeAuth);
    const loginUser = useAppStore(state => state.loginUser);
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
        
        const { email, password } = inputs;

        const payload = {
            email,
            password
        }

        const res = await loginUser(payload);

        if (res) {
            setInputs(defaultValues);
            closeAuth();
        }
    }

    return (
        <AuthFormLayout 
            heading="Sign In"
            text="Sign in to your account and let's get started"
            submitHandler={handleSubmit}
            bottomText="Don't have an account?"
            bottomLinkText="Sign Up"
            bottomLinkFunc={showRegister}
            topRef={topRef}
        >
            <fieldset className="w-full border-none grid gap-4">
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

LoginForm.propTypes = {
    topRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(HTMLDivElement)})
    ])
}

export default LoginForm;