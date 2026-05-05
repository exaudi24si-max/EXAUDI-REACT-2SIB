import { FiSearch, FiBell, FiCode } from "react-icons/fi";

export default function Header() {
    return (
        <header className="sticky top-0 z-40 flex w-full bg-body h-20 items-center">
            <div className="flex flex-grow items-center justify-between px-6 md:px-10">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Dashboard</h1>
                </div>

                <div className="flex-1 max-w-2xl mx-10 hidden lg:block">
                    <div className="relative group">
                        <input
                            type="text"
                            placeholder="Search anything here..."
                            className="w-full bg-white border border-stroke rounded-xl py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary/10 focus:border-primary transition-all text-sm shadow-sm"
                        />
                        <FiSearch size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" />
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button className="p-2 text-slate-500 hover:text-primary hover:bg-white rounded-lg transition-all">
                        <FiCode size={20} />
                    </button>
                    <button className="p-2 text-slate-500 hover:text-primary hover:bg-white rounded-lg transition-all relative">
                        <FiBell size={20} />
                        <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-body"></span>
                    </button>
                </div>
            </div>
        </header>
    );
}
