import { useEffect, useRef, useState } from "react";
import send from "../assets/send.svg";
import ChatInput from "../components/Inputs/ChatInput";
import botPic from "../assets/images/bot-pic.png";
import ChatMessageSingle from "../components/ChatMessageSingle";

const WidgetChat = () => {
    const defaultMessage = {
        isUser: false,
        text: "Welcome to Connectifi Customer Service chat forum. If you need help, simply reply to this message with your user ID. We are online and ready to help.",
        img: botPic
    }
    const [newMessage, setNewMessage] = useState("");
    const [chatMessages, setChatMessages] = useState([defaultMessage]);
    const bottomViewRef = useRef(null);

    const scrollBottomMessageIntoView = () => {
        const el = bottomViewRef.current;

        if (el) {
            el.scrollIntoView({ behavior: "smooth" })
        }
    }

    const handleMessageChange = (e) => setNewMessage(e.target.value);

    const sendMessage = (e) => {
        e.preventDefault();

        const messageObj = {
            isUser: true,
            text: newMessage,
            img: "",
            initials: "CU"
        }
        setChatMessages((prevState) => ([...prevState, messageObj]))
        setNewMessage("");
    }

    useEffect(() => {
        scrollBottomMessageIntoView();
    }, [chatMessages.length])

    return (
        <div
            // tabIndex={5} 
            className="fixed bottom-[9.325rem] right-[14rem] w-[450px] h-[420px] bg-white rounded-[30px_30px_0_30px] shadow-reviewBox z-50 overflow-hidden"
        >
            <div className="relative w-full h-full grid grid-rows-[auto_1fr]">
                <div className="w-full py-7 px-[55px] bg-bright-blue z-20">
                    <p className="w-full text-center text-white text-base leading-[25px]">
                        We are available On Live Chat between 7am and 11pm. You can reach us on 0800000000 or care@connectifi.com.ng
                    </p>
                </div>
                <div className="w-full h-full relative grid overflow-hidden">
                    <div className="w-full h-full px-[30px] pb-[83px] overflow-auto grid items-end">
                        {chatMessages.map((item,idx) => (
                            <ChatMessageSingle
                                key={idx}
                                img={item.img || ""}
                                text={item.text || ""}
                                initials={item.initials || ""}
                                isUser={item.isUser || false}
                            />
                        ))}
                        <div ref={bottomViewRef} className="bottomView w-0 h-0 invisible"></div>
                    </div>
                    <form
                        className="w-full bg-white px-[30px] absolute bottom-0 left-0 pt-4 pb-[30px] flex gap-5 items-center z-20"
                        onSubmit={sendMessage}
                    >
                        <ChatInput name="messageText" value={newMessage} changeHandler={handleMessageChange} placeholder="Type your message" />
                        <button
                            type="submit"
                            className="bg-bright-blue w-10 h-10 rounded-full grid place-items-center"
                        >
                            <img src={send} alt="" className="w-5 h-5" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WidgetChat; 