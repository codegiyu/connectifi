import PropTypes from "prop-types";
import useScrollBlock from "../hooks/useScrollBlock";
import { useEffect, useRef } from "react";

const SelectPaymentOptionModal = ({selectPaymentModalActive, setSelectPaymentModalActive, setBuyNowModalActive}) => {
    const [blockScroll, allowScroll] = useScrollBlock();

    const modalWrapRef = useRef(null);

    const checkClickPosition = (e) => {
        const target = e.target;
        const authSection = modalWrapRef.current

        if (authSection && !authSection.contains(target)) {
            setSelectPaymentModalActive(false);
        }
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
            className="w-screen h-screen fixed top-0 left-0 z-[90] bg-[#0000009f] grid place-items-center" 
            onClick={checkClickPosition}
        >
            <div
                ref={modalWrapRef} 
                className=""
            >

            </div>
        </section>
    )
}

SelectPaymentOptionModal.propTypes = {
    selectPaymentModalActive: PropTypes.bool,
    setSelectPaymentModalActive: PropTypes.func,
    setBuyNowModalActive: PropTypes.func
}

export default SelectPaymentOptionModal;