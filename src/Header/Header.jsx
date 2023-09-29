import { Link, NavLink } from "react-router-dom";


const Header = () => {
    return (
        <>
            <header>
                <nav className="bg-lime-200">
                    <div className="container mx-auto px-5">
                        <div className="flex justify-between items-center min-h-[60px]">
                            <div>
                                <Link to={'/'}><span className="text-xl">Email Pass Auth</span></Link>
                            </div>
                            <ul className="flex gap-6">
                                <li>
                                    <NavLink to={'/'}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/sign-up'}>Sign Up</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/sign-in'}>Sign In</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;