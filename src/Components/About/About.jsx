import React from "react";
import logo from "../../Assests/Logo.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const About = () => {
    return (
        <div className="bg-[#FFFFE0] min-h-screen flex flex-col">
            <header className="flex items-center justify-between px-8 py-4" >
                <div className="flex items-center space-x-2">
                    <a href="/"><img src={logo} alt="Sakhi Didi Logo" className="w-20 h-20 object-contain" /></a>
                </div>
                <nav className="flex space-x-5 text-purple-800 font-medium text-xs sm:text-lg">

                    <a href="/" className="hover:underline">
                        Home
                    </a>
                    <a href="/team" className="hover:underline">
                        Our Team
                    </a>
                    <a href="/blog" className="hover:underline">
                        Blog
                    </a>
                    <a href="/about" className="underline text-[#910AE4]">
                        About
                    </a>
                </nav>
            </header>

            <section className="bg-[#FFFFE0] py-16 px-6 md:px-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-6">
                        Our Mission
                    </h2>
                    <p className="text-purple-800 text-base text-justify md:text-lg leading-relaxed">
                        Sakhi Didi empowers women of all ages—especially those who may not have easy access to healthcare—to ask questions, learn, and take charge of their health. We provide free, anonymous health support in multiple Indian languages through a friendly WhatsApp chatbot. Our mission is to bridge the health information gap and help women make informed, confident decisions about their well-being.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-800 text-center mb-10">
                        Our Values
                    </h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-purple-800 mb-2">Trusted Partner</h3>
                            <p className="text-purple-800 leading-relaxed">
                                We offer accurate, easy-to-understand health information reviewed by experts, so women can make informed choices about their bodies and minds.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-purple-800 mb-2">Anonymity & Safety</h3>
                            <p className="text-purple-800 leading-relaxed">
                                We respect privacy. Women can ask questions without fear or judgement.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-purple-800 mb-2">Multilingual Access</h3>
                            <p className="text-purple-800 leading-relaxed">
                                We break language barriers by supporting multiple Indian languages and culturally sensitive communication.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-purple-800 mb-2">Digital Simplicity</h3>
                            <p className="text-purple-800 leading-relaxed">
                                We meet women where they already are—on WhatsApp—with voice, text, and emojis.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-purple-800 mb-2">Community Connection</h3>
                            <p className="text-purple-800 leading-relaxed">
                                We connect women to certified doctors and verified resources when they need more personalised care.
                            </p>
                        </div>
                    </div>
                </div>
            </section>




            <div className="max-w-6xl mx-auto mt-8 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-14 px-4">

                <div className="flex items-center space-x-2">
                    <img
                        src={logo}
                        alt="Sakhi Didi Logo"
                        className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
                    />
                    <span className="font-semibold text-purple-800 text-xs sm:text-lg text-center sm:text-left">
                        © 2025. All Rights Reserved.
                    </span>
                </div>

                <div className="flex space-x-6 pb-2 text-xl sm:text-2xl justify-center sm:justify-end w-full sm:w-auto ">
                    <a
                        href="https://www.facebook.com/"
                        className="text-purple-500 hover:text-[#9a02f8]"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        className="text-purple-500 hover:text-[#9a02f8]"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://x.com/i/flow/login"
                        className="text-purple-500 hover:text-[#9a02f8]"
                    >
                        <FaXTwitter />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
