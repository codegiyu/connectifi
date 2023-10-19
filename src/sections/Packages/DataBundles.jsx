import { internetProviders } from "../../data/packagesData";
import ProviderIconsGroup from "../../components/ProviderIconsGroup";
import { useCallback, useState } from "react";
import Select from "../../components/Inputs/Select";
import PackageInput from "../../components/Inputs/PackageInput";
import ToggleInput from "../../components/Inputs/ToggleInput";
import RegButton from "../../components/RegButton";
import useNotAvailable from "../../hooks/useNotAvailable";

const DataBundles = () => {
    const defaultInputs = { dataOptions: "", dataPackage: "", mobileNumber: "" };
    const [selectedProvider, setSelectedProvider] = useState(0);
    const [inputValues, setInputValues] = useState(defaultInputs);
    const [autoRenewToggle, setAutoRenewToggle] = useState(false);
    const { unavailable } = useNotAvailable();

    const changeProvider = useCallback((providerIndex) => {
        setSelectedProvider(providerIndex);
    }, [])

    const handleInputChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        if (name === "mobileNumber" && value.length > 0) {
            if (!/^\d+$/.test(value)) {
                value = value.slice(0, -1);
            }
        }

        setInputValues((prevInputs) => ({ ...prevInputs, [name]: value }));
    }

    const buyPackage = () => {
        setInputValues(defaultInputs);
        setAutoRenewToggle(false);

        unavailable();
    }

    return (
        <section id="data-bundles" className="p-container py-[6.25rem]">
            <section className="w-full grid gap-[70px]">
                <div className="w-full grid gap-6">
                    <h2 className="body-text-2 md:heading-3 font-medium lg:heading-2 text-center text-dark-19">
                        Data Bundles
                    </h2>
                    <span className="mx-auto text-center text-grey-89 body-text-6 md:body-text-3 w-full md:w-[600px] lg:w-[870px]">
                        {`We have the major networks covered; simply choose your network and data package of choice, \
                        and explore the world of possibilities`}
                    </span>
                </div>

                <div>
                    <ProviderIconsGroup arr={internetProviders} selectedProviderIndex={selectedProvider} clickHandler={changeProvider} />
                    <form className={`w-full py-[3.125rem] md:pt-[6.25rem] px-4 md:px-11 md:pb-[6.75rem] grid gap-[3.125rem] md:gap-[6.75rem] \
                        rounded-[15px] bg-[#CCE3F2] -translate-y-[10px]`}
                    >
                        <fieldset className="w-full grid gap-6 border-none">
                            <Select
                                name="dataOptions"
                                optionsArray={internetProviders[selectedProvider].dataOptions}
                                value={inputValues.dataOptions}
                                placeholder="Data Options"
                                changeHandler={handleInputChange}
                            />
                            <Select
                                name="dataPackage"
                                optionsArray={[]}
                                value={inputValues.dataPackage}
                                placeholder="Data Package"
                                changeHandler={handleInputChange}
                            />
                            <PackageInput
                                name="mobileNumber"
                                type="number"
                                value={inputValues.mobileNumber}
                                placeholder="Mobile Number"
                                changeHandler={handleInputChange}
                            />
                            <ToggleInput
                                name="autoRenew"
                                placeholder="Auto-renew"
                                value={autoRenewToggle}
                                changeHandler={() => setAutoRenewToggle((prevVal) => !prevVal)}
                            />
                        </fieldset>
                        <div className="grid md:flex md:justify-between gap-6 lg:gap-[55px] items-center">
                            <RegButton
                                text="Buy Now"
                                clickHandler={buyPackage}
                            />
                            <RegButton
                                text="Pay With Wallet"
                                clickHandler={buyPackage}
                            />
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}

export default DataBundles;