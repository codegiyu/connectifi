import { toast } from "react-toastify";

const useNotAvailable = () => {
    const unavailable = () => {
        toast.warn("Sorry, this feature is not yet available")
    }

    return {
        unavailable
    }
}

export default useNotAvailable;