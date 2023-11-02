import { useState } from "react";
import ToggleInput from "../../components/Inputs/ToggleInput";
import PlanSingle from "../../components/PlanSingle";
import { sitePlans } from "../../data/packagesData";


const Plans = () => {
    const [isYearly, setIsYearly] = useState(false);

    const togglePeriod = () => setIsYearly(prevState => !prevState);

    return (
        <section className="p-container pt-[3.125rem]">
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

                <div className="grid lg: grid-cols-3 items-stretch gap-6">
                    {sitePlans.map((item,idx) => (
                        <PlanSingle
                            key={idx} 
                            icon={item.icon}
                            heading={item.heading}
                            data={item.data}
                            price={item.price}
                            duration={item.duration}
                            text={item.text}
                            perks={item.perks}
                        />
                    ))}
                </div>
            </section>
        </section>
    )
}

export default Plans;