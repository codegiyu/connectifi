import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import RegButton from "../components/RegButton";
import Input from "../components/Inputs/Inputs";
import Textarea from "../components/Inputs/Textarea";
import Select from "../components/Inputs/Select";
import { availableTimesArr } from "../data/productsData";
import { toast } from "react-toastify";

const ScheduleInstallationForm = ({ inDedicatedPage = false, submissionAction }) => {
    const defaultInputValues = {
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        address: ""
    }
    
    const [inputValues, setInputValues] = useState(defaultInputValues);
    const [loading, setLoading] = useState(false);
    const [availableDatesArr, setAvailableDatesArr] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputValues((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        let allInputsOkay = true;

        for (let key in inputValues) {
            if (inputValues[key] === "") {
                allInputsOkay = false
            }
        }

        if (!allInputsOkay) {
            setLoading(false);
            toast.error("Please fill out all form fields");
            return;
        }

        setTimeout(() => {
            setLoading(false);
            setInputValues(defaultInputValues);
            submissionAction();
        }, 2500);
    }

    useEffect(() => {
        const today = new Date();
        const thisYear = today.getFullYear();
        const thisMonth = today.getMonth();
        const thisDay = today.getDate();
        let addedDays = inDedicatedPage ? 6 : 1;

        const datesArr = [];

        while (datesArr.length < 12) {
            const currentDay = new Date(thisYear, thisMonth, thisDay + addedDays);
            const dayOfTheWeek = currentDay.getDay();

            // If day is not Sunday (0)
            if (dayOfTheWeek) {
                datesArr.push({
                    value: currentDay.toLocaleDateString("en-GB", {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    }),
                    text: currentDay.toLocaleDateString("en-GB", {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    })
                })
            }
            addedDays++;
        }

        console.log(datesArr);
        setAvailableDatesArr(datesArr);
    }, [inDedicatedPage])

    return (
        <section className="w-full">
            <h3 
                className={`body-text-2 md:heading-3 font-medium lg:heading-2 text-center 
                ${inDedicatedPage ? "" : "mb-10"}`}
            >
                {inDedicatedPage
                    ? "Book an installation" 
                    : "Book An Installation Appointment"
                }
            </h3>
            <form 
                onSubmit={handleSubmit} 
                className={`w-full bg-white rounded-[20px] py-[3.125rem] px-4 md:px-10 lg:px-20 grid gap-14`}
            >
                <fieldset className={`w-full border-none grid gap-6 ${!inDedicatedPage ? "lg:grid-cols-2 gap-x-[72px]" : ""}`}>
                    <Input
                        label={inDedicatedPage ? "Enter Name" : "Name"}
                        name="name"
                        value={inputValues.name}
                        changeHandler={handleChange}
                        required={true}
                    />
                    <Input
                        label={inDedicatedPage ? "Enter Email" : "Email"}
                        type="email"
                        name="email"
                        value={inputValues.email}
                        changeHandler={handleChange}
                        required={true}
                    />
                    <Input
                        label={inDedicatedPage ? "Enter Mobile no." : "Mobile no."}
                        type="tel"
                        name="phone"
                        value={inputValues.phone}
                        changeHandler={handleChange}
                        required={true}
                    />
                    <Select
                        name="date"
                        optionsArray={availableDatesArr}
                        value={inputValues.date}
                        label="Schedule your preferred date"
                        changeHandler={handleChange}
                        required={true}
                    />
                    <Select
                        name="time"
                        optionsArray={availableTimesArr}
                        value={inputValues.time}
                        label="Schedule your preferred time"
                        changeHandler={handleChange}
                        required={true}
                    />
                    {inDedicatedPage ? (
                        <Textarea
                            label="Enter Your Address"
                            name="address"
                            value={inputValues.address}
                            changeHandler={handleChange}
                            required={true}
                        />
                    ) : (
                        <Input
                            label="Enter Your Address"
                            type="tel"
                            name="address"
                            value={inputValues.address}
                            changeHandler={handleChange}
                            required={true}
                        />
                    )}
                </fieldset>
                <div className={`w-full mx-auto ${inDedicatedPage ? "" : "lg:w-1/2"}`}>
                    <RegButton 
                        text={loading ? "Submitting request..." : "Submit request" } 
                        disabled={loading}
                        styles={{ width: "100%" }}
                        type="submit" 
                        clickHandler={() => {}} 
                    />
                </div>
            </form>
        </section>
    )
}

ScheduleInstallationForm.propTypes = {
    inDedicatedPage: PropTypes.bool,
    submissionAction: PropTypes.func
}

export default ScheduleInstallationForm;