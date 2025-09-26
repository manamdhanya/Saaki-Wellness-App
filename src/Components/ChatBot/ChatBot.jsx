import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/Logo.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LanguageContext } from "../../context/LanguageContext";

export default function ChatbotTest() {
    const { language } = useContext(LanguageContext);

    const translations = {
        en: { home: "Home", team: "Our Team", blog: "Blog", about: "About", checkup: "Health Checkup", copyright: "© 2025. All Rights Reserved." },
        hi: { home: "होम", team: "हमारी टीम", blog: "ब्लॉग", about: "हमारे बारे में", checkup: "स्वास्थ्य जांच", copyright: "© 2025। सर्वाधिकार सुरक्षित।" },
        te: { home: "హోమ్", team: "మన బృందం", blog: "బ్లాగ్", about: "మన గురించి", checkup: "ఆరోగ్య తనిఖీ", copyright: "© 2025. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి." },
        mr: { home: "मुखपृष्ठ", team: "आमची टीम", blog: "ब्लॉग", about: "आमच्या विषयी", checkup: "आरोग्य तपासणी", copyright: "© 2025. सर्व हक्क राखीव." },
        gu: { home: "હોમ", team: "અમારી ટીમ", blog: "બ્લૉગ", about: "અમારા વિશે", checkup: "હેલ્થ ચેકઅપ", copyright: "© 2025. સર્વ અધિકાર આરક્ષિત." }
    };

    const t = translations[language];

    const chatbotId = process.env.REACT_APP_CHATBASE_ID;
    const chatbotUrl = `https://www.chatbase.co/chatbot-iframe/${chatbotId}`;

    return (
        <div className="bg-[#FFFFE0] min-h-screen flex flex-col">

            <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2">
                    <Link to="/"><img src={logo} alt="Sakhi Didi Logo" className="w-20 h-20 object-contain" /></Link>
                </div>

                <nav className="flex flex-col sm:flex-row items-center sm:space-x-5 text-purple-800 font-medium text-xs sm:text-lg space-y-2 sm:space-y-0">
                    <Link to="/" className="hover:underline">{t.home}</Link>
                    <Link to="/team" className="hover:underline">{t.team}</Link>
                    <Link to="/blog" className="hover:underline">{t.blog}</Link>
                    <Link to="/health-assessment" className="hover:underline">{t.checkup}</Link>
                    <Link to="/about" className="hover:underline">{t.about}</Link>
                </nav>
            </header>

            
            <div className="flex-grow">
                <iframe
                    src={chatbotUrl}
                    title="Sakhi Didi Chatbot"
                    className="w-full h-full border-0"
                    style={{ minHeight: "calc(100vh - 120px)" }}
                ></iframe>
            </div>

            
            <footer className="flex justify-between items-center w-full px-8 py-6 bg-[#FFFFE0]">
                <span className="text-sm text-gray-600">{t.copyright}</span>
                <div className="flex space-x-4 text-purple-700 text-lg">
                    <a href="https://www.facebook.com/"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/"><FaInstagram /></a>
                    <a href="https://x.com/i/flow/login"><FaXTwitter /></a>
                </div>
            </footer>
        </div>
    );
}
