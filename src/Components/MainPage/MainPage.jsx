import React from "react";
import logo from "../../Assests/Logo.png";
import VillageWomen from "../../Assests/VillageWomen.png";
import Contact from "../../Assests/Contact.png"
import Chat from "../../Assests/Chat.png"
import Clock from "../../Assests/Clock.png"
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const MainPage = () => {
    return (
        <div className="bg-[#FFFFE0] min-h-screen flex flex-col">
            <header className="flex items-center justify-between px-8 py-4" >
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Sakhi Didi Logo" className="w-20 h-20 object-contain" />
                </div>
                <nav className="flex space-x-5 text-purple-800 font-medium text-xs sm:text-lg">

                    <a href="#" className="underline text-[#910AE4]">
                        Home
                    </a>
                    <a href="#" className="hover:underline">
                        Our Team
                    </a>
                    <a href="#" className="hover:underline">
                        Blog
                    </a>
                    <a href="#" className="hover:underline">
                        About
                    </a>
                </nav>
            </header>


            <section className="flex flex-col items-center text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mt-8">
                    Your Health, Your Way, Always
                </h1>
                <img
                    src={VillageWomen}
                    alt="Group of women"
                    className="mt-6 rounded-3xl w-[90%] max-w-2xl object-cover"
                />
            </section>


            <section className="mt-12 bg-purple-800 text-[#FFFFE0] py-8">
                <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    <div>
                        <div className="flex flex-col items-center md:items-start">
                            <img src={Contact} alt="Contact Icon" className="w-10 h-10 mb-2" />
                            <h3 className="font-semibold text-lg">Emergency Contact</h3>
                            <p className="text-sm">
                                For emergencies, contact local services immediately.
                            </p>
                            <p className="font-bold mt-2">123-456-7890</p>
                        </div>
                    </div>


                    <div>
                        <div className="flex flex-col items-center md:items-start">
                            <img src={Chat} alt="Chat Icon" className="w-10 h-10 mb-2" />
                            <h3 className="font-semibold text-lg">Chat Now</h3>
                            <p className="text-sm">
                                Schedule a private doctor callback for personalized advice.
                            </p>
                            <button className="mt-3 px-4 py-2 bg-[#FFFFE0] text-purple-800 rounded-md font-semibold hover:bg-[#e7e2cf]">
                                Chat Now
                            </button>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col items-center md:items-start">
                            <img src={Clock} alt="Clock Icon" className="w-12 h-10 mb-2" />
                            <h3 className="font-semibold text-lg">Working Hours</h3>
                            <p className="text-sm">Mon - Fri 8:00 am - 9:00 pm</p>
                            <p className="text-sm">Saturday 9:00 am - 8:00 pm</p>
                            <p className="text-sm">Sunday 10:00 am - 7:00 pm</p>
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

export default MainPage;
