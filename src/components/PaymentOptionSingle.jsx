import PropTypes from "prop-types";
import { useState } from "react";
import comingSoon from "../assets/coming-soon.svg";

const PaymentOptionSingle = ({ name, description, img = "", disabled = false, setOptionSelected }) => {
    const [selected, setSelected] = useState(false);

    const handleSelection = () => {
        setSelected(true);
        setOptionSelected(true);
    }

    return (
        <div className={`${disabled ? "bg-[#e1e1e1fe]" : "bg-transparent"} relative px-[28px] rounded-md`}>
            <div className={`w-full flex gap-[5px] my-3 ${disabled ? "opacity-30" : ""}`} onClick={disabled ? () => {} : handleSelection}>
                <div className={`rounded-full border border-[#3F3F3F] w-[20px] h-[20px] mt-1 p-[2px] }`}>
                    <div className={`${selected ? "bg-bright-blue" : ""} w-full h-full rounded-full transition-all duration-100 ease-in`}></div>
                </div>
                <div className="flex-1 pr-[30px] flex items-center justify-between">
                    <div className="grid gap-2">
                        <h6 className="text-[#3F3F3F] body-text-6 md:body-text-3 leading-[100%]">
                            {name}
                        </h6>
                        <p className="text-sm md:text-xl leading-[18px] md:leading-[120%] text-grey-89">
                            {description}
                        </p>
                    </div>
                    {img ? (
                        <img src={img} alt="" className="w-[40px]" />
                    ) : null}
                </div>
            </div>
            {disabled ? (
                <img src={comingSoon} alt="" className="h-full absolute top-0 left-[50%] z-[62]" />
            ) : null}
        </div>
    )
}

PaymentOptionSingle.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    disabled: PropTypes.bool,
    setOptionSelected: PropTypes.func,
}

export default PaymentOptionSingle;