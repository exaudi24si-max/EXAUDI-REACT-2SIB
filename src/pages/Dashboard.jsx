import { FiBox, FiUsers, FiTrendingUp, FiDollarSign, FiChevronRight, FiSearch, FiActivity, FiPackage } from "react-icons/fi";

export default function Dashboard() {
    return (
        <div className="animate-fade-in space-y-8 pb-10">
            {/* Page Header inside Content */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl shadow-sm border border-stroke">
                <div className="flex items-center gap-3 pl-2 border-l-4 border-primary">
                    <FiActivity className="text-primary" size={24} />
                    <h1 className="text-2xl font-extrabold text-indigo-900 tracking-tight">Ringkasan Apotek</h1>
                </div>
                <div className="relative w-full md:w-96 group">
                    <input
                        type="text"
                        placeholder="Cari obat, pasien, atau resep..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-sm"
                    />
                    <FiSearch size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
                {/* Main Content (Left 3 Columns) */}
                <div className="xl:col-span-3 space-y-8">
                    {/* Active Users Card */}
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                            <div className="space-y-6 shrink-0">
                                <div>
                                    <p className="text-sm font-bold text-slate-500 mb-1">Antrian Pasien Saat Ini</p>
                                    <h2 className="text-6xl font-black text-indigo-900 tracking-tighter">12</h2>
                                </div>
                                <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                    <FiActivity className="text-primary" />
                                    <span>Resep diproses per menit</span>
                                </div>
                                
                                {/* Tiny Line Chart */}
                                <div className="w-32 h-12">
                                    <svg viewBox="0 0 100 40" className="w-full h-full">
                                        <path 
                                            d="M0 30 Q 10 10, 20 25 T 40 20 T 60 30 T 80 15 T 100 25" 
                                            fill="none" 
                                            stroke="#7C3AED" 
                                            strokeWidth="3" 
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>

                                <p className="text-[10px] text-slate-400 max-w-[140px] leading-relaxed">
                                    Pantau aktivitas pelayanan apotek secara real-time.
                                </p>
                            </div>
                            
                            {/* Large Bar Chart */}
                            <div className="flex-1 w-full h-64 bg-indigo-600 rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden shadow-2xl shadow-indigo-200">
                                {/* Chart Lines */}
                                <div className="absolute inset-0 flex flex-col justify-between py-10 px-6 opacity-20">
                                    <div className="border-t border-dashed border-white w-full h-0"></div>
                                    <div className="border-t border-dashed border-white w-full h-0"></div>
                                    <div className="border-t border-dashed border-white w-full h-0"></div>
                                </div>

                                {/* Bar Labels */}
                                <div className="absolute left-4 top-0 bottom-0 py-8 flex flex-col justify-between text-[10px] font-bold text-white/50 z-10">
                                    <span>50</span>
                                    <span>25</span>
                                    <span>0</span>
                                </div>

                                <div className="flex items-end justify-between h-full gap-2 relative z-0 pl-8">
                                    {[40, 30, 80, 45, 60, 35, 70, 50, 65, 40, 55, 30].map((h, i) => (
                                        <div key={i} className="flex-1 group/bar relative h-full flex flex-col justify-end">
                                            <div 
                                                className={`w-full rounded-full transition-all duration-500 ${i === 2 ? 'bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]' : 'bg-white/30 hover:bg-white/60'}`}
                                                style={{ height: `${h}%` }}
                                            ></div>
                                            {i === 2 && (
                                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white]"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Stat Grid Row */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
                            <StatSmall icon={<FiUsers />} label="Pasien" value="1.2k" color="indigo" progress={65} />
                            <StatSmall icon={<FiTrendingUp />} label="Resep" value="840" color="green" progress={75} />
                            <StatSmall icon={<FiDollarSign />} label="Omzet" value="Rp 12jt" color="red" progress={50} />
                            <StatSmall icon={<FiPackage />} label="Stok Obat" value="450" color="blue" progress={35} />
                        </div>
                    </div>

                    {/* Sales by Age Chart */}
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-xl font-extrabold text-indigo-900">Statistik Penjualan Obat</h3>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_#7C3AED]"></span>
                                <span>Penjualan</span>
                            </div>
                        </div>
                        
                        <div className="h-72 w-full relative">
                            {/* Grid Lines */}
                            <div className="absolute inset-0 flex flex-col justify-between py-2 pointer-events-none">
                                {[35, 30, 25, 20, 15, 10].map(v => (
                                    <div key={v} className="flex items-center gap-4 w-full">
                                        <span className="text-[10px] font-bold text-slate-300 w-8">{v} thn</span>
                                        <div className="flex-1 border-t border-slate-50"></div>
                                    </div>
                                ))}
                            </div>

                            {/* Main Curve SVG */}
                            <svg viewBox="0 0 1000 200" className="w-full h-full relative z-10 overflow-visible">
                                <defs>
                                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path 
                                    d="M 0 160 C 50 160, 100 100, 150 120 S 250 20, 300 80 S 400 150, 450 100 S 550 50, 600 120 S 700 160, 750 120 S 850 60, 900 140" 
                                    fill="none" 
                                    stroke="#7C3AED" 
                                    strokeWidth="6" 
                                    strokeLinecap="round" 
                                    className="drop-shadow-[0_10px_15px_rgba(124,58,237,0.3)]"
                                />
                                <path 
                                    d="M 0 160 C 50 160, 100 100, 150 120 S 250 20, 300 80 S 400 150, 450 100 S 550 50, 600 120 S 700 160, 750 120 S 850 60, 900 140 L 1000 200 L 0 200 Z" 
                                    fill="url(#curveGradient)" 
                                />
                            </svg>

                            {/* X Axis Labels */}
                            <div className="flex justify-between mt-4 pl-12 text-[10px] font-bold text-slate-300">
                                {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'].map(v => (
                                    <span key={v}>{v}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar Cards (Right 1 Column) */}
                <div className="space-y-8">
                    {/* Total Earnings */}
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 text-center">
                        <p className="text-sm font-bold text-slate-500">Omzet Bulan Ini</p>
                        <h2 className="text-4xl font-black text-primary mt-6 mb-2 tracking-tighter">Rp 24.5jt</h2>
                        <p className="text-[10px] text-slate-400 font-bold leading-relaxed mb-8">
                            Meningkat 15% dari bulan lalu
                        </p>
                        <button className="w-full py-4 px-6 border border-slate-100 text-primary font-black rounded-2xl hover:bg-primary hover:text-white transition-all text-xs uppercase tracking-widest shadow-sm hover:shadow-md">
                            Lihat Laporan Detail
                        </button>
                    </div>

                    {/* Earnings by Item */}
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                        <h3 className="text-lg font-extrabold text-indigo-900 mb-8">Obat Terlaris</h3>
                        <div className="space-y-6">
                            <ItemRow icon={<FiPackage />} title="Amoxicillin 500mg" sub="Antibiotik" color="indigo" />
                            <ItemRow icon={<FiPackage />} title="Paracetamol Tablet" sub="Analgesik" color="green" />
                            <ItemRow icon={<FiPackage />} title="Vitamin C 500mg" sub="Suplemen" color="red" />
                        </div>
                    </div>

                    {/* Impression Chart */}
                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
                        <h3 className="text-lg font-extrabold text-indigo-900 mb-8">Kunjungan Pasien</h3>
                        <div className="h-40 flex items-end justify-between gap-3 px-2">
                            {[40, 20, 85, 30].map((h, i) => (
                                <div 
                                    key={i} 
                                    className={`flex-1 rounded-xl transition-all duration-500 hover:scale-105 ${i === 2 ? 'bg-primary shadow-[0_10px_20px_rgba(124,58,237,0.4)]' : 'bg-primary-light'}`} 
                                    style={{ height: `${h}%` }}
                                ></div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-4 px-2 text-[10px] font-black text-slate-300 uppercase tracking-tighter">
                            <span>Sen</span>
                            <span>Sel</span>
                            <span>Rab</span>
                            <span>Kam</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatSmall({ icon, label, value, color, progress }) {
    const colors = {
        indigo: "bg-indigo-50 text-indigo-600 border-indigo-100 prg:bg-indigo-500",
        green: "bg-emerald-50 text-emerald-600 border-emerald-100 prg:bg-emerald-500",
        red: "bg-rose-50 text-rose-600 border-rose-100 prg:bg-rose-500",
        blue: "bg-sky-50 text-sky-600 border-sky-100 prg:bg-sky-500"
    };

    const colorClass = colors[color] || colors.indigo;
    const prgColor = colorClass.split("prg:")[1];

    return (
        <div className="p-5 rounded-3xl bg-slate-50/50 border border-slate-100 hover:border-primary/20 transition-all group cursor-pointer">
            <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${colorClass.split(" ")[0]} ${colorClass.split(" ")[1]}`}>
                    {icon}
                </div>
                <span className="text-xs font-black text-slate-500 uppercase tracking-wider">{label}</span>
            </div>
            <p className="text-2xl font-black text-indigo-900 tracking-tight">{value}</p>
            <div className="w-full h-1.5 bg-slate-100 rounded-full mt-4 overflow-hidden">
                <div 
                    className={`h-full rounded-full transition-all duration-1000 ${prgColor}`} 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
}

function ItemRow({ icon, title, sub, color }) {
    const colors = {
        indigo: "bg-indigo-50 text-indigo-500",
        green: "bg-emerald-50 text-emerald-500",
        red: "bg-rose-50 text-rose-500"
    };

    return (
        <div className="flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all group-hover:rotate-6 ${colors[color]}`}>
                    {icon}
                </div>
                <div>
                    <p className="text-sm font-black text-indigo-900 group-hover:text-primary transition-colors">{title}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{sub}</p>
                </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-primary-light group-hover:text-primary transition-all">
                <FiChevronRight size={16} />
            </div>
        </div>
    );
}
