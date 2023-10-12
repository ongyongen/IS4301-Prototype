import { HOME_PAGE, LOGIN_PAGE, SIGNUP_PAGE } from '../../constants/routes';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const { user, logout } = UserAuth();

    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout();
            navigate('/home');
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <>
            {!user && (
                <>
                    <ul className="flex flex-wrap text-lg ml-10">
                        <li className="mr-6">
                            <a
                                className="text-purple-500 hover:text-purple-800"
                                href={HOME_PAGE}
                            >
                                Home
                            </a>
                        </li>
                        <li className="mr-6">
                            <a
                                className="text-purple-500 hover:text-purple-800"
                                href={LOGIN_PAGE}
                            >
                                Login
                            </a>
                        </li>
                        <li className="mr-6">
                            <a
                                className="text-purple-500 hover:text-purple-800"
                                href={SIGNUP_PAGE}
                            >
                                Sign Up
                            </a>
                        </li>
                    </ul>
                </>
            )}
            {user && (
                <>
                    <ul className="flex flex-wrap text-lg ml-10">
                        <li className="mr-6">
                            <a
                                className="text-purple-500 hover:text-purple-800"
                                href={HOME_PAGE}
                            >
                                Home
                            </a>
                        </li>
                        <li className="mr-6">
                            <a
                                className="text-purple-500 hover:text-purple-800"
                                href={HOME_PAGE}
                                onClick={handleLogout}
                            >
                                Log Out
                            </a>
                        </li>
                    </ul>
                </>
            )}
        </>
    );
};
