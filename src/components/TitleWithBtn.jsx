import useNotAvailable from "../hooks/useNotAvailable";
import RoundedButton from "./RoundedButton";
import PropTypes from "prop-types";

const TitleWithBtn = ({ heading, btnText = "" }) => {
    const { unavailable } = useNotAvailable();

    return (
        <div className="w-full grid grid-cols-[1fr_auto] items-center">
            <h2 className="body-text-2 md:heading-3 font-medium lg:heading-2 justify-self-start">{heading}</h2>
            {btnText ? (
                <div className="w-fit flex justify-end">
                    <RoundedButton text={btnText} clickHandler={unavailable} />
                </div>
            ) : null}
        </div>
    )
}

TitleWithBtn.propTypes = {
    heading: PropTypes.string,
    btnText: PropTypes.string,
}

export default TitleWithBtn;