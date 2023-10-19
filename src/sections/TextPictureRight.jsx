import PropTypes from "prop-types";
import RoundedButton from "../components/RoundedButton";
import useNotAvailable from "../hooks/useNotAvailable";
import { useNavigate } from "react-router-dom";

const TextPictureRight = ({ image, heading, text, btnText, link = "" }) => {
    const { unavailable } = useNotAvailable();
    const navigate = useNavigate();

    const handleClick = () => {
        if (link) {
            navigate(link)
        } else {
            unavailable();
        }
    }

    return (
        <section className="p-container py-8 md:py-12 lg:py-16 xl:py-20">
            <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                <div className="w-full grid gap-6 lg:self-center order-2 lg:order-1">
                    <h3 className="text-dark-19 heading-3 md:heading-2-bold">
                        {heading}
                    </h3>
                    <p className="text-grey-89 body-text-6 md:body-text-3">
                        {text}
                    </p>
                    <div>
                        <RoundedButton text={btnText} clickHandler={handleClick} />
                    </div>
                </div>
                <div className="w-full lg:self-center flex justify-center lg:justify-end items-center order-1 lg:order-2">
                    <img src={image} alt="" className="max-w-full rounded-2xl" />
                </div>
            </section>
        </section>
    )
}

TextPictureRight.propTypes = {
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
    btnText: PropTypes.string,
    link: PropTypes.string,
}

export default TextPictureRight;