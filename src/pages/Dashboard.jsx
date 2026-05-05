import { FiBox, FiShoppingCart, FiUsers, FiTrendingUp, FiX, FiArrowUpRight, FiDollarSign, FiPlusCircle, FiChevronRight } from "react-icons/fi";
import { useState } from "react";
import dummyData from "../dummyData.json";

export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div className="animate-fade-in space-y-6">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                {/* Main Stats Area */}
                <div className="xl:col-span-3 space-y-6">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-stroke relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <p className="text-sm font-medium text-slate-500">Active users right now</p>
                                <h2 className="text-4xl font-bold text-slate-800 mt-1">300</h2>
                                <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                                    <FiBox className="text-primary" />
                                    <span>Page views per minute</span>
                                </div>
                            </div>
                            <div className="w-24 h-12 bg-primary/5 rounded-lg flex items-end justify-center gap-1 p-2">
                                <div className="w-2 h-4 bg-primary/20 rounded-t-sm"></div>
                                <div className="w-2 h-6 bg-primary/40 rounded-t-sm"></div>
                                <div className="w-2 h-8 bg-primary/60 rounded-t-sm"></div>
                                <div className="w-2 h-10 bg-primary rounded-t-sm"></div>
                            </div>
                        </div>
                        
                        {/* Mock Chart Area */}
                        <div className="h-48 w-full bg-primary/5 rounded-2xl flex items-end justify-between p-4 gap-2">
                            {[40, 70, 45, 90, 65, 30, 85, 55, 75, 40, 60, 35].map((h, i) => (
                                <div key={i} className="flex-1 bg-primary/20 rounded-t-md relative group/bar transition-all hover:bg-primary" style={{ height: `${h}%` }}>
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-dark text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity">
                                        {h * 10}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                            <div className="p-4 rounded-2xl bg-slate-50 border border-stroke">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                                        <FiUsers size={14} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-500">Users</span>
                                </div>
                                <p className="text-xl font-bold text-slate-800">35k</p>
                                <div className="w-full h-1 bg-indigo-100 rounded-full mt-3">
                                    <div className="w-2/3 h-full bg-indigo-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-stroke">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                                        <FiTrendingUp size={14} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-500">Clicks</span>
                                </div>
                                <p className="text-xl font-bold text-slate-800">1m</p>
                                <div className="w-full h-1 bg-green-100 rounded-full mt-3">
                                    <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-stroke">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                                        <FiDollarSign size={14} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-500">Sales</span>
                                </div>
                                <p className="text-xl font-bold text-slate-800">345$</p>
                                <div className="w-full h-1 bg-red-100 rounded-full mt-3">
                                    <div className="w-1/2 h-full bg-red-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="p-4 rounded-2xl bg-slate-50 border border-stroke">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                                        <FiBox size={14} />
                                    </div>
                                    <span className="text-xs font-bold text-slate-500">Items</span>
                                </div>
                                <p className="text-xl font-bold text-slate-800">68</p>
                                <div className="w-full h-1 bg-blue-100 rounded-full mt-3">
                                    <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Chart Area */}
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-stroke">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-lg font-bold text-slate-800">Sales by Age</h3>
                            <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                <span>Sales</span>
                            </div>
                        </div>
                        <div className="h-64 flex items-center justify-center bg-slate-50 rounded-2xl border border-dashed border-stroke">
                            <p className="text-slate-400 text-sm italic">Area Chart Placeholder</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar Stats Area */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-stroke text-center">
                        <p className="text-sm font-bold text-slate-500">Your earning this month</p>
                        <h2 className="text-4xl font-black text-primary mt-4 mb-2 tracking-tight">735.2$</h2>
                        <p className="text-xs text-slate-400 font-medium">Update your payout method in Setting</p>
                        <button className="w-full mt-6 py-3 bg-primary-light text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all text-sm">
                            Withdraw All Earnings
                        </button>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-stroke">
                        <h3 className="text-base font-bold text-slate-800 mb-6">Earnings by item</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="flex items-center justify-between group cursor-pointer">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item === 1 ? 'bg-primary-light text-primary' : item === 2 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                            <FiPlusCircle size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-800 group-hover:text-primary transition-colors">Bento 3D Kit</p>
                                            <p className="text-[10px] text-slate-400 font-medium">{item === 2 ? 'Coded Template' : 'Illustration'}</p>
                                        </div>
                                    </div>
                                    <FiChevronRight className="text-slate-300 group-hover:text-primary transition-colors" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-stroke">
                        <h3 className="text-base font-bold text-slate-800 mb-6">Impression</h3>
                        <div className="h-32 flex items-end justify-between gap-2 px-2">
                            {[30, 60, 20, 80, 40].map((h, i) => (
                                <div key={i} className={`flex-1 rounded-t-lg transition-all hover:opacity-80 ${i === 3 ? 'bg-primary' : 'bg-primary-light'}`} style={{ height: `${h}%` }}></div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-2 px-2">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day) => (
                                <span key={day} className="text-[10px] font-bold text-slate-400">{day}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
