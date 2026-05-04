import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        <div className="flex min-h-screen bg-gray-50 font-sans overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Background ambient gradient for main area */}
                <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-teal-50 to-transparent pointer-events-none -z-10"></div>
                
                <Header />
                <main className="p-6 md:p-10 flex-1 overflow-y-auto scroll-smooth">
                    <div className="max-w-6xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
