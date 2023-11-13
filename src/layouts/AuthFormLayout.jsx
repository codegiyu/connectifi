import PropTypes from "prop-types";
import RegButton from "../components/RegButton";
import useAppStore from "../store/useAppStore";
import useNotAvailable from "../hooks/useNotAvailable";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import logo from "../assets/logo-red.svg";

const AuthFormLayout = ({ heading, text, children, submitHandler, bottomText, bottomLinkText, bottomLinkFunc, topRef }) => {
    const activeAuthScreen = useAppStore(state => state.activeAuthScreen);
    const closeAuth = useAppStore(state => state.closeAuth);
    const signInWithGoogle = useAppStore(state => state.googleSignIn);
    const { unavailable } = useNotAvailable();

    const handleGoogleAuthProcess = async () => {
        const res = await signInWithGoogle();

        if (res) {
            closeAuth();
        }
    }

    return (
        <section className="w-full">
            <div className="w-full p-7 mb-14 flex gap-3 items-center justify-center z-[95]" ref={topRef}>
                <img src={logo} alt="" className="w-[22px] h-[22px]" />
                <span className='font-bold text-[22px] leading-[32px] text-white'>Connectifi</span>
            </div>
            <div className="w-full grid gap-2 mb-14 text-center">
                <h2 className="text-4xl leading-[2.75rem] text-white font-bold">
                    { heading }
                </h2>
                <p className="text-base leading-5 text-[#DFDFDF]">
                    { text }
                </p>
            </div>

            <form onSubmit={submitHandler} className="w-full grid gap-10">
                <div>
                    { children }
                </div>
                <div className="w-full">
                    <RegButton 
                        type="submit" 
                        text={heading}
                        styles={{ background: "white", padding: "16px", borderRadius: "8px" }}
                        textStyles={{ color: "#585858", fontSize: "20px", lineHeight: "20px", fontMedium: "400" }}
                    />
                </div>
            </form>

            <div className="flex items-center gap-1 flex-nowrap mt-12 mb-7">
                <span className="w-full h-[0.5px] flex-1 bg-white"></span>
                <span className="text-white">Or</span>
                <span className="w-full h-[0.5px] flex-1 bg-white"></span>
            </div>

            <div className="w-full flex items-center justify-center gap-6">
                <button 
                    onClick={handleGoogleAuthProcess}
                    className="w-fit p-4 rounded-lg border border-white flex items-center justify-center gap-[10px]"
                >
                    <img src={google} alt="" className="w-[22px] h-[22px]" />
                    <span className="text-white text-xl leading-5 ">
                        {`Sign ${activeAuthScreen === "register" ? "up" : "in"} with Google`}
                    </span>
                </button>
                <button 
                    onClick={unavailable}
                    className="w-fit p-4 rounded-lg border border-white flex items-center justify-center gap-[10px]"
                >
                    <img src={facebook} alt="" className="w-[22px] h-[22px]" />
                    <span className="text-white text-xl leading-5 ">
                        {`Sign ${activeAuthScreen === "register" ? "up" : "in"} with Facebook`}
                    </span>
                </button>
            </div>

            <p className="text-base leading-5 text-[#DFDFDF] text-center mt-8">
                <span>
                    { bottomText }
                </span>
                {" "}
                <span className="text-white font-bold cursor-pointer" onClick={bottomLinkFunc}>
                    { bottomLinkText }
                </span>
            </p>
        </section>
    )
}

AuthFormLayout.propTypes = {
    heading: PropTypes.string, 
    text: PropTypes.string, 
    children: PropTypes.element, 
    submitHandler: PropTypes.func,
    bottomText: PropTypes.string, 
    bottomLinkText: PropTypes.string, 
    bottomLinkFunc: PropTypes.func,
    topRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(HTMLDivElement)})
    ])
}

export default AuthFormLayout;