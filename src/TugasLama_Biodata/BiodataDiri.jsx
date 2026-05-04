// src/components/BiodataDiri.jsx
import Nama from "./Nama";
import NIM from "./NIM";
import TanggalLahir from "./TanggalLahir";
import Alamat from "./Alamat";
import Email from "./Email";
import NoHP from "./NoHP";
import Image from "./Image"; 
// import './BiodataDiri.css'; // Kode impor lama
import './BiodataDiriRoyal.css'; // Kode impor baru

export default function BiodataDiri() {
    return (
        <>
            {/* 
            =========================================
            KODE JSX LAMA (TIDAK DIHAPUS - TEMA COC)
            =========================================
            <div className="coc-screen">
                <h1 className="coc-main-header">PORTFOLIO CHIEF</h1>
                <div className="coc-board">
                    <div className="coc-lv-badge">100</div>
                    <div className="coc-avatar-frame">
                        <Image />
                    </div>
                    <div className="coc-parchment">
                        <h3 className="coc-sub-title">IDENTITAS DIRI</h3>
                        <div className="coc-list-info">
                            <div className="coc-row"><Nama /></div>
                            <div className="coc-row"><NIM /></div>
                            <div className="coc-row"><TanggalLahir /></div>
                            <div className="coc-row"><Email /></div>
                            <div className="coc-row"><NoHP /></div>
                            <div className="coc-row"><Alamat /></div>
                        </div>
                    </div>

                    <button className="coc-attack-btn">ATTACK!</button>
                </div>
                <p className="coc-copyright">2026 - Politeknik Caltex Riau</p>
            </div>
            */}

            {/* =========================================
                KODE JSX BARU (TEMA KERAJAAN)
                ========================================= */}
            <div className="royal-screen">
                <h1 className="royal-main-header">ROYAL PORTFOLIO</h1>
                <div className="royal-board">
                    <div className="royal-avatar-frame">
                        <Image />
                    </div>
                    <div className="royal-parchment">
                        <h3 className="royal-sub-title">Identitas Diri</h3>
                        <div className="royal-list-info">
                            <div className="royal-row"><Nama /></div>
                            <div className="royal-row"><NIM /></div>
                            <div className="royal-row"><TanggalLahir /></div>
                            <div className="royal-row"><Email /></div>
                            <div className="royal-row"><NoHP /></div>
                            <div className="royal-row"><Alamat /></div>
                        </div>
                    </div>

                    <button className="royal-btn">Enter Kingdom</button>
                </div>
                <p className="royal-copyright">© 2026 - Politeknik Caltex Riau</p>
            </div>
        </>
    );
}