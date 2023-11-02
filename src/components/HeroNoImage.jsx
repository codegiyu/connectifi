import PropTypes from "prop-types";
import RoundedButton from "./RoundedButton";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow-down-right.svg";

const HeroNoImage = ({ heading, text, btnText, btnLink }) => {
    const navigate = useNavigate();

    return (
        <section className={`z-0 bg-[#F6F6F6] relative`}>
            <section className="w-full pt-16 md:pt-24 lg:pt-0">
                <section
                    className={`pt-[6.25rem] z-[2] relative p-container grid gap-4 `}
                >
                    <h1
                        className={`heading-4 font-bold md:heading-2-bold lg:heading-1-bold text-[#3F3F3F] text-center w-[85%] mx-auto`}
                    >
                        {heading}
                    </h1>
                    <p
                        className="body-text-5 lg:body-text-3 text-grey-89 text-center"
                    >
                        {text}
                    </p>
                    <div className="w-full flex justify-center">
                        <RoundedButton
                            text={btnText}
                            clickHandler={() => navigate(btnLink)}
                            rightIcon={arrow}
                        />
                    </div>
                </section>
            </section>
        </section>
    )
}

HeroNoImage.propTypes = {
    heading: PropTypes.string,
    text: PropTypes.string,
    btnText: PropTypes.string,
    btnLink: PropTypes.string
}

export default HeroNoImage;