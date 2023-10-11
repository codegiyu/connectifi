import Select from "./Inputs/Select";
import logo from "../assets/logo-red.svg";
import { useState } from "react";
import { internetProviders } from "../data/packagesData";

const ComparePackageBlock = () => {
    const [inputValues, setInputValues] = useState({ network: "", dataOption: "" });
    const [dataOptionsArr, setDataOptionsArr] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === "network") {
            setDataOptionsArr(internetProviders[value].dataOptions)
        }

        setInputValues((prevInputs) => ({ ...prevInputs, [name]: value }));
    }

    return (
        <section className="w-full py-11 px-8 grid gap-6 bg-bright-blue rounded-[15px]">
            <Select
                name="network"
                optionsArray={internetProviders.map((item, idx) => ({ text: item.providerName, value: idx }))}
                value={inputValues.network}
                placeholder="Select Network"
                changeHandler={handleChange}
            />
            <Select
                name="dataOption"
                optionsArray={dataOptionsArr}
                value={inputValues.dataOption}
                placeholder="Data Option"
                changeHandler={handleChange}
            />
            <div className="w-full aspect-[0.85] bg-[#F2F2F2] rounded-[15px] grid place-items-center">
                <img src={logo} alt="" className="w-fit h-fit" />
            </div>
        </section>
    )
}

export default ComparePackageBlock;