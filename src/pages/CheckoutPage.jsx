import { useState } from "react";
import WhiteHeader from "../sections/WhiteHeader";
import AuthLayout from "./AuthLayout";
import useAppStore from "../store/useAppStore";
import RoundedButton from "../components/RoundedButton";
import Input from "../components/Inputs/Inputs";
import { toast } from "react-toastify";
import dotsLoading from "../assets/three-dots-loading.svg";
import arrowRight from "../assets/blue-arrow.svg";
import OrderConfirmedModal from "../sections/OrderConfirmedModal";


const CheckoutPage = () => {
    const defaultInputs = { name: "", email: "", phone: "", address: "" };
    const numberInCart = useAppStore(state => state.numberInCart);
    const cartTotal = useAppStore(state => state.cartTotal);
    const clearCart = useAppStore(state => state.clearCart);
    const fundWallet = useAppStore(state => state.fundWallet);
    const buyItem = useAppStore(state => state.buyItem);
    const balance = useAppStore(state => state.user?.walletBalance || 0);
    const walletLoading = useAppStore(state => state.walletLoading);
    const [inputValues, setInputValues] = useState(defaultInputs);
    const [deliveryFee, setDeliveryFee] = useState(650);
    const [paymentMethod] = useState("wallet");
    const [selectedTab, setSelectedTab] = useState("payment-method");
    const [orderLoading, setOrderLoading] = useState(false);
    const [orderConfirmedModalActive, setOrderConfirmedModalActive] = useState(false);

    const today = new Date();
    const thisYear = today.getFullYear();
    const thisMonth = today.getMonth();
    const thisDay = today.getDate();
    const earlyDate = new Date(thisYear, thisMonth, thisDay + 3);
    const lateDate = new Date(thisYear, thisMonth, thisDay + 5);

    const deliveryPeriod = `${formatDate(earlyDate)} - ${formatDate(lateDate)}`;

    const fundingOptions = [5000, 10000, 25000, 50000];

    const handleInputChange = (e) => {
        const name = e.target.name;
        let value = e.target.value;

        setInputValues((prevInputs) => ({ ...prevInputs, [name]: value }));
    }

    const changeDeliveryChoice = (e) => {
        const amount = e.currentTarget.dataset.amount;

        setDeliveryFee(+amount);
    }

    const switchTab = (e) => {
        const value = e.currentTarget.dataset.tab;

        setSelectedTab(value);
    }

    const addToWallet = async (e) => {
        const amount = e.currentTarget.dataset.amount;
        await fundWallet(amount);
        toast.success("Wallet funding successfull")
    }

    const confirmOrder = async () => {
        setOrderLoading(true);

        let allInputsOkay = true;

        for (let key in inputValues) {
            if (inputValues[key] === "") {
                allInputsOkay = false
            }
        }

        if (!allInputsOkay) {
            toast.error("Please fill in all shipping details fields");
            setOrderLoading(false);
            return;
        }

        if (balance < (+cartTotal + +deliveryFee)) {
            toast.error("Wallet balance is insufficient!");
            setOrderLoading(false);
            return;
        }

        await buyItem(+cartTotal + +deliveryFee);
        clearCart();
        setOrderLoading(false);

        setInputValues(defaultInputs);
        setOrderConfirmedModalActive(true);
    }

    function formatDate (dateObj) {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const month = months[dateObj.getMonth()];
        const date = dateObj.getDate();

        return `${month} ${date}`;
    }

    return (
        <div className="bg-[#F6F6F6] min-h-screen">
            <WhiteHeader />
            <main className='p-container mt-[50px] pb-20 grid gap-6'>
                <OrderConfirmedModal orderConfirmedModalActive={orderConfirmedModalActive} setOrderConfirmedModalActive={setOrderConfirmedModalActive} />
                <section className="w-full pt-10 pb-20 px-7 bg-white rounded-[24px] grid gap-10 overflow-hidden">
                    <h2 className="text-[#3F3F3F] font-bold body-text-2xl md:text-3xl">
                        {`Billing Details`}
                    </h2>

                    <div className="w-full grid gap-6">
                        <div className="w-full grid lg:grid-cols-2 gap-10">
                            <Input
                                label="Name"
                                name="name"
                                value={inputValues.name}
                                changeHandler={handleInputChange}
                            />
                            <Input
                                label="Email"
                                type="email"
                                name="email"
                                value={inputValues.email}
                                changeHandler={handleInputChange}
                            />
                        </div>
                        <div className="w-full grid lg:grid-cols-[9fr_5fr] gap-10">
                            <Input
                                label="Address"
                                name="address"
                                value={inputValues.address}
                                changeHandler={handleInputChange}
                            />
                            <Input
                                label="Phone"
                                name="phone"
                                value={inputValues.phone}
                                changeHandler={handleInputChange}
                            />
                        </div>
                    </div>
                </section>

                <section className="w-full grid grid-cols-2 items-stretch gap-5">
                    <section className="w-full bg-white rounded-[24px] pt-10 pb-12 px-7 relative grid gap-6">
                        <div className="grid gap-2">
                            <h2 className="text-[#3F3F3F] font-bold body-text-2xl md:text-3xl">
                                Delivery Details
                            </h2>
                            <span className="body-text-7 md:body-text-6 text-grey-89 font-medium">
                                Select delivery method
                            </span>
                        </div>

                        <div 
                            className={`w-full flex gap-[5px] my-3 `} 
                            onClick={changeDeliveryChoice}
                            data-amount={650}
                        >
                            <div className={`rounded-full border border-[#3F3F3F] w-[20px] h-[20px] mt-[3px] p-[2px] }`}>
                                <div className={`${deliveryFee === 650 ? "bg-bright-blue" : ""} w-full h-full rounded-full transition-all duration-100 ease-in`}></div>
                            </div>
                            <div className="flex-1 pr-[30px] flex items-center justify-between">
                                <div className="grid gap-2">
                                    <h6 className="text-[#3F3F3F] body-text-6 md:body-text-3 leading-[100%]">
                                        Pick-up Station (₦650)
                                    </h6>
                                    <p className="text-sm md:text-xl leading-[18px] md:leading-[120%] text-grey-89">
                                        {`Delivery day between ${deliveryPeriod}`}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div 
                            className={`w-full flex gap-[5px] my-3 `} 
                            onClick={changeDeliveryChoice}
                            data-amount={1350}
                        >
                            <div className={`rounded-full border border-[#3F3F3F] w-[20px] h-[20px] mt-[3px] p-[2px] }`}>
                                <div className={`${deliveryFee === 1350 ? "bg-bright-blue" : ""} w-full h-full rounded-full transition-all duration-100 ease-in`}></div>
                            </div>
                            <div className="flex-1 pr-[30px] flex items-center justify-between">
                                <div className="grid gap-2">
                                    <h6 className="text-[#3F3F3F] body-text-6 md:body-text-3 leading-[100%]">
                                        Door-Step Delivery (₦1350)
                                    </h6>
                                    <p className="text-sm md:text-xl leading-[18px] md:leading-[120%] text-grey-89">
                                        {`Delivery day between ${deliveryPeriod}`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full bg-white rounded-[24px] pt-10 pb-12 px-7 grid grid-rows-[auto_1fr] relative">
                        <div className="grid gap-2">
                            <h2 className="text-[#3F3F3F] font-bold body-text-2xl md:text-3xl">
                                Payment Method
                            </h2>
                            <span className="body-text-7 md:body-text-6 text-grey-89 font-medium">
                                Select payment method
                            </span>
                        </div>
                        <div className="w-full h-full z-[20] overflow-hidden">
                            <div 
                                className={`w-full h-full relative z-[20] flex flex-nowrap overflow-visible transition-all duration-200 ease-in
                                ${selectedTab === "fund-wallet" ? "-translate-x-[100%]" : "translate-x-0"}`}
                            >
                                <div
                                    className={`w-full h-full bg-transparent flex-none flex flex-col justify-between py-4 px-4 overflow-y-auto`}
                                >
                                    <div 
                                        className={`w-full flex gap-[5px] my-3 `} 
                                        onClick={changeDeliveryChoice}
                                        data-method="wallet"
                                    >
                                        <div className={`rounded-full border border-[#3F3F3F] w-[20px] h-[20px] mt-[3px] p-[2px] }`}>
                                            <div className={`${paymentMethod === "wallet" ? "bg-bright-blue" : ""} w-full h-full rounded-full transition-all duration-100 ease-in`}></div>
                                        </div>
                                        <div className="flex-1 pr-[30px] flex items-center justify-between">
                                            <div className="grid gap-2">
                                                <h6 className="text-[#3F3F3F] body-text-6 md:body-text-3 leading-[100%]">
                                                    {`Wallet - (₦ ${balance.toLocaleString()})`}
                                                </h6>
                                                <p className="text-sm md:text-xl leading-[18px] md:leading-[120%] text-grey-89">
                                                    {`Delivery day between ${deliveryPeriod}`}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 justify-end" onClick={switchTab} data-tab="fund-wallet">
                                        <span className="body-text-7 md:body-text-6 text-grey-89">
                                            Fund Wallet
                                        </span>
                                        <img src={arrowRight} alt="" className="" />
                                    </div>
                                </div>
                                <div
                                    className={`w-full h-full bg-transparent flex-none grid py-4 px-4 overflow-y-auto`}
                                >
                                    <div className="w-full h-full flex flex-col justify-between bg-white overflow-y-auto rounded-[24px] pt-4 ">
                                        <div className="">
                                            <h6 className="text-sm md:text-xl leading-[18px] md:leading-[120%] text-grey-89 text-center">
                                                Select one of the buttons below to fund your wallet.
                                            </h6>
                                        </div>
                                        <div className="w-full px-[14px] flex flex-wrap justify-center gap-5">
                                            {fundingOptions.map((item,idx) => (
                                                <button 
                                                    key={idx} 
                                                    data-amount={item}
                                                    className="w-[80px] p-4 rounded-[50px] bg-[#CCE3F2] text-[#292D32] text-base leading-5 font-medium"
                                                    onClick={addToWallet}    
                                                >
                                                    {item.toLocaleString()}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2" onClick={switchTab} data-tab="payment-method">
                                            <img src={arrowRight} alt="" className="rotate-180" />
                                            <span className="body-text-7 md:body-text-6 text-grey-89">
                                                Back to select payment method
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {walletLoading ? (
                            <div className="w-full h-full bg-[#ffffffd8] absolute top-0 left-0 grid place-items-center z-[99]">
                                <img src={dotsLoading} alt="" className="w-[300px] text-bright-blue" />
                            </div>
                        ) : null}
                    </section>
                </section>

                <section className="w-full grid gap-[3.125rem] bg-white overflow-y-auto rounded-[24px] px-[14px] pt-7 pb-12">
                    <div className="mb-16">
                        <h6 className="text-[#3F3F3F] font-bold body-text-2xl md:text-3xl p-[0_14px_16px] border-b border-b-[#AEAEAE]">
                            Cart Summary
                        </h6>
                        <div className="w-full flex items-center justify-between mt-9 px-[14px]">
                            <span className="body-text-2 md:heading-3-medium text-[#3F3F3F] font-medium">
                                {`Items(${numberInCart})`}
                            </span>
                            <span className="text-[#3F3F3F] font-semibold body-text-2xl md:text-3xl">
                                {`₦${cartTotal}`}
                            </span>
                        </div>
                        <div className="w-full flex items-center justify-between mt-9 px-[14px]">
                            <span className="body-text-2 md:heading-3-medium text-[#3F3F3F] font-medium">
                                Delivery Fee
                            </span>
                            <span className="text-[#3F3F3F] font-semibold body-text-2xl md:text-3xl">
                                {`₦${deliveryFee}`}
                            </span>
                        </div>
                        <div className="w-full flex items-center justify-between mt-9 pt-9 px-[14px] border-t border-b-[#AEAEAE]">
                            <span className="body-text-2 md:heading-3-medium text-[#3F3F3F] font-bold">
                                Total
                            </span>
                            <span className="text-[#3F3F3F] font-semibold body-text-2xl md:text-3xl">
                                {`₦${+cartTotal + +deliveryFee}`}
                            </span>
                        </div>
                    </div>
                    <div className="w-full px-[14px]">
                        <RoundedButton 
                            text={orderLoading ? "Confirming Order..." : `Confirm Order`} 
                            styles={{ width: "100%", padding: "25px", borderRadius: "30px" }}  
                            clickHandler={confirmOrder}
                            disabled={orderLoading}
                        />
                    </div>
                </section>
                <AuthLayout />
            </main>
        </div>
    )
}

export default CheckoutPage;