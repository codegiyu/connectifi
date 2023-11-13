import message from "../assets/chat-bubble.svg";
import useAppStore from "../store/useAppStore";

const Widget = () => {
    const toggleChat = useAppStore(state => state.toggleWidgetChat);

    const toggleWidget = () => {
        toggleChat();
    }

    return (
        <button 
            type="button"
            className="fixed bottom-[3.125rem] right-[1.125rem] w-[4.5rem] h-[4.5rem] p-2 md:bottom-[6.25rem] md:right-[6.25rem] md:w-[6.25rem] 
            md:h-[6.25rem] md:p-4 rounded-full bg-[#C3D8E5] active:scale-[0.95] z-50"
            onClick={toggleWidget}
        >
            <div className="w-full h-full bg-bright-blue grid place-items-center rounded-full">
                <img src={message} alt="" className="w-7 md:w-11 h-7 md:h-11" />
            </div>
        </button>
    )
}

export default Widget;