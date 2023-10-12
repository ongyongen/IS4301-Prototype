import { CommonButton } from '../../components/Button/CommonButton';

export const LoginForm = ({
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
}) => {
    return (
        <form className="w-2/6" onSubmit={e => handleSubmit(e)}>
            <div className="mb-4 mt-10">
                <label className="block" htmlFor="email">
                    Email
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block" htmlFor="password">
                    Password
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="***********"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>
            <CommonButton
                onClick={e => handleSubmit(e)}
                buttonText={'Log In'}
                className="w-[100%] hover:bg-blue-500 text-blue-700 hover:text-white py-1 px-4 border border-blue-500 "
            />
        </form>
    );
};
