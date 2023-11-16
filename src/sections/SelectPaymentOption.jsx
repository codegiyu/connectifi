import PropTypes from "prop-types";
import useScrollBlock from "../hooks/useScrollBlock";
import { useEffect, useRef, useState } from "react";
import RoundedButton from "../components/RoundedButton";
import PaymentOptionSingle from "../components/PaymentOptionSingle";
import mastercard from "../assets/mastercard.svg";

const SelectPaymentOptionModal = ({selectPaymentModalActive, setSelectPaymentModalActive, setBuyNowModalActive, resetInputs}) => {
    const [blockScroll, allowScroll] = useScrollBlock();
    const [optionSelected, setOptionSelected] = useState(false);

    const modalWrapRef = useRef(null);

    const checkClickPosition = (e) => {
        const target = e.target;
        const authSection = modalWrapRef.current

        if (authSection && !authSection.contains(target)) {
            setSelectPaymentModalActive(false);
            resetInputs();
        }
    }

    const handlePaymentSelect = () => {
        setSelectPaymentModalActive(false);
        setBuyNowModalActive(true);
    }

    useEffect(() => {
        if (selectPaymentModalActive) {
            blockScroll();
        } else {
            allowScroll();
        }
    }, [selectPaymentModalActive, blockScroll, allowScroll])

    if (!selectPaymentModalActive) return null;
    return (
        <section 
            className="w-screen h-screen fixed top-0 left-0 z-[60] bg-[#0000009f] grid place-items-center" 
            onClick={checkClickPosition}
        >
            <div
                ref={modalWrapRef} 
                className="bg-white w-[90%] md:w-[400px] lg:w-[680px] rounded-[30px] overflow-hidden"
            >
                <div className="bg-bright-blue leading-[157%] text-[1.75rem] md:text-[2.25rem] py-8 font-medium text-center text-white">
                    <p>Buy Now</p>
                </div>
                <div className="bg-white py-[28px] px-[14px] grid gap-[30px]">
                    <p className="text-grey-89 body-text-6 md:body-text-3 p-[0_28px_16px] border-b border-b-[#AEAEAE]">
                        Select a payment method
                    </p>
                    <div className="px-[0px] grid gap-[80px]">
                        <div className="grid gap-[30px]">
                            <PaymentOptionSingle 
                                name="Wallet"
                                description="select to pay from your wallet"
                                setOptionSelected={setOptionSelected}
                            />
                            <PaymentOptionSingle 
                                name="5800 **** **** **00"
                                description="select to pay from your card"
                                disabled={true}
                                img={mastercard}
                                setOptionSelected={setOptionSelected}
                            />
                        </div>
                        <div className="w-full px-[28px]">
                            <RoundedButton text="Buy" styles={{ width: "100%" }} disabled={!optionSelected} clickHandler={handlePaymentSelect} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

SelectPaymentOptionModal.propTypes = {
    selectPaymentModalActive: PropTypes.bool,
    setSelectPaymentModalActive: PropTypes.func,
    setBuyNowModalActive: PropTypes.func,
    resetInputs: PropTypes.func,
}

export default SelectPaymentOptionModal;