export default function Header() {
    return (
        <header className="w-full bg-transparent h-12 flex items-center px-10 mt-4">
            <nav className="flex text-sm font-bold tracking-tight">
                <span className="text-slate-400">Home</span>
                <span className="mx-1 text-slate-300">/</span>
                <span className="text-slate-400">Dashboard</span>
            </nav>
        </header>
    );
}

