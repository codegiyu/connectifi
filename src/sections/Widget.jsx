import message from "../assets/chat-bubble.svg";

const Widget = () => {
    const toggleWidget = () => {

    }

    return (
        <button 
            type="button"
            className="fixed bottom-[6.25rem] right-[6.25rem] w-[6.25rem] h-[6.25rem] p-4 rounded-full bg-[#C3D8E5] active:scale-[0.95] z-50"
            onClick={toggleWidget}
        >
            <div className="w-full h-full bg-bright-blue grid place-items-center rounded-full">
                <img src={message} alt="" className="w-11 h-11" />
            </div>
        </button>
    )
}

export default Widget;