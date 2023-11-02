import { autoRenewalOptions, internetProviders } from "../../data/packagesData";
import { useEffect, useState } from "react";
import Select from "../../components/Inputs/Select";
import PackageInput from "../../components/Inputs/PackageInput";
import RegButton from "../../components/RegButton";
import useNotAvailable from "../../hooks/useNotAvailable";

const DataBundles = () => {
    const defaultInputs = { network: "", package: "", option: "", phone: "", renewal: "" };
    const [inputValues, setInputValues] = useState(defaultInputs);
    const [packages, setPackages] = useState([]);
    const [dataOptions, setDataOptions] = useState([]);
    const { unavailable } = useNotAvailable();

    const handleInputChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === "phone" && value.length > 0) {
            if (!/^\d+$/.test(value)) {
                value = value.slice(0, -1);
            }
        }

        setInputValues((prevInputs) => ({ ...prevInputs, [name]: value }));
    }

    const buyPackage = (e) => {
        e.preventDefault(e);
        setInputValues(defaultInputs);

        unavailable();
    }

    useEffect(() => {
        if (inputValues.network) {
            const value = inputValues.network;
            setInputValues((prevInputs) => ({ ...prevInputs, package: "" }));
            setPackages(internetProviders[value].dataPackages.map((item,idx) => ({ text: item.packageName, value: String(idx)})));
        } else {
            setPackages([]);
        }
    }, [inputValues.network])

    useEffect(() => {
        if (inputValues.package) {
            const value = inputValues.package;
            setDataOptions(internetProviders[inputValues.network].dataPackages[value]?.dataOptions.map(item => (
                { text: item, value: item }
            )))
        } else {
            setDataOptions([]);
        }
    }, [inputValues.package]);

    useEffect(() => {
        console.log(dataOptions)
    }, [dataOptions])

    return (
        <section id="data-bundles" className="p-container py-[7.5rem]">
            <section className="w-full grid grid-cols-2">
                <div className="w-4/5 h-fit grid gap-6">
                    <h2 className="body-text-2 md:heading-3 font-medium lg:heading-2 text-dark-19">
                        Data Bundles
                    </h2>
                    <span className="text-grey-89 body-text-6 md:body-text-3 w-full ">
                        {`We have the major networks covered; simply choose your network and data package of choice, \
                        and explore the world of possibilities`}
                    </span>
                </div>

                <div>
                    <form 
                        className={`w-full py-[3.125rem] px-4 md:px-10 grid gap-6 rounded-[10px] bg-bright-blue`}
                        onSubmit={buyPackage}
                    >
                        <p className="body-text-6 md:body-text-5 leading-5 text-white">Fill in the information below</p>
                        <fieldset className="w-full grid gap-6 border-none">
                            <Select
                                name="network"
                                id="network-select"
                                label="Network"
                                optionsArray={internetProviders.map((item, idx) => ({ text: item.providerName, value: String(idx) }))}
                                value={inputValues.network}
                                placeholder="Select Network..."
                                changeHandler={handleInputChange}
                                inBundle={true}
                                borders={false}
                            />
                            <Select
                                name="package"
                                label="Data Packages"
                                optionsArray={packages}
                                value={inputValues.package}
                                placeholder="Select..."
                                changeHandler={handleInputChange}
                                inBundle={true}
                                borders={false}
                            />
                            <Select
                                name="option"
                                label="Data Options"
                                optionsArray={dataOptions}
                                value={inputValues.option}
                                placeholder="Select..."
                                changeHandler={handleInputChange}
                                inBundle={true}
                                borders={false}
                            />
                            <PackageInput
                                name="phone"
                                type="number"
                                label="Enter Mobile Number"
                                value={inputValues.phone}
                                placeholder="081XXXXXXXX"
                                changeHandler={handleInputChange}
                            />
                            <Select
                                name="renewal"
                                label="Auto-renewal"
                                optionsArray={autoRenewalOptions}
                                value={inputValues.renewal}
                                placeholder="Select..."
                                changeHandler={handleInputChange}
                                inBundle={true}
                                borders={false}
                            />
                        </fieldset>
                        <div className="grid">
                            <RegButton
                                text="Buy Now"
                                type="submit"
                                styles={{ background: "#17374C"}}
                            />
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}

export default DataBundles;