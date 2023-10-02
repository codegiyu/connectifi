import { Link } from "react-router-dom"

const NoPage = () => {

    return (
        <div className="h-screen w-full grid place-items-center">
            <p className="text-center text-2xl">
                Sorry, this page does not exist. You can return to <Link to="/" className="font-bold underline text-blue-600">Home</Link>
            </p>
        </div>
    )
}

export default NoPage