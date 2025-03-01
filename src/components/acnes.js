import style from '../styles/acnes.module.css';
import Navbar from './navbar';
import Blackhead from '../images/blackheads.jpeg';
import Whitehead from '../images/whiteheads.jpeg';
import Papules from '../images/papules.jpeg';
import Pustules from '../images/pustules.jpeg';
import Nodules from '../images/nodules.jpeg';
import Cysts from '../images/cysts.jpeg';
import AcneComponent from './acnestypesdata';
import Footer from "./footerComponent";
import Cardio from '../images/cardiology.jpg';
import Endo from '../images/endo.jpg';
import Immuno from '../images/immuno.jpg';
import Pulmo from '../images/pulmo.jpg';
import Gastero from '../images/gastero.jpg';
import Inf from '../images/inf.jpg';

export default function AllAcnes() {
    return (
        <div className={style.acnes}>
                        <div style={{ position: 'fixed', width: '100vw' }}>
                <Navbar />
            </div>
            <div className={style.contentContainer}>
            <div className={style.descriptioncontainer}>
                <AcneComponent index={1} title={'Cardiology'} img={Cardio} desc={'Cardiology is the branch of medicine that focuses on diagnosing, treating, and preventing diseases related to the heart and blood vessels. It plays a crucial role in managing conditions such as heart attacks, hypertension, arrhythmias, and heart failure.'} />
                <AcneComponent index={2} title={'Pulmonology'} img={Pulmo} desc={'Pulmonology is the branch of medicine that focuses on diagnosing, treating, and preventing diseases related to the respiratory system. It plays a crucial role in managing conditions such as asthma, pneumonia, and lung cancer.'} />
                <AcneComponent index={3} title={'Gastroenterology'} img={Gastero} desc={'Gastroenterology is the branch of medicine that focuses on diagnosing, treating, and preventing diseases related to the digestive system. It plays a crucial role in managing conditions such as acid reflux, ulcers and gastrointestinal cancers.'} />
                <AcneComponent index={4} title={'Endocrinology'} img={Endo} desc={'Endocrinology is the branch of medicine that focuses on diagnosing, treating, and preventing disorders related to the endocrine system. It plays a crucial role in managing conditions such as diabetes, thyroid disorders, hormonal imbalances, and metabolic diseases.'} />
                <AcneComponent index={5} title={'Infectiology'} img={Inf} desc={'Infectiology is the branch of medicine that focuses on diagnosing, treating, and preventing diseases caused by bacteria, viruses, fungi, and parasites. It plays a crucial role in managing conditions such as influenza, tuberculosis, pneumonia, and COVID-19.'} />
                <AcneComponent index={6} title={'Immunology'} img={Immuno} desc={'Immunology is the branch of medicine that focuses on diagnosing, treating, and preventing diseases related to the immune system. It plays a crucial role in managing conditions such as allergies, autoimmune disorders, immunodeficiencies, and infections.'} />
            </div>
            <Footer />
        </div>
        </div>
    );
}