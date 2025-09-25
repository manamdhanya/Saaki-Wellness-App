import React, { useContext } from "react";
import logo from "../../Assests/Logo.png";
import DrAnjali from "../../Assests/DrAnjali.png";
import DrKavitha from "../../Assests/DrKavitha.png";
import DrDeepa from "../../Assests/DrDeepa.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LanguageContext } from "../../context/LanguageContext";

const OurTeam = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    console.log(language);
    const translations = {
        en: {
            home: "Home",
            team: "Our Team",
            blog: "Blog",
            about: "About",
            heading: "Dedicated Experts Our Team",
            description: "Our team of dedicated experts is committed to providing you with the best possible care and support",
            doctor1: "Dr. Anjali Mehra",
            doctor1Specialty: "Gynaecology & Obstetrics",
            doctor2: "Dr. Kavitha Reddy",
            doctor2Specialty: "Endocrinology (Thyroid & PCOS)",
            doctor3: "Dr. Deepa Thomas",
            doctor3Specialty: "Reproductive Medicine & Fertility",
            copyright: "© 2025. All Rights Reserved.",
        },
        hi: {
            home: "होम",
            team: "हमारी टीम",
            blog: "ब्लॉग",
            about: "हमारे बारे में",
            heading: "समर्पित विशेषज्ञ हमारी टीम",
            description: "हमारी समर्पित विशेषज्ञों की टीम आपको सर्वोत्तम देखभाल और समर्थन प्रदान करने के लिए प्रतिबद्ध है",
            doctor1: "डॉ. अंजलि मेहरा",
            doctor1Specialty: "गाइनेकोलॉजी और प्रसूति विज्ञान",
            doctor2: "डॉ. काविता रेड्डी",
            doctor2Specialty: "एंडोक्रिनोलॉजी (थायरॉइड और PCOS)",
            doctor3: "डॉ. दीपा थॉमस",
            doctor3Specialty: "प्रजनन चिकित्सा और प्रजनन क्षमता",
            copyright: "© 2025। सर्वाधिकार सुरक्षित।",
        },
        te: {
            home: "హోమ్",
            team: "మన బృందం",
            blog: "బ్లాగ్",
            about: "మన గురించి",
            heading: "నిపుణుల సమర్పిత బృందం",
            description: "మా నిపుణుల బృందం మీకు అత్యుత్తమ సేవ మరియు మద్దతు అందించడానికి సమర్పితంగా ఉంది",
            doctor1: "డా. అంజలి మెహ్రా",
            doctor1Specialty: "గైనకాలజీ & ప్రసూతి శాస్త్రం",
            doctor2: "డా. కావితా రెడ్డి",
            doctor2Specialty: "ఎండోక్రైనాలజీ (థైరాయిడ్ & PCOS)",
            doctor3: "డా. దీపా థామస్",
            doctor3Specialty: "ప్రజన వైద్యము & ఫెర్టిలిటీ",
            copyright: "© 2025. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.",
        },
        mr: {
            home: "मुखपृष्ठ",
            team: "आमची टीम",
            blog: "ब्लॉग",
            about: "आमच्या विषयी",
            heading: "समर्पित तज्ज्ञ आमची टीम",
            description: "आमची समर्पित तज्ज्ञांची टीम तुम्हाला सर्वोत्तम काळजी आणि समर्थन देण्यासाठी वचनबद्ध आहे",
            doctor1: "डॉ. अंजली मेहरा",
            doctor1Specialty: "स्त्रीरोगशास्त्र आणि प्रसूति",
            doctor2: "डॉ. कविता रेड्डी",
            doctor2Specialty: "एंडोक्रिनोलॉजी (थायरॉइड & PCOS)",
            doctor3: "डॉ. दीपा थॉमस",
            doctor3Specialty: "प्रजनन औषध & फलितता",
            copyright: "© 2025. सर्व हक्क राखीव.",
        },
        gu: {
            home: "હોમ",
            team: "અમારી ટીમ",
            blog: "બ્લૉગ",
            about: "અમારા વિશે",
            heading: "સમર્પિત નિષ્ણાત અમારી ટીમ",
            description: "અમારી ટીમ તમને શ્રેષ્ઠ સારવાર અને સહાયતા પ્રદાન કરવા પ્રતિબદ્ધ છે",
            doctor1: "ડૉ. અંજલી મેહરા",
            doctor1Specialty: "ગાયનેકોલોજી & ઓબ્સ્ટેટ્રિક્સ",
            doctor2: "ડૉ. કવિતા રેડ્ડી",
            doctor2Specialty: "એન્ડોક્રિનોલોજી (થાયરોઈડ & PCOS)",
            doctor3: "ડૉ. દીપા થોમસ",
            doctor3Specialty: "પ્રજનન મેડિસિન & ફર્ટિલિટી",
            copyright: "© 2025. સર્વ અધિકાર આરક્ષિત.",
        },
    };
    const t = translations[language];

    console.log(language);
    console.log(setLanguage)

    return (
        <div className="bg-[#FFFFE0] min-h-screen flex flex-col">
            <header className="flex items-center justify-between px-8 py-4">
                <div className="flex items-center space-x-2">
                    <Link to="/"><img src={logo} alt="Sakhi Didi Logo" className="w-20 h-20 object-contain" /></Link>
                </div>

                <nav className="flex space-x-5 text-purple-800 font-medium text-xs sm:text-lg">
                    <Link to="/" className="hover:underline">{t.home}</Link>
                    <Link to="/team" className="underline text-[#910AE4]">{t.team}</Link>
                    <Link to="/blog" className="hover:underline">{t.blog}</Link>
                    <Link to="/about" className="hover:underline">{t.about}</Link>
                </nav>
            </header>

            <section className="bg-purple-800 text-[#FFFFE0] text-center py-16 px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.heading}</h2>
                <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">{t.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    <div className="flex flex-col items-center">
                        <img src={DrAnjali} alt={t.doctor1} className="w-48 h-56 object-cover rounded-xl shadow-lg" />
                        <h3 className="mt-4 text-lg font-semibold text-[#FFFFE0]">{t.doctor1}</h3>
                        <p className="text-[#FFFFE0] font-bold">{t.doctor1Specialty}</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={DrKavitha} alt={t.doctor2} className="w-48 h-56 object-cover rounded-xl shadow-lg" />
                        <h3 className="mt-4 text-lg font-semibold text-[#FFFFE0]">{t.doctor2}</h3>
                        <p className="text-[#FFFFE0] font-bold">{t.doctor2Specialty}</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src={DrDeepa} alt={t.doctor3} className="w-48 h-56 object-cover rounded-xl shadow-lg" />
                        <h3 className="mt-4 text-lg font-semibold text-[#FFFFE0]">{t.doctor3}</h3>
                        <p className="text-[#FFFFE0] font-bold">{t.doctor3Specialty}</p>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto mt-8 flex flex-col sm:flex-row items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-14 px-4">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Sakhi Didi Logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
                    <span className="font-semibold text-purple-800 text-xs sm:text-lg">{t.copyright}</span>
                </div>

                <div className="flex space-x-6 pb-2 text-xl sm:text-2xl justify-center sm:justify-end w-full sm:w-auto">
                    <a href="https://www.facebook.com/" className="text-purple-500 hover:text-[#9a02f8]"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/" className="text-purple-500 hover:text-[#9a02f8]"><FaInstagram /></a>
                    <a href="https://x.com/i/flow/login" className="text-purple-500 hover:text-[#9a02f8]"><FaXTwitter /></a>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
