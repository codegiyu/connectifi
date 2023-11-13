import { Link, NavLink } from 'react-router-dom';
import logo from "../assets/logo-red.svg";
import menuOpen from "../assets/menu-open.svg";
import menuClose from "../assets/menu-close.svg";
import RoundedButton from '../components/RoundedButton';
import { useCallback, useEffect, useRef, useState } from 'react';
import useScrollBlock from '../hooks/useScrollBlock';
import useNotAvailable from '../hooks/useNotAvailable';
import useAppStore from '../store/useAppStore';
import getInitials from '../utils/getInitials';
import caretDown from "../assets/caret-down-filled.svg";
import roundLoading from "../assets/round-loading.svg";
import profileIcon from "../assets/profile.svg";
import logoutIcon from "../assets/logout.svg";

const WhiteHeader = () => {
    const openAuth = useAppStore(state => state.openAuth);
    const closeAuth = useAppStore(state => state.closeAuth);
    const isLoading = useAppStore(state => state.isLoading);
    const logoutUser = useAppStore(state => state.logoutUser);
    const user = useAppStore(state => state.user);
    const [blockScroll, allowScroll] = useScrollBlock();
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
    const { unavailable } = useNotAvailable();

    const userMenuRef = useRef(null);
    const userMenuBtnRef = useRef(null);

    const openMenu = () => setMenuIsOpen(true);
    const closeMenu = () => setMenuIsOpen(false);

    const openUserMenu = () => setUserMenuIsOpen(true);
    const closeUserMenu = () => setUserMenuIsOpen(false);

    const navLinkClasses = ({ isActive }) => {
        return `${isActive ? "font-bold text-[#17374D]" : "text-dark-19 lg:text-grey-89"} text-sm md:text-xl leading-[18px] md:leading-[100%] hover:text-[#17374D]`
    }

    const navLinkClassesMob = ({ isActive }) => {
        return `${isActive ? "font-bold text-[#17374D]" : "text-dark-19 lg:text-grey-89"} text-sm md:text-xl leading-[18px] md:leading-[100%] hover:text-[#17374D] w-full p-[10px]`
    }

    const handleSignUpClick = () => {
        closeMenu();
        openAuth();
    }

    const handleUserMenuClick = () => {
        unavailable();
        closeUserMenu();
    }

    const handleLogout = async () => {
        const res = await logoutUser();

        if (res) {
            closeUserMenu();
        }
    }

    const checkClickPosition = useCallback((e) => {
        const target = e.target;
        const userMenu = userMenuRef.current;
        const userMenuBtn = userMenuBtnRef.current;

        if (userMenuIsOpen && userMenu && userMenuBtn) {
            if (!userMenu.contains(target) && !userMenuBtn.contains(target)) {
                closeUserMenu();
            }
        }
    }, [userMenuIsOpen])

    useEffect(() => {
        closeAuth();
    }, [closeAuth])

    useEffect(() => {

        document.body.addEventListener("click", checkClickPosition);

        return () => {
            document.body.removeEventListener("click", checkClickPosition);
        }
    }, [checkClickPosition])

    useEffect(() => {
        menuIsOpen ? blockScroll() : allowScroll();

        return () => allowScroll();
    }, [menuIsOpen, blockScroll, allowScroll])

    return (
        <header className="w-full bg-transparent relative py-2 md:py-6 lg:py-[3.125rem]">
            <section className='bg-transparent p-container'>
                <div className="w-full flex justify-between items-center">
                    <Link to="/" className="text-decoration-none text-dark-19">
                        <div className="py-4 flex items-center gap-[0.625rem]">
                            <img src={logo} alt="" className="w-[1.375rem] md:w-8" />
                            <span className='font-bold text-2xl md:text-4xl leading-[100%]'>Connectifi</span>
                        </div>
                    </Link>
                    <nav className='w-fit hidden lg:block'>
                        <ul className='w-max p-4 flex gap-10 list-none'>
                            <li className='w-max'>
                                <NavLink to="/" className={navLinkClasses}>
                                    Home
                                </NavLink>
                            </li>
                            <li className='w-max'>
                                <NavLink to="/packages" className={navLinkClasses}>
                                    Packages
                                </NavLink>
                            </li>
                            <li className='w-max'>
                                <NavLink to="/products-and-services" className={navLinkClasses}>
                                    Products & Services
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    {user ? (
                        <div className="w-fit hidden lg:flex items-center gap-2 relative">
                            <div className="w-[3.125rem] h-[3.125rem] rounded-full overflow-hidden">
                                {user.photo ? (
                                    <img src={user.photo} alt={getInitials(user.first_name || "", user.last_name || "")} className="w-full h-full object-cover rounded-full" />
                                ) : (
                                    <div className="w-full h-full rounded-full bg-[#17374D] grid place-items-center text-white">
                                        <span className="text-xl">
                                            {getInitials(user.first_name || "", user.last_name || "")}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <p className="text-xl leading-[100%] text-[#3F3F3F] font-semibold">
                                { user.first_name }
                            </p>
                            <button ref={userMenuBtnRef} className="w-fit bg-transparent border-none outline-none" onClick={userMenuIsOpen ? closeUserMenu : openUserMenu}>
                                <img src={caretDown} alt="" className="w-6 h-6" />
                            </button>
                            <div 
                                ref={userMenuRef}
                                className={`w-[150px] absolute top-[3.625rem] right-0 p-1 rounded-lg shadow-service ${userMenuIsOpen ? "grid" : "hidden"} z-[5]`}
                            >
                                <p
                                    className="body-text-5 p-2 text-[#3F3F3F] flex items-center gap-2 text-center"
                                    onClick={handleUserMenuClick}
                                >
                                    <img src={profileIcon} alt="" className="w-[18px]" />
                                    <span>Profile</span>
                                </p>
                                <p
                                    className="body-text-5 p-2 text-[#F93232] flex items-center gap-2 text-center"
                                    onClick={handleLogout}
                                >
                                    <img src={logoutIcon} alt="" className="w-[18px]" />
                                    <span>Logout</span>
                                    <img src={roundLoading} alt="" className={`w-5 h-5 ${isLoading ? "block" : "hidden"}`} />
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className='w-fit hidden lg:block'>
                            <RoundedButton text="Sign Up" clickHandler={handleSignUpClick} />
                        </div>
                    )}
                    <button className="w-fit p-2 lg:hidden focus:outline-none border-none bg-transparent" onClick={openMenu}>
                        <img src={menuOpen} alt="" className="w-[30px] h-[30px] md:w-[36px] md:h-[36px]" />
                    </button>
                </div>
                {menuIsOpen ? (
                    <section className="w-full h-screen bg-[#00000099] absolute top-0 left-0 z-[200] lg:hidden">
                        <div className="w-full bg-white shadow pt-[26px] pb-[42px] pl-[16px] pr-[36px]">
                            <div className={`grid ${user ? "gap-8" : "gap-4"}`}>
                                <div className={`w-full flex ${user ? "justify-between" : "justify-end"}`}>
                                    {user ? (
                                        <div className="w-[3.125rem] h-[3.125rem] rounded-full overflow-hidden">
                                            {user.photo ? (
                                                <img src={user.photo} alt={getInitials(user.first_name || "", user.last_name || "")} className="w-full h-full object-cover rounded-full" />
                                            ) : (
                                                <div className="w-full h-full rounded-full bg-[#17374D] grid place-items-center text-white">
                                                    <span className="text-xl">
                                                        {getInitials(user.first_name || "", user.last_name || "")}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    ) : null}
                                    <button className="w-fit lg:hidden focus:outline-none border-none bg-transparent" onClick={closeMenu}>
                                        <img src={menuClose} alt="" className="w-[30px] h-[30px] md:w-[36px] md:h-[36px]" />
                                    </button>
                                </div>
                                <nav className='w-full'>
                                    <ul className='w-full grid list-none'>
                                        <li className='w-full py-[0.625rem] pl-2 pr-1 border-b-[0.5px] border-[#AEAEAE]'>
                                            <NavLink to="/" className={navLinkClassesMob}>
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className='w-full py-[0.625rem] pl-2 pr-1 border-b-[0.5px] border-[#AEAEAE]'>
                                            <NavLink to="/packages" className={navLinkClassesMob}>
                                                Packages
                                            </NavLink>
                                        </li>
                                        <li className='w-full py-[0.625rem] pl-2 pr-1 border-b-[0.5px] border-[#AEAEAE]'>
                                            <NavLink to="/products-and-services" className={navLinkClassesMob}>
                                                Products & Services
                                            </NavLink>
                                        </li>
                                    </ul>
                                </nav>
                                {!user ? (
                                    <div className="w-full pl-5 mt-[0.625rem]">
                                        <RoundedButton text="Sign Up" styles={{ width: "100%" }} clickHandler={handleSignUpClick} />
                                    </div>
                                ) : (
                                    <div 
                                        className={`w-full text-center px-5 mt-4`}
                                    >
                                        <p
                                            className="body-text-6 text-[#F93232] flex items-center gap-2"
                                            onClick={handleLogout}
                                        >
                                            <span>Logout</span>
                                            <img src={roundLoading} alt="" className={`w-5 h-5 ${isLoading ? "block" : "hidden"}`} />
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                ) : null}
            </section>
        </header>
    )
}

export default WhiteHeader;