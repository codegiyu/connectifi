import cubes from "../../assets/convert-3d-cube.svg";
import router from "../../assets/images/router-wifi.png";
import arrow from "../../assets/curly-arrow.svg";
import TitleWithBtn from "../../components/TitleWithBtn";
import { useCallback, useEffect, useState } from "react";
import TimeBoxGroup from "../../components/TimeBoxGroup";
import { LazyLoadImage } from "react-lazy-load-image-component";

const DealOfTheDay = () => {
    const initialValue = JSON.parse(localStorage.getItem("countDown") || '{ "hour": 9, "min": 59, "sec": 59 }')
    const [timeLeft, setTimeLeft] = useState(initialValue);

    const tick = useCallback(() => {
        let sec = timeLeft.sec, min = timeLeft.min, hour = timeLeft.hour;

        if (sec > 0) {
            sec--;
        } else if (sec == 0 && min > 0) {
            min--;
            sec = 59;
        } else if (sec == 0 && min == 0 && hour > 0) {
            hour--;
            min = 59;
            sec = 59;
        } else {
            hour = 9
        }

        setTimeLeft({ hour, min, sec })
        localStorage.setItem("countDown", JSON.stringify({ hour, min, sec }))
    }, [timeLeft.hour, timeLeft.min, timeLeft.sec])

    useEffect(() => {
        setTimeout(() => {
            tick();
        }, 1000)
    }, [timeLeft.sec, tick])

    return (
        <section className="w-full py-[6.25rem]">
            <section className="p-container grid gap-[3.125rem]">
                <TitleWithBtn heading="Deal Of The Day" />
                <div className="w-full rounded-[40px] bg-pri-blue grid lg:grid-cols-2 items-center px-4 lg:px-[45px]">
                    <div className="w-full h-fit my-10 lg:my-5 grid gap-8">
                        <div className="w-full flex items-center gap-[10px]">
                            <span className="text-white body-text-6-medium md:body-text-4">Time Left:</span>
                            <TimeBoxGroup
                                hour={String(timeLeft.hour).padStart(2, "0")}
                                min={String(timeLeft.min).padStart(2, "0")}
                                sec={String(timeLeft.sec).padStart(2, "0")}
                            />
                        </div>
                        <div className="w-full flex gap-[10px] items-center text-white font-medium">
                            <span className="body-text-1 md:heading-3-medium">
                                AlwaysOn + Router
                            </span>
                            <span className="body-text-6-medium md:body-text-4">
                                + Free Installation
                            </span>
                        </div>
                        <div className="w-full flex items-center gap-[10px]">
                            <div className="bg-white py-[15px] px-[14px] rounded-[10px] flex-none">
                                <img src={cubes} alt="" className="w-5 h-5 md:w-6 md:h-6" />
                            </div>
                            <p className="lg:max-w-[300px] body-text-6-medium md:body-text-4 capitalize text-white">
                                Up to 10 users can connect to the internet via several users
                            </p>
                        </div>
                        <div className="w-fit mx-auto lg:mx-0 flex items-center gap-8 relative">
                            <span className="text-[#BEBEBE] text-base md:text-[22.67px] font-medium line-through leading-[27px]">₦45,500</span>
                            <span className="text-white body-text-2 md:heading-3 font-bold lg:heading-2-bold">₦40,000</span>
                            <img src={arrow} alt="" className="absolute bottom-[30px] left-[306px] hidden lg:block" />
                        </div>
                    </div>
                    <div className="w-full md:w-[609px] mx-auto aspect-[1.5] flex items-center justify-center">
                        <LazyLoadImage
                            src={router}
                            alt=""
                            className="lg:translate-y-[10px] lg:translate-x-[-50px] lg:scale-75 xl:scale-100 aspect-[1.5] object-cover"
                            width={609}
                            height={405}
                        />
                    </div>
                </div>
            </section>
        </section>
    )
}

export default DealOfTheDay;