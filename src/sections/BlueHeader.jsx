import { NavLink } from 'react-router-dom';
import logo from "../assets/logo-red.svg";
import RoundedButton from '../components/RoundedButton';

const BlueHeader = () => {
    const navLinkClasses = ({ isActive }) => {
        return `${isActive ? "font-bold text-white" : "text-grey-d9"} text-xl leading-[100%] hover:text-white`
    }

    return (
        <header className='w-full bg-pri-blue py-4 md:py-8 lg:py-[3.125rem] p-container'>
            <div className="w-full flex justify-between">
                <div className="p-4 flex items-center gap-[0.625rem]">
                    <img src={logo} alt="" />
                    <span className='text-white font-bold text-4xl leading-[100%]'>Connectifi</span>
                </div>
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
        </header>
    )
}

export default BlueHeader