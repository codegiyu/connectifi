import { useState } from "react";
import ToggleInput from "../../components/Inputs/ToggleInput";
import PlanSingle from "../../components/PlanSingle";
import { ALL_PLANS } from "../../data/packagesData";
import { randomizeArray } from "../../utils/randomizeArray";
// import { sitePlans } from "../../data/packagesData";


const Plans = () => {
    const [isYearly, setIsYearly] = useState(false);

    const togglePeriod = () => setIsYearly(prevState => !prevState);
    console.log(ALL_PLANS);
    console.log(randomizeArray([1,2,3,4,5,6,7,8,9,10]))

    return (
        <section className=" pt-[3.125rem]">
            <section className="grid gap-6">
                <div className="w-full flex justify-center">
                    <div className="flex gap-6 items-center p-6">
                        <span className={`body-text-5 lg:body-text-3 ${!isYearly ? "font-bold text-[#3F3F3F]" : "font-medium text-grey-89"}`}>
                            Monthly
                        </span>
                        <ToggleInput name="period" value={isYearly} changeHandler={togglePeriod} />
                        <span className={`body-text-5 lg:body-text-3 ${isYearly ? "font-bold text-[#3F3F3F]" : "font-medium text-grey-89"}`}>
                            Yearly
                        </span>
                    </div>
                </div>

                <div className="flex flex-nowrap gap-6 overflow-hidden">
                    {ALL_PLANS.map((item,idx) => (
                        <PlanSingle
                            key={idx} 
                            providerIcon={item.providerIcon} 
                            packageType={item.packageType}
                            networkIndex={item.networkIndex}
                            packageIndex={item.packageIndex}
                            price={item.price}
                            duration={item.duration}
                            benefits={item.benefits}
                        />
                    ))}
                </div>
            </section>
        </section>
    )
}

export default Plans;