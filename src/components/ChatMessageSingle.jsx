import PropTypes from "prop-types";

const ChatMessageSingle = ({ text, img = "", initials = "", isUser = false }) => {

    return (
        <div className={`w-[64%] pb-[1.5625rem] grid gap-2 ${isUser ? "grid-cols-[1fr_auto] justify-self-end" : "grid-cols-[auto_1fr]"}`}>
            <div className={`w-[3.125rem] h-full relative grid ${isUser ? "order-2" : "order-1"}`}>
                <div className="w-full h-[3.125rem] absolute -bottom-[1.5625rem] left-0">
                    {img ? (
                        <img src={img} alt={initials} className="w-full h-full object-cover rounded-full" />
                    ) : (
                        <div className="w-full h-full rounded-full bg-[#17374D] grid place-items-center text-white">
                            <span className="text-xl">
                                {initials}
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div 
                className={`w-full px-[15px] pt-6 pb-8 body-text-7 md:body-text-6 text-white 
                ${isUser ? "bg-[#17374D] rounded-[20px_20px_0_20px] order-1" : "bg-bright-blue rounded-[20px_20px_20px_0] order-2"}`}
            >
                { text }
            </div>
        </div>
    )
}

ChatMessageSingle.propTypes = {
    text: PropTypes.string,
    img: PropTypes.string,
    initials: PropTypes.string,
    isUser: PropTypes.bool
}

export default ChatMessageSingle;