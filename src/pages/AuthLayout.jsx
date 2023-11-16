import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import useAppStore from "../store/useAppStore";
import authImg from "../assets/images/login-img.png";
import RegisterForm from "../sections/Auth/RegisterForm";
import useScrollBlock from "../hooks/useScrollBlock";
import LoginForm from "../sections/Auth/LoginForm";
import dotsLoading from "../assets/three-dots-loading.svg";

const AuthLayout = () => {
    const authIsOpen = useAppStore(state => state.authIsOpen);
    const isLoading = useAppStore(state => state.isLoading);
    const closeAuth = useAppStore(state => state.closeAuth);
    const activeAuthScreen = useAppStore(state => state.activeAuthScreen);

    const [blockScroll, allowScroll] = useScrollBlock();

    const authSectionRef = useRef(null);
    const loginTopRef = useRef(null);
    const registerTopRef = useRef(null);

    const checkClickPosition = (e) => {
        const target = e.target;
        const authSection = authSectionRef.current

        if (authSection && !authSection.contains(target)) {
            closeAuth();
        }
    }

    useEffect(() => {
        if (authIsOpen) {
            blockScroll();
        } else {
            allowScroll();
        }
    }, [authIsOpen, blockScroll, allowScroll])

    useEffect(() => {
        if (activeAuthScreen === "register" && registerTopRef.current) {
            registerTopRef.current.scrollIntoView({ behavior: "smooth" })
        } else if (activeAuthScreen === "login" && loginTopRef.current) {
            loginTopRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [activeAuthScreen])

    if (!authIsOpen) return null;
    return (
        <section 
            className="w-screen h-screen fixed top-0 left-0 z-[90] bg-[#0000009f] grid place-items-center" 
            onClick={checkClickPosition}
        >
            <section className="w-[90%] xl:w-[1200px] h-[80%] bg-white grid lg:grid-cols-2 relative" ref={authSectionRef}>
                <div className="w-full h-full relative z-[95] hidden lg:grid place-items-center p-16 overflow-hidden">
                    <img src={authImg} alt="" className="max-h-[90%]" />
                </div>

                <div className="w-full h-full relative bg-bright-blue z-[91] overflow-hidden">
                    <div 
                        className={`w-full h-full relative bg-bright-blue z-[91] flex flex-nowrap overflow-visible transition-all duration-500 ease-in
                        ${activeAuthScreen === "register" ? "-translate-x-[100%]" : "translate-x-0"}`}
                    >
                        <div
                            className={`w-full h-full bg-transparent flex-none grid pb-12 px-4 sm:px-10 md:px-20 overflow-y-auto custom-scrollbar`}
                        >
                            <LoginForm topRef={loginTopRef} />
                        </div>
                        <div
                            className={`w-full h-full bg-transparent flex-none grid pb-12 px-4 sm:px-10 md:px-20 overflow-y-auto custom-scrollbar`}
                        >
                            <RegisterForm topRef={registerTopRef} />
                        </div>
                    </div>
                </div>

                {isLoading ? (
                    <div className="w-full h-full bg-[#ffffffd8] absolute top-0 left-0 grid place-items-center z-[99]">
                        <img src={dotsLoading} alt="" className="w-[300px] text-bright-blue" />
                    </div>
                ) : null}
            </section>
        </section>
    )
}

AuthLayout.propTypes = {
    children: PropTypes.element
}

export default AuthLayout