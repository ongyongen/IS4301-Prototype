import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './pages/Landing/Landing.jsx';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import ChatbotInsights from "./pages/ChatbotInsights/ChatbotInsights";

import { AuthContextProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerInsights from './pages/CustomerInsights/CustomerInsights';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/chatbot-insights" element={<ChatbotInsights />} />
                <Route path="/customer-insights" element={<CustomerInsights />} />
            </Routes>
        </BrowserRouter>
    </AuthContextProvider>,
);
