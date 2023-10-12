import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home/Home.jsx';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    </AuthContextProvider>,
);
