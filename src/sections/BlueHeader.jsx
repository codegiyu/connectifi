import { NavLink, Link } from 'react-router-dom';
import logo from "../assets/logo-red.svg";
import RoundedButton from '../components/RoundedButton';

const BlueHeader = () => {
    const navLinkClasses = ({ isActive }) => {
        return `${isActive ? "font-bold text-white" : "text-grey-d9"} text-xl leading-[100%] hover:text-white`
    }

    return (
        <header className="w-full bg-pri-blue py-2 md:py-6 lg:py-[3.125rem] ">
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
                        <RoundedButton text="Sign Up" />
                    </div>
                </div>
            </section>
        </header>
    )
}

export default BlueHeader