import Select from "./Inputs/Select";
import logo from "../assets/logo-red.svg";
import { useEffect, useState } from "react";
import { internetProviders } from "../data/packagesData";

const ComparePackageBlock = () => {
    const [inputValues, setInputValues] = useState({ network: "", dataPackage: "" });
    const [dataPackagesArr, setDataPackagesArr] = useState([]);
    const [dataOptions, setDataOptions] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        setInputValues((prevInputs) => ({ ...prevInputs, [name]: value }));
    }

    useEffect(() => {
        if (inputValues.network) {
            const value = inputValues.network;
            setInputValues((prevInputs) => ({ ...prevInputs, dataPackage: "" }));
            setDataPackagesArr(internetProviders[value].dataPackages.map((item,idx) => ({ text: item.packageName, value: String(idx)})));
        } else {
            setDataPackagesArr([]);
        }
    }, [inputValues.network])

    useEffect(() => {
        if (inputValues.dataPackage) {
            const value = inputValues.dataPackage;
            setDataOptions(internetProviders[inputValues.network].dataPackages[value]?.dataOptions.map(item => `${item.benefits} - (₦${item.price})`))
        } else {
            setDataOptions([]);
        }
    }, [inputValues.dataPackage, inputValues.network]);

    return (
        <section className="w-full py-11 px-8 grid gap-6 bg-white rounded-[15px]">
            <Select
                name="network"
                optionsArray={internetProviders.map((item, idx) => ({ text: item.providerName, value: String(idx) }))}
                value={inputValues.network}
                placeholder="Select Network"
                changeHandler={handleChange}
            />
            <Select
                name="dataPackage"
                optionsArray={dataPackagesArr}
                value={inputValues.dataPackage}
                placeholder="Data Package"
                changeHandler={handleChange}
            />
            <div className={`w-full aspect-[0.85] ${dataOptions.length ? "bg-[#F2F2F2]" : "bg-bright-blue"} rounded-[15px] grid relative overflow-y-auto`}>
                {dataOptions.length ? (
                    <div className="w-full p-5 grid gap-5">
                        {dataOptions.map((item,idx) => (
                            <span className="w-full body-text-6 md:body-text-5 leading-5 text-grey-89" key={idx}>
                                {item}
                            </span>
                        ))}
                    </div>
                ) : (
                    <img src={logo} alt="" className="w-fit h-fit absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
                )}
            </div>
        </section>
    )
}

export default ComparePackageBlock;