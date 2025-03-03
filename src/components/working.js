import Navbar from "./navbar";
import style from '../styles/working.module.css';
import Login from '../images/login.png';
import Home from '../images/homepage.jpg';
import About from '../images/about.jpg';
import HowItWorks from '../images/howitworks.png';
import AcneTypes from '../images/aiHealthcare.jpeg';
import Chat from '../images/chat.jpg';
import { useEffect } from "react";
import Footer from "./footerComponent";

export default function Working() {
    useEffect(() => {
        localStorage.setItem("storedValue", 3);
    }, []);
    return (
        <div className={style.working}>
            <div style={{ position: 'fixed', width: '100vw' }}>
                <Navbar />
            </div>
            <div className={style.contentContainer}>
                <div className={style.workingdiv}>
                    <div className={style.individualdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.icondiv}>
                                <p className={style.number}>1</p>
                            </div>
                            <p className={style.title}>Registeration and Authentication</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <img className={style.loginpic} src={Login}></img>
                        <div className={style.textdiv}><span style={{ fontWeight: 'bold', fontSize: '20px' }}>The Login and Signup page</span> is designed to provide a seamless and secure entry point for users. New users can create an account by signing up, enabling them to personalize their experience and access all functionalities of the application. Existing users can log in using their registered credentials to pick up where they left off. This page ensures the protection of user data through robust authentication mechanisms, offering both convenience and security.</div>
                    </div>
                    <div className={style.individualdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.icondiv}>
                                <p className={style.number}>2</p>
                            </div>
                            <p className={style.title}>Home page</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <div className={style.textdiv}>Once you have successfully logged in or completed the registration process, the system will automatically redirect you to the <span style={{ fontWeight: 'bold', fontSize: '20px' }}>homepage</span>. From the homepage, you can explore all the available features and functionalities, ensuring a seamless start to your experience with the application.</div>
                        <img className={style.loginpic} src={Home}></img>
                    </div>
                    <div className={style.individualdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.icondiv}>
                                <p className={style.number}>3</p>
                            </div>
                            <p className={style.title}>About page</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <img className={style.loginpic} src={About}></img>
                        <div className={style.textdiv}>The <span style={{ fontWeight: 'bold', fontSize: '20px' }}>About page</span> offers users an insight into the purpose and mission of the application. It provides a brief overview of its features, goals, and the value it delivers to its users. This page serves as a space to establish trust and connection by highlighting the application's vision, core values, and the team behind its development.</div>
                    </div>

                    <div className={style.individualdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.icondiv}>
                                <p className={style.number}>4</p>
                            </div>
                            <p className={style.title}>How it works</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <div className={style.textdiv}>The <span style={{ fontWeight: 'bold', fontSize: '20px' }}>How It Works</span> page provides a clear and concise explanation of the application’s functionality. It guides users through the key processes, showcasing how to navigate and utilize the features effectively. This page simplifies complex workflows with step-by-step instructions, ensuring users can quickly understand and make the most of the application’s capabilities.</div>
                        <img className={style.loginpic} src={HowItWorks}></img>
                    </div>
                    <div className={style.individualdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.icondiv}>
                                <p className={style.number}>5</p>
                            </div>
                            <p className={style.title}>Specialized Areas</p>
                        </div>
                        <div className={style.whiteline}></div>
                        <img className={style.loginpic} src={AcneTypes}></img>
                        <div className={style.textdiv}>The <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Specialized Areas</span> page provides an overview of the different areas of diseases treated, helping users identify and understand their health concerns. It categorizes diseases into various categories, such as cardiology, pulmonology, immunology etc with brief descriptions of each. This page aims to educate users, enabling them to make informed decisions about their healthcare and treatment options.</div>

                    </div>
                    <div className={style.individualdiv}>
                        <div className={style.headerDiv}>
                            <div className={style.icondiv}>
                                <p className={style.number}>6</p>
                            </div>
                            <p className={style.title}>Chat </p>
                        </div>
                        <div className={style.whiteline}></div>
                        <div className={style.textdiv}>The <span style={{ fontWeight: 'bold', fontSize: '20px' }}>Chat</span> page enables seamless interaction within the application, providing users with a responsive and intuitive messaging experience. It facilitates real-time communication, allowing users to engage effortlessly with the chatbot or other participants. Designed for clarity and ease of use, this page ensures smooth conversations with a well-structured interface, making interactions more efficient and accessible. The first icon will start a new conversation and second icon will close the chat box on the top right corner. To open chat box again, refresh the page.</div>
                        <img className={style.loginpic} src={Chat}></img>
                    </div>
                    <div className={style.impPoints}>
                        <p className={style.impHeading}>Key Points</p>
                        <p className={style.impText}>1. When interacting with an AI model, it's best to start the conversation with a simple greeting like "Hi" to establish a smooth flow.</p>
                        <p className={style.impText}>2. When interacting with an AI model, it's important to keep your query statement short and precise to ensure accurate and relevant responses. AI models process information based on the input they receive, so providing a clear and concise query helps eliminate ambiguity and improves response quality.</p>
                        <p className={style.impText}>3. AI analyzes the given symptoms to determine potential diseases, so a clear and concise input helps minimize ambiguity and enhances diagnostic accuracy. Additionally, append identify disease with remedies and prevention measures in the end.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}