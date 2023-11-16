import PropTypes from "prop-types";
import RegButton from "./RegButton";
import { useSearchParams } from "react-router-dom";
// import Perk from "./Perk";

const PlanSingle = ({providerIcon, networkIndex, packageIndex, packageType, price, duration, benefits}) => {
    const [, setSearchParams] = useSearchParams();

    const handleBuy = () => {
        setSearchParams({
            network: networkIndex,
            packageType: packageIndex,
            option: `${benefits} - (₦${price})` 
        })
    }

    return (
        <div className="w-[375px] flex-none bg-white p-[60px_20px_40px] rounded-[18px] grid gap-8 justify-items-center">
            <div className="w-full flex justify-center">
                <img src={providerIcon} alt="" className="h-[100px]" />
            </div>
            <h3 className="body-text-1 md:heading-3 text-[#3F3F3F] mt-[2px] text-center">
                { packageType }
            </h3>
            <p className="w-max flex gap-1 items-end text-[#3F3F3F] text-center">
                <span className="text-[22px] leading-7 font-semibold">
                    {`₦${price.toLocaleString()}`}
                </span>
                <span className="text-base">
                    {` / ${duration}`}
                </span>
            </p>
            <p className="text-[#667085] text-lg leading-[25px] mt-2">
                {benefits}
            </p>

            <div className="w-full mt-[16px] flex justify-center">
                <RegButton 
                    text="Buy"
                    clickHandler={handleBuy}
                    styles={{ padding: "12px 28px", borderRadius: "8px", width: "fit-content" }}
                    textStyles={{ fontSize: "24px" }}
                />
            </div>
        </div>
    )
}

PlanSingle.propTypes = {
    providerIcon: PropTypes.string, 
    packageType: PropTypes.string, 
    networkIndex: PropTypes.string, 
    packageIndex: PropTypes.string, 
    price: PropTypes.number, 
    duration: PropTypes.string, 
    benefits: PropTypes.string
}

export default PlanSingle;