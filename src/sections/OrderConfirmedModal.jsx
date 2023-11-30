import PropTypes from "prop-types";
import useScrollBlock from "../hooks/useScrollBlock";
import { useEffect, useRef } from "react";
import confirmed from "../assets/confirmed.svg";
import { useNavigate } from "react-router-dom";
import RoundedButton from "../components/RoundedButton";

const OrderConfirmedModal = ({ orderConfirmedModalActive, setOrderConfirmedModalActive, withOptions = true }) => {
    const [blockScroll, allowScroll] = useScrollBlock();

    const navigate = useNavigate();

    const modalWrapRef = useRef(null);

    const closeModalAndNavigate = (path = "/") => {
        setOrderConfirmedModalActive(false);
        navigate(path);
    }

    const checkClickPosition = (e) => {
        const target = e.target;
        const authSection = modalWrapRef.current

        if (authSection && !authSection.contains(target)) {
            closeModalAndNavigate();
        }
    }

    const scheduleInstallation = () => {
        closeModalAndNavigate("/schedule-installation");
    }

    useEffect(() => {
        if (orderConfirmedModalActive) {
            blockScroll();
        } else {
            allowScroll();
        }

        return () => allowScroll();
    }, [orderConfirmedModalActive, blockScroll, allowScroll])

    if (!orderConfirmedModalActive) return null;
    return (
        <section 
            className="w-screen h-screen fixed top-0 left-0 z-[60] bg-[#0000009f] grid place-items-center" 
            onClick={checkClickPosition}
        >
            <div
                ref={modalWrapRef} 
                className={`bg-white w-[90%] md:w-[500px] lg:w-[750px] px-4 md:px-8 lg:px-[120px] rounded-[24px] overflow-hidden
                ${withOptions ? "pt-[4.5rem] pb-[6rem]" : "py-[3.125rem]"}`}
            >
                <div className="w-full grid gap-16">
                    <div className="w-full grid gap-6 justify-center items-center">
                        <img src={confirmed} alt="" className="w-[75px] md:w-[150px] mx-auto" />
                        <p className="text-[#3F3F3F] font-medium text-2xl md:text-4xl leading-[100%]">
                            Order confirmed
                        </p>
                    </div>
                    {withOptions ? (
                        <div className="w-full grid gap-11">
                            <RoundedButton text="Schedule installation" clickHandler={scheduleInstallation} />
                            <RoundedButton 
                                text="No, thanks" 
                                styles={{ background: "#C4DAEC" }}
                                textStyles={{ color: "#3F3F3F" }} 
                                clickHandler={closeModalAndNavigate} 
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </section>
    )
}

OrderConfirmedModal.propTypes = {
    orderConfirmedModalActive: PropTypes.bool,
    setOrderConfirmedModalActive: PropTypes.func,
    withOptions: PropTypes.bool
}

export default OrderConfirmedModal;