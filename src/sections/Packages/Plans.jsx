// import { useState } from "react";
// import ToggleInput from "../../components/Inputs/ToggleInput";
import { useEffect, useLayoutEffect, useState } from "react";
import PlanSingle from "../../components/PlanSingle";
import { ALL_PLANS } from "../../data/packagesData";
// import { randomizeArray } from "../../utils/randomizeArray";
// import { sitePlans } from "../../data/packagesData";


const Plans = () => {
    // const [isYearly, setIsYearly] = useState(false);
    // const togglePeriod = () => setIsYearly(prevState => !prevState);

    const [leftBtnDisabled, setleftBtnDisabled] = useState(true);
    const [rightBtnDisabled, setRightBtnDisabled] = useState(false);
    const [translateX, setTranslateX] = useState(0);
    const [screenWidth, setScreenWidth] = useState(0);
    const [maxSlideContainerExtension, setMaxSlideContainerExtension] = useState(0);

    const PLAN_CARD_WIDTH = 375;
    const PLAN_CARD_GAP = 24;

    const slidePlansLeft = () => {
        setTranslateX(prevState => prevState + PLAN_CARD_WIDTH + PLAN_CARD_GAP)
    }

    const slidePlansRight = () => {
        setTranslateX(prevState => prevState - PLAN_CARD_WIDTH - PLAN_CARD_GAP)
    }

    const updateScreenWidth = () => {
        setScreenWidth(window.innerWidth);
    }

    useLayoutEffect(() => {
        window.addEventListener("resize", updateScreenWidth);

        return () => {
            window.removeEventListener("resize", updateScreenWidth);
        }
    }, [])

    useEffect(() => {
        const slidesNum = ALL_PLANS.length;
        const totalSlideWidth = (slidesNum * PLAN_CARD_WIDTH) + ((slidesNum - 1) * PLAN_CARD_GAP);
        const maxExtension = totalSlideWidth - screenWidth;

        setMaxSlideContainerExtension(maxExtension);
    }, [screenWidth])

    useEffect(() => {
        if (translateX >= 0) {
            setTranslateX(0);
            setleftBtnDisabled(true);
        } else {
            setleftBtnDisabled(false)
        }

        // const slidesPerView = Math.floor(screenWidth / (PLAN_CARD_WIDTH + PLAN_CARD_GAP))

        if (translateX  <= maxSlideContainerExtension * -1) {
            setRightBtnDisabled(true);
        } else {
            setRightBtnDisabled(false);
        }

        // if (translateX <= (PLAN_CARD_GAP + PLAN_CARD_WIDTH) * -1) {
        //     setleftBtnDisabled(false);
        // }
    }, [translateX, maxSlideContainerExtension, screenWidth])

    return (
        <section className=" pt-[3.125rem]">
            <section className="grid gap-6">
                {/* <div className="w-full flex justify-center">
                    <div className="flex gap-6 items-center p-6">
                        <span className={`body-text-5 lg:body-text-3 ${!isYearly ? "font-bold text-[#3F3F3F]" : "font-medium text-grey-89"}`}>
                            Monthly
                        </span>
                        <ToggleInput name="period" value={isYearly} changeHandler={togglePeriod} />
                        <span className={`body-text-5 lg:body-text-3 ${isYearly ? "font-bold text-[#3F3F3F]" : "font-medium text-grey-89"}`}>
                            Yearly
                        </span>
                    </div>
                </div> */}

                <div className="w-full overflow-hidden">
                    <div className={`flex flex-nowrap gap-[24px] transition-all duration-500 ease-in-out`} style={{ transform: `translateX(${translateX}px)` }}>
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
                </div>

                <div className="w-full p-container flex gap-2 justify-end items-center">
                    <button 
                        className="hover:scale-110"
                        onClick={slidePlansLeft}
                        disabled={leftBtnDisabled}
                    >
                        {leftBtnDisabled ? (
                            <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                                <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M5.9013 1.21967C5.61591 0.926777 5.15328 0.926777 4.86789 1.21967L1.21404 4.96967C0.928652 5.26256 0.928652 5.73744 1.21404 6.03033L4.86789 9.78033C5.15328 10.0732 5.61591 10.0732 5.9013 9.78033C6.18669 9.48744 6.18669 9.01256 5.9013 8.71967L3.49502 6.25H19.2692C19.6728 6.25 20 5.91421 20 5.5C20 5.08579 19.6728 4.75 19.2692 4.75H3.49502L5.9013 2.28033C6.18669 1.98744 6.18669 1.51256 5.9013 1.21967Z" fill="#DAE9F2" stroke="#DAE9F2"/>
                            </svg>
                        ) : (
                            <svg width="31" height="15" viewBox="0 0 31 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[180deg]">
                                <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M22.5191 1.3173C22.9547 0.894233 23.6608 0.894233 24.0964 1.3173L29.6733 6.73397C30.1089 7.15703 30.1089 7.84297 29.6733 8.26603L24.0964 13.6827C23.6608 14.1058 22.9547 14.1058 22.5191 13.6827C22.0835 13.2596 22.0835 12.5737 22.5191 12.1506L26.1918 8.58333H2.11539C1.49937 8.58333 1 8.0983 1 7.5C1 6.9017 1.49937 6.41667 2.11539 6.41667H26.1918L22.5191 2.84937C22.0835 2.4263 22.0835 1.74036 22.5191 1.3173Z" fill="#049BFF" stroke="#049BFF"/>
                            </svg>
                        )}
                    </button>
                    <button 
                        className="hover:scale-110"
                        onClick={slidePlansRight}
                        disabled={rightBtnDisabled}
                    >
                        {rightBtnDisabled ? (
                            <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-[180deg]">
                                <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M5.9013 1.21967C5.61591 0.926777 5.15328 0.926777 4.86789 1.21967L1.21404 4.96967C0.928652 5.26256 0.928652 5.73744 1.21404 6.03033L4.86789 9.78033C5.15328 10.0732 5.61591 10.0732 5.9013 9.78033C6.18669 9.48744 6.18669 9.01256 5.9013 8.71967L3.49502 6.25H19.2692C19.6728 6.25 20 5.91421 20 5.5C20 5.08579 19.6728 4.75 19.2692 4.75H3.49502L5.9013 2.28033C6.18669 1.98744 6.18669 1.51256 5.9013 1.21967Z" fill="#DAE9F2" stroke="#DAE9F2"/>
                            </svg>
                        ) : (
                            <svg width="31" height="15" viewBox="0 0 31 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                                <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M22.5191 1.3173C22.9547 0.894233 23.6608 0.894233 24.0964 1.3173L29.6733 6.73397C30.1089 7.15703 30.1089 7.84297 29.6733 8.26603L24.0964 13.6827C23.6608 14.1058 22.9547 14.1058 22.5191 13.6827C22.0835 13.2596 22.0835 12.5737 22.5191 12.1506L26.1918 8.58333H2.11539C1.49937 8.58333 1 8.0983 1 7.5C1 6.9017 1.49937 6.41667 2.11539 6.41667H26.1918L22.5191 2.84937C22.0835 2.4263 22.0835 1.74036 22.5191 1.3173Z" fill="#049BFF" stroke="#049BFF"/>
                            </svg>
                        )}
                    </button>
                </div>
            </section>
        </section>
    )
}

export default Plans;