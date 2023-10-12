import PropTypes from "prop-types";
import { useState } from "react";
import arrow from "../assets/arrow.svg";

const FaqSingle = ({ question, answer }) => {
    const [answerOpen, setAnswerOpen] = useState(false);

    const toggleAnswer = () => {
        setAnswerOpen((prev) => !prev);
    }

    return (
        <div className="w-full grid overflow-hidden">
            <div className={`w-full flex justify-between items-center gap-[10px] px-2 py-4 lg:p-4 border-[#AEAEAE] \
            ${answerOpen ? "border-[0.5px]" : "border-none"} rounded-lg`}>
                <h4 className="body-text-6 md:body-text-3 font-medium text-dark-19">
                    {question}
                </h4>
                <button className="w-fit bg-transparent border-none focus:outline-none" onClick={toggleAnswer}>
                    <img src={arrow} alt="" className={`w-6 transition-all duration-500 ease-in-out ${answerOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
            </div>
            <div className={`w-full pl-8 pr-8 md:pr-12 lg:pr-16 transition-all duration-500 ease-in-out overflow-hidden ${answerOpen ?
                "max-h-fit opacity-100 py-5" : "max-h-0 opacity-20"}`}>
                <p className="body-text-6-medium lg:body-text-4 text-grey-89">
                    {answer}
                </p>
            </div>
        </div>
    )
}

FaqSingle.propTypes = {
    question: PropTypes.string,
    answer: PropTypes.string
}

export default FaqSingle;