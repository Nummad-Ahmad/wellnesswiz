import style from '../styles/homePage.module.css';
import { BsChatDots } from "react-icons/bs";
import ModelImage from '../images/dr.png';
import Cardio from '../images/cardiology.jpg';
import Endo from '../images/endo.jpg';
import Immuno from '../images/immuno.jpg';
import Pulmo from '../images/pulmo.jpg';
import Gastero from '../images/gastero.jpg';
import Inf from '../images/inf.jpg';
import Doctormeeting1 from '../images/doctormeeting1.jpeg';
import Doctormeeting2 from '../images/doctormeeting2.jpeg';
import Doctormeeting3 from '../images/doctormeeting3.jpeg';
import Navbar from './navbar';
import { MdAccessTime } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { IoAccessibility } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from './footerComponent';
import video from '../images/acneVideo.mp4';
import { CiCircleCheck } from 'react-icons/ci';
import Cookies from 'js-cookie';

export default function HomePage() {
    const [isAnimated, setIsAnimated] = useState(false);
    const [isAnimated1, setIsAnimated1] = useState(true);
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        console.log(scrollPosition);
        if (scrollPosition > 930) {
            setIsAnimated(true);
        } else {
            setIsAnimated(false);
        }
        if (scrollPosition <= 450) {
            setIsAnimated1(true);
        } else {
            setIsAnimated1(false);
        }
    };
    useEffect(() => {
        localStorage.setItem("storedValue", 0);
    }, []);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navigate = useNavigate();
    function navigationFunction() {
        const email = Cookies.get('email');
        if (email) {
            navigate('/chat');
        } else {
            navigate('/login')
        }
    }
    return (
        <div className={style.homepage}>
            <div style={{ position: 'fixed', width: '100vw' }}>
                <Navbar />
            </div>
            <div className={style.contentContainer}>
                <div className={style.imgandtext}>
                    <div className={style.mototaglinediv}>
                        <p className={style.text}>Your Personalized Companion for Smarter Health Care</p>
                        <p className={style.tagline} >Personalized solutions for every individual, backed by advanced detection and prevention tools. Using cutting-edge AI and medical expertise, our chatbot provides tailored health recommendations to address your unique concerns. Get started today for smarter, proactive healthcare.
                        </p>
                    </div>
                    <img className={`${style.img} ${isAnimated1 ? style.animateImg : ''}`} src={ModelImage}></img>
                </div>
                <div onClick={() => navigationFunction()} className={style.chat}>
                    <BsChatDots size={20} color='white' />
                </div>
                <p className={style.treatments}>
                    Specialized Areas
                </p>
                <div className={style.acnecon}>
                    <div className={style.acnebox}>
                        <h2>Cardiology</h2>
                        <img src={Cardio} alt="Blackheads" />
                        <p className={style.diseaseDesc}>Cardiology is the branch of medicine that focuses on diagnosing, treating, and preventing diseases related to the heart and blood vessels.</p>
                    </div>
                    <div className={style.acnebox}>
                        <h2>Pulmonology</h2>
                        <p className={style.diseaseDesc}>Pulmonology is the branch of medicine that focuses on diagnosing, treating, and preventing diseases related to the respiratory system.</p>
                        <img src={Pulmo} height='100%' alt="Whiteheads" />
                    </div>
                    <div className={style.acnebox}>
                        <h2>Endocrinology</h2>
                        <p className={style.diseaseDesc}>Endocrinology is the branch of medicine that focuses on diagnosing, treating, and preventing disorders related to the endocrine system.</p>
                        <img src={Endo} alt="Nodules" />
                    </div>
                    <div className={style.acnebox}>
                        <h2>Gasteroentrology</h2>
                        <p className={style.diseaseDesc}>Gastroenterology is the branch of medicine that focuses on diagnosing, treating, and preventing diseases related to the digestive system.</p>
                        <img src={Gastero} alt="Pustules" />
                    </div>
                    <div className={style.acnebox}>
                        <h2>Immunology</h2>
                        <p className={style.diseaseDesc}>Immunology is the branch of medicine that focuses on diagnosing, treating, and preventing diseases related to the immune system.</p>
                        <img src={Immuno} alt="Pustules" />
                    </div>
                    <div className={style.acnebox}>
                        <h2>Infectiology</h2>
                        <p className={style.diseaseDesc}>Infectiology is the branch of medicine that focuses on diagnosing, treating, and preventing diseases caused by bacteria, viruses, fungi, and parasites.</p>
                        <img src={Inf} alt="Cysts" />
                    </div>
                </div>
                <div className={style.lightbluecontainer}>
                    <div className={style.leftrightcontainer}>
                        <div className={style.leftdiv}>
                            <p>Combining AI and healthcare insights to assist users in their healthcare free of cost
                            </p>
                        </div>
                        <div className={style.rightdiv}>
                            <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Using advanced AI and healthcare expertise, our chatbot
                                delivers personalized recommendations to address unique most of the health concern.</p>
                            <button onClick={() => navigate('/about')}>Read more</button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <img className={style.meetingimgs} src={Doctormeeting1} />
                        <img className={style.meetingimgs} src={Doctormeeting2} />
                        <img className={style.meetingimgs} src={Doctormeeting3} />
                    </div>
                </div>
                <p className={`${style.whychooseus} ${isAnimated ? style.animate : ''}`}>
                    Why choose us?
                </p>
                <div className={`${style.container}`}>
                    {/* <div className={style.advantage} style={{ background: 'rgb(212, 232, 255)'}}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <FaSackDollar size={20} color='rgb(212, 232, 255)' />
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Cost affective</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Eliminates transportation, hospital and consultation charges.</p>
                    </div> */}
                    <div className={`${style.advbox} ${style.adv}`} style={{ gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <FaSackDollar size={30} color='black' />
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Cost affective</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Eliminates transportation, hospital and consultation charges.</p>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`} style={{ gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <MdAccessTime size={30} color='black' />
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>24/7 Availability</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Available 24/7, allowing users to get help without waiting for clinic hours.</p>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`} style={{ gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <IoAccessibility size={30} color='black' />
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Accessibility</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Access healthcare advice from homes without visiting hospital.</p>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`} style={{ gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <GrSecure size={30} color='black' />
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Privacy</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Tailored to individual concerns while maintaining user anonymity.</p>
                    </div>
                </div>
                <div className={style.videoContainer}>
                    <video className={style.video} src={video} autoPlay muted loop ></video>
                </div>
                <p className={`${style.advan}`}>
                    Our advantages
                </p>
                <div className={style.container}>
                    <div className={`${style.advbox} ${style.adv}`}>
                        <h2>Accurate Diagnosis</h2>
                        <p>
                        The application utilizes advanced natural language models to accurately classify various health conditions, enabling users to identify specific diseases and receive tailored insights for better diagnosis and management.
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h1 style={{ color: '#03DAC6' }}>01</h1>
                            <CiCircleCheck size={54} style={{ color: '#03DAC6' }} />
                        </div>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`}>
                        <div>
                            <h2>Reduced Anxiety</h2>
                            <p>
                                Immediate access to reliable information helps patients feel more informed and less anxious about their health concerns.
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h1 style={{ color: '#03DAC6' }}>02</h1>
                            <CiCircleCheck size={54} style={{ color: '#03DAC6' }} />
                        </div>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`}>
                        <div>
                            <h2>Personalized Advice</h2>
                            <p>
                                By analyzing patient data, chatbots can provide tailored advice for lifestyle improvements, diet plans, or exercise routines.
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h1 style={{ color: '#03DAC6' }}>03</h1>
                            <CiCircleCheck size={54} style={{ color: '#03DAC6' }} />
                        </div>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`}>
                        <div>
                            <h2>Instant Responses</h2>
                            <p>
                                Patients can get immediate answers to queries about symptoms, medications, or appointments without waiting for a human representative.
                            </p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <h1 style={{ color: '#03DAC6' }}>04</h1>
                            <CiCircleCheck size={54} style={{ color: '#03DAC6' }} />
                        </div>
                    </div>
                </div>
                <p className={`${style.whychooseus} ${isAnimated ? style.animate : ''}`}>
                    Working sequence
                </p>
                <div className={`${style.container}`}>
                    <div className={`${style.advbox} ${style.adv}`} style={{ gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                {/* <IoMdCloudUpload size={20} color='rgb(212, 232, 255)' /> */}
                                <p style={{ margin: '0px', fontSize: '25px', color: 'black' }}>1</p>
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Enter symptoms</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Enter your symptoms by chatting with AI to get started.</p>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`} style={{ gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <p style={{ margin: '0px', fontSize: '25px', color: 'black' }}>2</p>
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Get remedies</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Get remedies from our advanced AI model.</p>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`} style={{ gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <p style={{ margin: '0px', fontSize: '25px', color: 'black' }}>3</p>
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Routine</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Follow the instructions given after the detection phase.</p>
                    </div>
                    <div className={`${style.advbox} ${style.adv}`} style={{ gap: '20px' }}>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className={style.icondiv}>
                                <p style={{ margin: '0px', fontSize: '25px', color: 'black' }}>4</p>
                            </div>
                            <p style={{ fontWeight: "bold", fontSize: '18px' }}>Feedback</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <p style={{ fontSize: '16px', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.4' }}>Give your valuable insights from the contact us page.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}
