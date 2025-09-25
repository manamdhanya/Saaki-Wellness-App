import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assests/Logo.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LanguageContext } from "../../context/LanguageContext";

export default function ChatbotTest() {
    const { language } = useContext(LanguageContext);

    const translations = {
        en: { home: "Home", team: "Our Team", blog: "Blog", about: "About", copyright: "© 2025. All Rights Reserved." },
        hi: { home: "होम", team: "हमारी टीम", blog: "ब्लॉग", about: "हमारे बारे में", copyright: "© 2025। सर्वाधिकार सुरक्षित।" },
        te: { home: "హోమ్", team: "మన బృందం", blog: "బ్లాగ్", about: "మన గురించి", copyright: "© 2025. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి." },
        mr: { home: "मुखपृष्ठ", team: "आमची टीम", blog: "ब्लॉग", about: "आमच्या विषयी", copyright: "© 2025. सर्व हक्क राखीव." },
        gu: { home: "હોમ", team: "અમારી ટીમ", blog: "બ્લૉગ", about: "અમારા વિશે", copyright: "© 2025. સર્વ અધિકાર આરક્ષિત." }
    };

    const t = translations[language];

    // Dynamic chatbot iframe with language
    const chatbotUrl = `https://www.chatbase.co/chatbot-iframe/YRDpLoWJsUHjDFotcBxNv?lang=${language}`;


    return (
        <div className="bg-[#FFFFE0] min-h-screen flex flex-col">

            {/* Header */}
            <header className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-4 space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2">
                    <Link to="/"><img src={logo} alt="Sakhi Didi Logo" className="w-20 h-20 object-contain" /></Link>
                </div>

                <nav className="flex flex-col sm:flex-row items-center sm:space-x-5 text-purple-800 font-medium text-xs sm:text-lg space-y-2 sm:space-y-0">
                    <Link to="/" className="underline text-[#910AE4]">{t.home}</Link>
                    <Link to="/team" className="hover:underline">{t.team}</Link>
                    <Link to="/blog" className="hover:underline">{t.blog}</Link>
                    <Link to="/about" className="hover:underline">{t.about}</Link>
                </nav>
            </header>

            {/* Chatbot */}
            <div className="flex-grow">
                <iframe
                    src={chatbotUrl}
                    title="Sakhi Didi Chatbot"
                    className="w-full h-full border-0"
                    style={{ minHeight: "calc(100vh - 120px)" }}
                ></iframe>
            </div>

            {/* Footer */}
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
