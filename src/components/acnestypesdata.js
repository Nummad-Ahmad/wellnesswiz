import { useNavigate } from 'react-router-dom';
import style from '../styles/acnes.module.css';
import { useEffect } from 'react';

export default function AcneComponent({ img, title, desc, index }) {
    const navigate = useNavigate();
    useEffect(() => {
        localStorage.setItem("storedValue", 4);
    }, []);
    return (
        <div className={style.advantage} style={{ background: 'rgb(18, 18, 18)', cursor: 'pointer' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginLeft: '10px' }}>
                <div className={style.icondiv}>
                    <p style={{ color: 'black', textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>{index}</p>
                </div>
                <p style={{ fontWeight: "bold", fontSize: '18px', color: 'white' }}>{title}</p>
            </div>
            <div className={style.whiteline}></div>
            <img style={{ margin: '0px auto' }} src={img} width='90%' height={200} />
            <p style={{
                margin: '0px 10px', fontSize: '18px', fontFamily: 'sans-serif', lineHeight: 1.5, color: 'white'
            }}>{desc}</p>
        </div>
    );

}