export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-green-50">
            <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-green-700 text-lg font-semibold">Memuat Data...</p>
        </div>
    );
}
