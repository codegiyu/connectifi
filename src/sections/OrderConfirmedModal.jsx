import PropTypes from "prop-types";
import useScrollBlock from "../hooks/useScrollBlock";
import { useEffect, useRef } from "react";
import confirmed from "../assets/confirmed.svg";
import { useNavigate } from "react-router-dom";

const OrderConfirmedModal = ({ orderConfirmedModalActive, setOrderConfirmedModalActive }) => {
    const [blockScroll, allowScroll] = useScrollBlock();

    const navigate = useNavigate();

    const modalWrapRef = useRef(null);

    const checkClickPosition = (e) => {
        const target = e.target;
        const authSection = modalWrapRef.current

        if (authSection && !authSection.contains(target)) {
            setOrderConfirmedModalActive(false);
            navigate("/");
        }
    }

    useEffect(() => {
        if (orderConfirmedModalActive) {
            blockScroll();
        } else {
            allowScroll();
        }
    }, [orderConfirmedModalActive, blockScroll, allowScroll])

    if (!orderConfirmedModalActive) return null;
    return (
        <section 
            className="w-screen h-screen fixed top-0 left-0 z-[60] bg-[#0000009f] grid place-items-center" 
            onClick={checkClickPosition}
        >
            <div
                ref={modalWrapRef} 
                className="bg-white w-[90%] md:w-[500px] lg:w-[750px] rounded-[24px] overflow-hidden"
            >
                <div className="w-full px-4 py-[3.125rem] grid gap-6 justify-center items-center">
                    <img src={confirmed} alt="" className="w-[75px] md:w-[150px]" />
                    <p className="text-[#3F3F3F] font-medium text-2xl md:text-4xl leading-[100%]">
                        Order confirmed
                    </p>
                </div>
            </div>
        </section>
    )
}

OrderConfirmedModal.propTypes = {
    orderConfirmedModalActive: PropTypes.bool,
    setOrderConfirmedModalActive: PropTypes.func,
}

export default OrderConfirmedModal;