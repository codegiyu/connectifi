import { useState } from "react";
import OrderConfirmedModal from "../sections/OrderConfirmedModal";
import WhiteHeader from "../sections/WhiteHeader";
import ScheduleInstallationForm from "../sections/ScheduleInstallationForm";
import GoToTop from "../hooks/GoToTop";


const ScheduleInstallation = () => {
    const [orderConfirmedModalActive, setOrderConfirmedModalActive] = useState(false);

    const scheduleInstallation = () => {
        setOrderConfirmedModalActive(true);
    }

    return (
        <div className="bg-[#F6F6F6] min-h-screen">
            <WhiteHeader />
            <GoToTop />
            <main className='p-container-900 mt-32 pb-32'>
                <OrderConfirmedModal 
                    orderConfirmedModalActive={orderConfirmedModalActive} 
                    setOrderConfirmedModalActive={setOrderConfirmedModalActive} 
                />
                <section className="w-full bg-white pt-20 pb-[3.125rem] px-0 lg:px-16 rounded-[20px] shadow-service">
                    <ScheduleInstallationForm 
                        inDedicatedPage={true}
                        submissionAction={scheduleInstallation}
                    />
                </section>
            </main>
        </div>
    ) 
}

export default ScheduleInstallation;