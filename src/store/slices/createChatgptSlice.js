import OpenAI from "openai";
import botPic from "../../assets/images/bot-pic.png";
import { toast } from "react-toastify";

const openai = new OpenAI({ 
    apiKey: import.meta.env.VITE_OPENAI_SECRET_KEY,
    dangerouslyAllowBrowser: true
});

const defaultMessage = {
    isUser: false,
    text: "Welcome to Connectifi Customer Service chat forum. If you need help, simply reply to this message with your user ID. We are online and ready to help.",
    img: botPic
}

const createChatgptSlice = (set, get) => ({
    widgetChatActive: false,
    sessionMessages: [defaultMessage],
    gptLoading: false,
    toggleWidgetChat: () => {
        const chatIsActive = get().widgetChatActive;
        set({ widgetChatActive: !chatIsActive });
    },
    sendPrompt: async (obj) => {
        try {
            if (get().gptLoading === true) return false;
            set({ gptLoading: true });
            // console.log(openai)
            // console.log(obj)

            set({ sessionMessages: obj.messages });

            const adjustedSessionChat = obj.messages.map((item) => ({
                role: item.isUser? "user" : "assistant",
                content: item.text
            }))

            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: adjustedSessionChat
            })
            
            const resMessage = {
                isUser: false,
                text: response.choices[0].message.content,
                img: botPic
            };

            set({ sessionMessages: [...obj.messages, resMessage]})
            
            return response;
        } catch (err) {
            console.error(err)
            toast.error("Some error occurred");
            return false;
        } finally {
            set({ gptLoading: false })
        }
    },
})

export default createChatgptSlice;