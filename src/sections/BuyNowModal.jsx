import PropTypes from "prop-types";
import useScrollBlock from "../hooks/useScrollBlock";
import { useEffect, useRef, useState } from "react";
import RoundedButton from "../components/RoundedButton";
import getInitials from "../utils/getInitials";
import useAppStore from "../store/useAppStore";
import dotsLoading from "../assets/three-dots-loading.svg";
import { toast } from "react-toastify";

const BuyNowModal = ({ buyNowModalActive, setBuyNowModalActive, selectedOptionPrice, resetInputs }) => {
    const user = useAppStore(state => state.user);
    const balance = useAppStore(state => state.user?.walletBalance || 0);
    const walletLoading = useAppStore(state => state.walletLoading);
    const fundWallet = useAppStore(state => state.fundWallet);
    const buyItem = useAppStore(state => state.buyItem);
    const [blockScroll, allowScroll] = useScrollBlock();
    const [balanceIsEnough, setBalanceIsEnough] = useState(true);
    const [selectedTab, setSelectedTab] = useState("Buy Now");

    const modalWrapRef = useRef(null);

    const fundingOptions = [1000, 2000, 5000, 10000, 15000, 25000, 50000, 100000];

    const checkClickPosition = (e) => {
        const target = e.target;
        const authSection = modalWrapRef.current

        if (authSection && !authSection.contains(target)) {
            setBuyNowModalActive(false);
            resetInputs();
        }
    }

    const switchTab = (e) => {
        const value = e.currentTarget.dataset.tab;

        setSelectedTab(value);
    }

    const buyNow = async () => {
        await buyItem(selectedOptionPrice);
        toast.success("Data bundle purchase successful")
        setTimeout(() => {
            resetInputs();
            setBuyNowModalActive(false);
        }, 500);
    }

    const addToWallet = async (e) => {
        const amount = e.currentTarget.dataset.amount;
        await fundWallet(amount);
        toast.success("Wallet funding successfull")
    }

    useEffect(() => {
        if (buyNowModalActive) {
            blockScroll();
        } else {
            allowScroll();
        }
    }, [buyNowModalActive, blockScroll, allowScroll])

    useEffect(() => {
        if (balance < selectedOptionPrice) {
            setBalanceIsEnough(false);
        } else {
            setBalanceIsEnough(true);
        }
    }, [balance, selectedOptionPrice])

    if (!buyNowModalActive) return null;
    return (
        <section 
            className="w-screen h-screen fixed top-0 left-0 z-[60] bg-[#0000009f] grid place-items-center" 
            onClick={checkClickPosition}
        >
            <div
                ref={modalWrapRef} 
                className="bg-white w-[95%] md:w-[550px] lg:w-[775px] rounded-[0px] relative overflow-hidden"
            >
                <div className="flex gap-9 items-center px-4 md:px-12 py-10">
                    <div className="w-[6.25rem] h-[6.25rem] flex-none rounded-full overflow-hidden">
                        {user.photo ? (
                            <img src={user.photo} alt={getInitials(user.first_name || "", user.last_name || "")} className="w-full h-full object-cover rounded-full" />
                        ) : (
                            <div className="w-full h-full rounded-full bg-[#17374D] grid place-items-center text-white">
                                <span className="text-xl">
                                    {getInitials(user.first_name || "", user.last_name || "")}
                                </span>
                            </div>
                        )}
                    </div>
                    <div className="grid gap-3">
                        <h6 className="text-[#3F3F3F] leading-[125%] text-[1.75rem] md:text-[2.25rem]">
                            {`${user.first_name} ${user.last_name}`}
                        </h6>
                        <p className="text-sm md:text-xl leading-[18px] md:leading-[120%] text-grey-89">
                            {`Wallet Balance: ₦${balance.toLocaleString()}`}
                        </p>
                    </div>
                </div>
                <div className="bg-white grid grid-cols-2 border-t-[3px] border-bright-blue">
                    <button
                        data-tab="Fund Wallet" 
                        className={`${selectedTab === "Fund Wallet" ? "bg-bright-blue text-white" : "text-[#3F3F3F]"} w-full p-8 leading-[100%] text-[1.375rem] 
                        md:text-[1.75rem] transition-all duration-200 ease-in-out text-center border-none outline-none`}
                        onClick={switchTab}
                    >
                        Fund Wallet
                    </button>
                    <button
                        data-tab="Buy Now" 
                        className={`${selectedTab === "Buy Now" ? "bg-bright-blue text-white" : "text-[#3F3F3F]"} w-full p-8 leading-[100%] text-[1.375rem] 
                        md:text-[1.75rem] transition-all duration-200 ease-in-out text-center border-none outline-none`}
                        onClick={switchTab}
                    >
                        Buy Now
                    </button>
                </div>
                <div className="w-full h-[400px] bg-[#F6F6F6] relative z-[91] overflow-hidden">
                    <div 
                        className={`w-full h-full relative z-[91] flex flex-nowrap overflow-visible transition-all duration-200 ease-in
                        ${selectedTab === "Buy Now" ? "-translate-x-[100%]" : "translate-x-0"}`}
                    >
                        <div
                            className={`w-full h-full bg-transparent flex-none grid py-12 px-4 md:px-12 overflow-y-auto`}
                        >
                            <div className="w-full h-full flex flex-col justify-between bg-white overflow-y-auto rounded-[24px] px-[14px] pt-7 pb-12">
                                <div className="mb-4">
                                    <h6 className="text-[#3F3F3F] font-medium body-text-6 md:body-text-3 p-[0_14px_16px] border-b border-b-[#AEAEAE]">
                                        Select one of the buttons below to fund your wallet.
                                    </h6>
                                </div>
                                <div className="w-full px-[14px] flex flex-wrap justify-center gap-5 md:gap-7 lg:gap-y-10 lg:gap-x-11">
                                    {fundingOptions.map((item,idx) => (
                                        <button 
                                            key={idx} 
                                            data-amount={item}
                                            className="w-[100px] lg:w-[120px] p-4 rounded-[50px] bg-[#CCE3F2] text-[#292D32] text-xl leading-6 font-medium"
                                            onClick={addToWallet}    
                                        >
                                            {item.toLocaleString()}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div
                            className={`w-full h-full bg-transparent flex-none grid py-12 px-4 md:px-12 overflow-y-auto`}
                        >
                            <div className="w-full h-full flex flex-col justify-between bg-white overflow-y-auto rounded-[24px] px-[14px] pt-7 pb-12">
                                <div className="">
                                    <h6 className="text-[#3F3F3F] font-bold body-text-2xl md:text-3xl p-[0_14px_16px] border-b border-b-[#AEAEAE]">
                                        Summary
                                    </h6>
                                    <div className="w-full flex items-center justify-between my-10 px-[14px]">
                                        <span className="text-[#3F3F3F] font-medium body-text-6 md:body-text-3">
                                            Package Price
                                        </span>
                                        <span className="text-[#3F3F3F] font-semibold body-text-2xl md:text-3xl">
                                            {`₦${selectedOptionPrice}`}
                                        </span>
                                    </div>
                                </div>
                                <div className="w-full px-[14px]">
                                    {!balanceIsEnough ? (
                                        <p className="text-[#922c2c] font-normal body-text-6 md:body-text-3">
                                            Balance is too low. Please fund wallet to proceed.
                                        </p>
                                    ) : null}
                                    <RoundedButton text="Buy" styles={{ width: "100%" }} disabled={!balanceIsEnough} clickHandler={buyNow} />
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
            </div>
        </section>
    )
}

BuyNowModal.propTypes = {
    buyNowModalActive: PropTypes.bool,
    setBuyNowModalActive: PropTypes.func,
    resetInputs: PropTypes.func,
    selectedOptionPrice: PropTypes.number,
}

export default BuyNowModal;