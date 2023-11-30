import { toast } from "react-toastify";
import ScheduleInstallationForm from "../ScheduleInstallationForm";


const BookInstallation = () => {
    const submissionAction = () => {
        toast.success("Installation booked. Please be available at the scheduled time")
    }

    return (
        <section className="p-container pt-32">
            <ScheduleInstallationForm submissionAction={submissionAction} />
        </section>
    )
}

export default BookInstallation;