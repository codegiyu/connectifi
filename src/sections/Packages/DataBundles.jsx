import { autoRenewalOptions, internetProviders } from "../../data/packagesData";
import { useEffect, useState } from "react";
import Select from "../../components/Inputs/Select";
import PackageInput from "../../components/Inputs/PackageInput";
import RegButton from "../../components/RegButton";
// import useNotAvailable from "../../hooks/useNotAvailable";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import useAppStore from "../../store/useAppStore";
import blueArrow from "../../assets/blue-arrow.svg";
import SelectPaymentOptionModal from "../SelectPaymentOption";
import BuyNowModal from "../BuyNowModal";

const DataBundles = () => {
    const defaultInputs = { network: "", package: "", option: "", phone: "", renewal: "" };

    const user = useAppStore(state => state.user);
    const [searchParams, setSearchParams] = useSearchParams();
    const [inputValues, setInputValues] = useState(defaultInputs);
    const [packages, setPackages] = useState([]);
    const [dataOptions, setDataOptions] = useState([]);
    const [selectedOptionPrice, setSelectedOptionPrice] = useState(0);
    const [selectPaymentModalActive, setSelectPaymentModalActive] = useState(false);
    const [buyNowModalActive, setBuyNowModalActive] = useState(false);
    // const { unavailable } = useNotAvailable();

    const tryItOut = () => {
        const el = document.querySelector("#network-select");
        
        if (el) {
            el.click();
        }
    }

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

        let allInputsOkay = true;

        for (let key in inputValues) {
            if (inputValues[key] === "") {
                allInputsOkay = false
            }
        }

        if (!allInputsOkay) {
            toast.error("Please fill out all form fields");
            return;
        }

        if (!user) {
            toast.error("Please log in to access this feature");
            return;
        }

        setSelectPaymentModalActive(true);
    }

    const resetInputs = () => {
        setInputValues(defaultInputs);
        setTimeout(() => {
            searchParams.delete("network");
            searchParams.delete("packageType");
            searchParams.delete("option");
            setSearchParams(searchParams);
        }, 1000)
    }

    useEffect(() => {
        const network = searchParams.get("network");
        const packageType = searchParams.get("packageType");
        const option = searchParams.get("option");
        
        if (network && packageType && option) {
            const el = document.querySelector("#data-bundles");

            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }

            setInputValues(prevState => ({ ...prevState, network }));
            setTimeout(() => {
                setInputValues(prevState => ({ ...prevState, package: packageType }));
            }, 750)
            setTimeout(() => {
                setInputValues(prevState => ({ ...prevState, option }));
            }, 1500)
                        
        } 
    }, [searchParams, setSearchParams])

    useEffect(() => {
        if (inputValues.network) {
            const value = inputValues.network;
            setInputValues((prevInputs) => ({ ...prevInputs, package: "", option: "" }));
            setPackages(internetProviders[value].dataPackages.map((item,idx) => ({ text: item.packageName, value: String(idx)})));
        } else {
            setPackages([]);
        }
    }, [inputValues.network])

    useEffect(() => {
        if (inputValues.package) {
            const value = inputValues.package;
            setInputValues((prevInputs) => ({ ...prevInputs, option: "" }));
            setDataOptions(internetProviders[inputValues.network].dataPackages[value]?.dataOptions.map(item => (
                { text: `${item.benefits} - (₦${item.price})`, value: `${item.benefits} - (₦${item.price})` }
            )))
        } else {
            setDataOptions([]);
        }
    }, [inputValues.package, inputValues.network]);

    useEffect(() => {
        if (inputValues.option && inputValues.package && inputValues.network) {
            const { option, package: dataPackage, network } = inputValues;
            const price = internetProviders[network].dataPackages[dataPackage].dataOptions.find(item => item.benefits === option.split(" - ")[0])?.price;

            setSelectedOptionPrice(price);
        } else {
            setSelectedOptionPrice(0);
        }
    }, [inputValues])

    return (
        <section id="data-bundles" className="p-container py-[7.5rem]">
            <SelectPaymentOptionModal 
                selectPaymentModalActive={selectPaymentModalActive}
                setSelectPaymentModalActive={setSelectPaymentModalActive}
                setBuyNowModalActive={setBuyNowModalActive}
                resetInputs={resetInputs}
            />
            <BuyNowModal 
                buyNowModalActive={buyNowModalActive}
                setBuyNowModalActive={setBuyNowModalActive}
                selectedOptionPrice={selectedOptionPrice}
                resetInputs={resetInputs}
            />
            <section className="w-full grid grid-cols-2">
                <div className="w-4/5 h-fit grid gap-6">
                    <h2 className="body-text-2 md:heading-3 font-medium lg:heading-2 text-dark-19">
                        Data Bundles
                    </h2>
                    <span className="text-grey-89 body-text-6 md:body-text-3 w-full ">
                        {`We have the major networks covered; simply choose your network and data package of choice, \
                        and explore the world of possibilities`}
                    </span>
                    <button 
                        className="p-[10px] flex gap-[10px] items-center bg-transparent border-none outline-none text-bright-blue body-text-6 md:body-text-3"
                        onClick={tryItOut}
                    >
                        <span>Try it out</span>
                        <img src={blueArrow} alt="" className="w-6" />
                    </button>
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