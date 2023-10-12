import { Navbar } from './components/Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <div className="container mx-auto my-10">
            <Navbar />
            <main className="container mx-auto my-8">{children}</main>
        </div>
    );
};

export default Layout;
