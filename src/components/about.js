import Navbar from "./navbar";
import style from '../styles/about.module.css';
import Detection from '../images/detection.jpg';
import Medication from '../images/medication.png';
import DoctorMeeting3 from '../images/doctormeeting3.jpeg';
import Privacy from '../images/privacy.jpeg';
import AIHealthcare from '../images/aiHealthcare.jpeg';
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";
import { useEffect, useState } from "react";
import splitFaceMale from '../images/splitFaceMale.jpeg';
import splitFaceFemale from '../images/splitFaceFemale.jpeg';
import HyperPigmentation from "../images/hyperPigmentation.jpg";
import Footer from "./footerComponent";
import Cardio from '../images/cardiology.jpg';
import Endo from '../images/endo.jpg';
import Immuno from '../images/immuno.jpg';
import Pulmo from '../images/pulmo.jpg';
import Gastero from '../images/gastero.jpg';
import Inf from '../images/inf.jpg';

export default function About() {
    const [isAnimated, setIsAnimated] = useState(false);
    const [isFade, setIsfade] = useState(true);
    const [index, setIndex] = useState(0);
    const [animationState, setAnimationState] = useState("slidein");
    const contentArray = [{
        img: Cardio,
        text: 'Cardiovascular diseases (CVDs) are the leading cause of death globally. In 2019, an estimated 17.9 million people died from CVDs, representing 32% of all global deaths.'
    },
    {
        img: Gastero,
        text: 'Gastrointestinal diseases are a major global health concern, affecting millions of people each year. In 2019, an estimated 4.9 million deaths were attributed to digestive disorders, accounting for nearly 8% of global deaths.'
    },
    {
        img: Pulmo,
        text: 'Pulmonary diseases are a major global health concern. In 2019, an estimated 3.2 million people died from chronic respiratory diseases, accounting for nearly 6% of all global deaths.'
    },
    {
        img: Endo,
        text: 'Endocrine disorders are a major global health concern. In 2019, an estimated 1.5 million deaths were attributed to diabetes alone, with millions more affected by hormonal imbalances such as thyroid disorders and adrenal diseases.'
    },
    {
        img: Inf,
        text: 'Infectious diseases remain a major global health concern. In 2019, an estimated 13 million people died from infections, accounting for approximately 25% of all global deaths.'
    },
    {
        img: Immuno,
        text: 'Immunological and allergy-related diseases are a major global health concern. In recent years, an estimated 300 million people worldwide have been affected by asthma, and over 400 million suffer from allergic rhinitis.'
    }
    ];

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition);
        if (scrollPosition > 450) {
            setIsAnimated(true);
        } else {
            setIsAnimated(false);
        }
        if (scrollPosition >= 390 && scrollPosition <= 1430) {
            setIsfade(false);
        } else {
            setIsfade(true);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimationState("slideout");
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
                setAnimationState("hidden");
                setTimeout(() => {
                    setAnimationState("slidein");
                }, 50);
            }, 500);
        }, 5000);
        return () => clearInterval(interval);
    }, [contentArray.length]);

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        localStorage.setItem("storedValue", 1);
    }, []);
    return (
        <div className={style.about}>
            <div style={{ position: 'fixed', width: '100vw' }}>
                <Navbar />
            </div>
            <div className={style.contentContainer}>
                <div className={style.container}>
                    <div className={style.herosection}>
                        <div className={style.heroheadingdiv}>
                            <p className={style.heroheading}>Combining AI and healthcare insights to assist users in their healthcare free of cost</p>
                            <p className={style.herodesc}>In today’s fast-paced world, healthcare often takes a backseat as busy schedules and the perception of high costs discourage many. However, maintaining good health doesn’t have to be expensive or time-consuming. Simple habits like staying hydrated, eating a balanced diet, exercising regularly, and getting routine check-ups can easily fit into a busy lifestyle, promoting overall well-being without financial strain.</p>
                        </div>
                        <img src={DoctorMeeting3} className={`${style.heroimg} ${isFade ? style.fadein : ''}`} />
                    </div>
                    <div className={style.ouraimdiv}>
                        <p style={{ margin: '30px', fontSize: '40px', fontWeight: '500', color: 'white' }}>Our aim</p>
                        <p className={style.aimdesc}>Using advanced AI and healthcare expertise, our chatbot
                            delivers personalized recommendations to address unique health
                            concerns.<p className={style.conditionallyhiddentext}> The system aims to make acne care accessible,
                                efficient, and personalized while educating users about proper and timely healthcare advices.</p></p>
                        <p className={style.aimdesc} style={{ marginTop: '20px' }}>To create an intelligent chatbot that assists users in identifying disease types, suggesting
                            appropriate healthcare routines, recommending over-the-counter treatments, and providing
                            preventive measures to improve health, based on user inputs.</p>
                    </div>
                    <p className={style.services}>Services we offer</p>
                    <div className={`${style.descriptioncontainer}`}>
                        {/* <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '20px' }}>
                            <div className={style.icondiv}>
                                <IoSearchOutline size={20} color="white" />
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Acne detection</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <img src={Detection} width='85%' height={200} />
                        <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>By analyzing your skin type and identifying the specific acne category, we provide tailored recommendations to help you manage and treat acne more effectively. Our system delivers expert insights for healthier, clearer skin.</p>
                        </div> */}
                        <div className={`${style.advbox} ${style.adv}`} style={{ gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '10px' }}>
                                <div className={style.icondiv}>
                                    <IoSearchOutline size={30} color="black" />
                                </div>
                                <p style={{ fontWeight: "bold", fontSize: '18px', color: 'white' }}>Disease detection</p>
                            </div>
                            <div className={style.whiteline}></div>
                            <img style={{ margin: '0px auto' }} src={Detection} width='90%' height={200} />
                            <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4', color: 'white' }}>By analyzing your symptoms and identifying potential disease patterns, we provide tailored recommendations to help you manage your health more effectively.</p>
                        </div>
                        <div className={`${style.advbox} ${style.adv}`} style={{ gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '10px' }}>
                                <div className={style.icondiv}>
                                    <MdOutlineHealthAndSafety size={30} color="black" />
                                </div>
                                <p style={{ fontWeight: "bold", fontSize: '18px', color: 'white' }}>Preventive measures</p>
                            </div>
                            <div className={style.whiteline}></div>
                            <img style={{ margin: '0px auto' }} src={DoctorMeeting3} width='90%' height={200} />
                            <p style={{ margin: '0px 20px', fontSize: '15px', margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4', color: 'white' }}>Prevention is essential for health. Our app offers personalized tips, from healthcare routines to lifestyle and dietary changes, all tailored to your disease.</p>
                        </div>
                        <div className={`${style.advbox} ${style.adv}`} style={{ gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '10px' }}>
                                <div className={style.icondiv}>
                                    <AiOutlineMedicineBox size={30} color="black" />
                                </div>
                                <p style={{ fontWeight: "bold", fontSize: '18px', color: 'white' }}>Medication</p>
                            </div>
                            <div className={style.whiteline}></div>
                            <img style={{ margin: '0px auto' }} src={Medication} width='90%' height={200} />
                            <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4', color: 'white' }}>Based on your disease, we provide personalized medication suggestions, including over-the-counter options and professional treatments.</p>
                        </div>
                        <div className={`${style.advbox} ${style.adv}`} style={{ gap: '20px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '10px' }}>
                                <div className={style.icondiv}>
                                    <GrSecure size={30} color="black" />
                                </div>
                                <p style={{ fontWeight: "bold", fontSize: '18px', color: 'white' }}>User privacy</p>
                            </div>
                            <div className={style.whiteline}></div>
                            <img style={{ margin: '0px auto' }} src={Privacy} width='90%' height={200} />
                            <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4', color: 'white' }}>We ensure all your personal data is kept secure and confidential. Our app protects your anonymity, with no sharing of information to third parties.</p>
                        </div>
                    </div>
                    <div className={style.whyitmattersdiv}>
                        <p style={{ fontSize: '40px', fontWeight: '500', marginTop: '70px', marginBottom: '30px', color: "white" }}>Why It Matters</p>
                        <div className={style.mattercontainer}>
                            <div className={`${style.matters} ${style[animationState]}`}>
                                <img style={{ margin: '0px auto' }} src={contentArray[index]['img']} className={style.matterimg}>
                                </img>
                                <p style={{ margin: '0px 20px', fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4', textAlign: 'center', color: "white" }}>{contentArray[index]['text']}</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.herosection}>
                        <img src={AIHealthcare} className={`${style.heroimg} ${isFade ? style.fadein : ''}`} />
                        <div className={style.heroheadingdiv}>
                            <p className={style.heroheading}>Custom-trained AI model for diagnosing diseases</p>
                            <p className={style.herodesc}>Revolutionizing healthcare with a custom-trained AI model specifically designed for diagnosing diseases. This advanced solution accurately identifies the disease, provides preventive tips, and offers tailored treatment plans to promote healthier life.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}