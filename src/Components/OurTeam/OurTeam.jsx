import React from "react";
import logo from "../../Assests/Logo.png";
import DrAnjali from "../../Assests/DrAnjali.png";
import DrKavitha from "../../Assests/DrKavitha.png";
import DrDeepa from "../../Assests/DrDeepa.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const OurTeam = () => {
    return (
        <div className="bg-[#FFFFE0] min-h-screen flex flex-col">
            <header className="flex items-center justify-between px-8 py-4" >
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Sakhi Didi Logo" className="w-20 h-20 object-contain" />
                </div>
                <nav className="flex space-x-5 text-purple-800 font-medium text-xs sm:text-lg">

                    <a href="#" className="hover:underline">
                        Home
                    </a>
                    <a href="#" className="underline text-[#910AE4]">
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

            <section className="bg-purple-800 text-[#FFFFE0] text-center py-16 px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Dedicated Experts Our Team
                </h2>
                <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
                    Our team of dedicated experts is committed to providing you with the
                    best possible care and support
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    
                    <div className="flex flex-col items-center">
                        <img
                            src={DrAnjali}
                            alt="Dr. Anjali Mehra"
                            className="w-48 h-56 object-cover rounded-xl shadow-lg"
                        />
                        <h3 className="mt-4 text-lg font-semibold text-[#FFFFE0]">Dr. Anjali Mehra</h3>
                        <p className="text-[#FFFFE0] font-bold">
                            Gynaecology & Obstetrics
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src={DrKavitha}
                            alt="Dr. Kavitha Reddy"
                            className="w-48 h-56 object-cover rounded-xl shadow-lg"
                        />
                        <h3 className="mt-4 text-lg font-semibold text-[#FFFFE0]">Dr. Kavitha Reddy</h3>
                        <p className="text-[#FFFFE0] font-bold">
                            Endocrinology (Thyroid & PCOS)
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img
                            src={DrDeepa}
                            alt="Dr. Deepa Thomas"
                            className="w-48 h-56 object-cover rounded-xl shadow-lg"
                        />
                        <h3 className="mt-4 text-lg font-semibold text-[#FFFFE0]">Dr. Deepa Thomas</h3>
                        <p className="text-[#FFFFE0] font-bold">
                            Reproductive Medicine & Fertility
                        </p>
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

export default OurTeam;
