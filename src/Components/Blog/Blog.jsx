import React from "react";
import logo from "../../Assests/Logo.png";
import CheckupImg from "../../Assests/CheckupImg.png";
import LungCancerImg from "../../Assests/LungCancerImg.png";
import MeditationImg from "../../Assests/MeditationImg.png";
import BipolarImg from "../../Assests/BipolarImg.png";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Blog = () => {
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
                    <a href="#" className="hover:underline">
                        Our Team
                    </a>
                    <a href="#" className="underline text-[#910AE4]">
                        Blog
                    </a>
                    <a href="#" className="hover:underline">
                        About
                    </a>
                </nav>
            </header>

            <div className="bg-[#FFFFE0] py-12 px-6 md:px-16">
                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">
                        Trending
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-[43rem]">
                        <div className="flex flex-col w-full md:w-full lg:w-96 text-center">
                            <img
                                src={CheckupImg}
                                alt="Annual Checkup"
                                className="rounded-lg shadow-md h-48 w-full lg:w-96 object-cover"
                            />
                            <a
                                href="https://www.healthywomen.org/your-health/making-the-most-of-your-annual-checkup"
                                className="mt-3 text-purple-800 font-semibold hover:underline"
                            >
                                Making the Most of Your Annual Checkup
                            </a>
                        </div>

                        <div className="flex flex-col w-full md:w-full lg:w-96 text-center">
                            <img
                                src={LungCancerImg}
                                alt="Lung Cancer Symptoms"
                                className="rounded-lg shadow-md h-48 w-full lg:w-96 object-cover bg-blue-200"
                            />
                            <a
                                href="https://www.healthywomen.org/condition/symptoms-of-lung-cancer"
                                className="mt-3 text-purple-800 font-semibold hover:underline"
                            >
                                Lung Cancer Symptoms
                            </a>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-6">
                        SELF-CARE & MENTAL HEALTH
                    </h2>
                    <div className="grid grid-cols-1 md:gap-8 md:grid-cols-2">
                        <div className="flex flex-col w-full md:w-full lg:w-96 text-center">
                            <img
                                src={MeditationImg}
                                alt="Meditation Habit"
                                className="rounded-lg shadow-md h-48 w-full lg:w-96 object-cover"
                            />
                            <a
                                href="https://www.healthywomen.org/your-wellness/self-care--mental-health/5-best-apps-to-cultivate-a-meditation-habit"
                                className="mt-3 text-purple-800 font-semibold hover:underline"
                            >
                                5 Best Apps to Cultivate a Meditation Habit
                            </a>
                        </div>

                        <div className="flex flex-col w-full md:w-full lg:w-96 text-center ">
                            <img
                                src={BipolarImg}
                                className="rounded-lg shadow-md h-48 w-full lg:w-96 object-cover"
                            />
                            <a
                                href="https://www.healthywomen.org/real-women-real-stories/living-with-bipolar-disorder"
                                className="mt-3 text-purple-800 font-semibold hover:underline block"
                            >
                                I Live with Bipolar Disorder, but I Don’t Let It Define Who I Am
                            </a>
                        </div>
                    </div>
                </section>

            </div>


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

export default Blog;
