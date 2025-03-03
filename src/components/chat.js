import styles from '../styles/chat.module.css';
import Navbar from "./navbar";
import Cookies from 'js-cookie';

export default function Chat() {
    const email = JSON.parse(Cookies.get("user")).email;
    
    return (
        <div className={styles.chat}>
            <div style={{ position: 'fixed', width: '100vw' }}>
                <Navbar />
            </div>
            <div style={{ display: 'flex' }}>
                <div className={styles.contentContainer}>
                    <div className={styles.webChat}>
                        <iframe
                            className={styles.iframeStyle}
                            src="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/12/05/03/20241205032650-J0YSM9KA.json"
                            allow="clipboard-write;"
                        ></iframe>
                        <style>
                            {`
                                button[data-accent-color="gray"] {
                                    display: none !important;
                                }
                            `}
                        </style>
                    </div>
                </div>
            </div>
        </div>
    );
}