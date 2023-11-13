import { Link } from "react-router-dom"
import GoToTop from "../hooks/GoToTop"

const NoPage = () => {

    return (
        <div className="h-screen p-container grid place-items-center">
            <GoToTop />
            <p className="text-center text-2xl">
                Sorry, this page does not exist. You can return to <Link to="/" className="font-bold underline text-blue-600">Home</Link>
            </p>
        </div>
    )
}

export default NoPage