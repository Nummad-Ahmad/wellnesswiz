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
                    <div className={styles.webChat} >
                        <iframe
                        className={styles.iframeStyle}
                            srcDoc={`
    <!doctype html>
    <html lang="en">
      <head></head>
      <body>
        <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
        <script defer>
          window.botpress.on("webchat:ready", (conversationId) => {
            botpress.open();
          });
          window.botpress.init({
  "botId": "d60e3064-2d3e-4cae-9277-c7f112e11d1f",
  "configuration": {
    "composerPlaceholder": "Message ...",
    "botName": "Wellness Wiz",
    "botAvatar": "https://files.bpcontent.cloud/2025/03/01/08/20250301081516-70AZ59RQ.png",
    "website": {},
    "email": {},
    "phone": {},
    "termsOfService": {},
    "privacyPolicy": {},
    "color": "#ffffff",
    "variant": "soft",
    "themeMode": "dark",
    "fontFamily": "inter",
    "radius": 0.5,
    "additionalStylesheetUrl": "https://files.bpcontent.cloud/2024/12/29/10/20241229102115-7UG7L8HX.css",
    "allowFileUpload": false
  },
  "clientId": "4f8259f9-b3d4-4255-a276-46f80120b643"
});
        </script>
      </body>
    </html>
    `}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
