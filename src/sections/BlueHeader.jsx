import { NavLink, Link } from 'react-router-dom';
import logo from "../assets/logo-red.svg";
import RoundedButton from '../components/RoundedButton';
import menuOpen from "../assets/menu-open-white.svg";
import menuClose from "../assets/menu-close.svg";
import { useEffect, useState } from 'react';
import useScrollBlock from '../hooks/useScrollBlock';
import useNotAvailable from '../hooks/useNotAvailable';

const BlueHeader = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();
    const { unavailable } = useNotAvailable();

    const openMenu = () => setMenuIsOpen(true);
    const closeMenu = () => setMenuIsOpen(false);

    const navLinkClasses = ({ isActive }) => {
        return `${isActive ? "font-bold text-white" : "text-grey-d9"} text-xl leading-[100%] hover:text-white`
    }

    const navLinkClassesMob = ({ isActive }) => {
        return `${isActive ? "font-bold text-pri-blue" : "text-dark-19 lg:text-grey-89"} text-sm md:text-xl leading-[18px] md:leading-[100%] hover:text-pri-blue w-full p-[10px]`
    }

    useEffect(() => {
        menuIsOpen ? blockScroll() : allowScroll();

        return () => allowScroll();
    }, [menuIsOpen, blockScroll, allowScroll])

    return (
        <header className="w-full bg-pri-blue relative py-2 md:py-6 lg:py-[3.125rem] ">
            <section className='p-container'>
                <div className="w-full flex justify-between">
                    <Link to="/" className="text-decoration-none text-white">
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
                    <div className='w-fit hidden lg:block'>
                        <RoundedButton text="Sign Up" clickHandler={unavailable} />
                    </div>
                    <button className="w-fit p-2 lg:hidden focus:outline-none border-none bg-transparent" onClick={openMenu}>
                        <img src={menuOpen} alt="" className="w-[30px] h-[30px] md:w-[36px] md:h-[36px]" />
                    </button>
                </div>
                {menuIsOpen ? (
                    <section className="w-full h-screen bg-[#00000099] absolute top-0 left-0 z-[200] lg:hidden">
                        <div className="w-full bg-white shadow pt-[26px] pb-[42px] pl-[16px] pr-[36px]">
                            <div className="grid gap-4">
                                <div className="w-full flex justify-end">
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
                                <div className="w-full pl-5 mt-[0.625rem]">
                                    <RoundedButton text="Sign Up" styles={{ width: "100%" }} clickHandler={unavailable} />
                                </div>
                            </div>
                        </div>
                    </section>
                ) : null}
            </section>
        </header>
    )
}

export default BlueHeader