import { useState, useEffect } from 'react';

// Type definitions
interface ImageData {
    id: number;
    url: string;
    title: string;
    description: string;
}

interface InfoCard {
    id: number;
    icon: string;
    title: string;
    value: string;
    subtitle: string;
    trend: string;
    color: string;
}

interface TVDisplayProps {
    images?: ImageData[];
    videoUrl?: string;
}

const Index = ({ images: propImages, videoUrl }: TVDisplayProps) => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [isMuted, setIsMuted] = useState(true);

    // Update waktu setiap detik
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Format waktu
    const formatTime = (date: Date): string => {
        return date.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const formatDate = (date: Date): string => {
        return date.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Data dummy untuk images
    const defaultImages: ImageData[] = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
            title: 'Informasi Penting 1',
            description: 'Included in information generating platforms'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
            title: 'mākra',
            description: 'Tamim iptum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
        }
    ];

    // Data untuk card informasi di kiri-kanan video
    const infoCards: InfoCard[] = [
        {
            id: 1,
            icon: '⚡',
            title: 'DAYA TERPASANG',
            value: '45.678 MW',
            subtitle: 'Kapasitas Total',
            trend: '+2.3%',
            color: 'from-blue-500 to-blue-600'
        },
        {
            id: 2,
            icon: '📊',
            title: 'BEBAN PUNCAK',
            value: '38.456 MW',
            subtitle: 'Hari Ini',
            trend: '-1.2%',
            color: 'from-green-500 to-green-600'
        },
        {
            id: 3,
            icon: '🔋',
            title: 'KEANDALAN',
            value: '99.87%',
            subtitle: 'SAIDI Index',
            trend: '+0.05%',
            color: 'from-purple-500 to-purple-600'
        },
        {
            id: 4,
            icon: '👥',
            title: 'PELANGGAN',
            value: '85.4 Jt',
            subtitle: 'Tersambung',
            trend: '+0.8%',
            color: 'from-orange-500 to-orange-600'
        },
        {
            id: 5,
            icon: '🌱',
            title: 'ENERGI TERBARUKAN',
            value: '24.5%',
            subtitle: 'Dari Total',
            trend: '+3.1%',
            color: 'from-teal-500 to-teal-600'
        },
        {
            id: 6,
            icon: '🔄',
            title: 'EFISIENSI',
            value: '94.2%',
            subtitle: 'Transmisi',
            trend: '+0.7%',
            color: 'from-indigo-500 to-indigo-600'
        }
    ];

    const images = propImages || defaultImages;

    return (
        <div className="w-screen h-screen bg-gray-50 flex flex-col overflow-hidden">
            {/* Header - Full Width */}
            <div
                className="bg-gradient-to-r from-[#15677b] to-[#179fb7] flex items-center justify-between px-8 shadow-lg"
                style={{ height: '80px', width: '100%' }}
            >
                <div className="flex items-center gap-3">
                    <img src="/images/Logo_PLN.png" alt="Logo PLN" className="h-11 w-auto" />
                    <div>
                        <h1 className="text-2xl font-bold text-white tracking-wide leading-none">
                            Dashboard PLN
                        </h1>
                        <p className="text-blue-100 text-[12px] leading-none mt-0.5">
                            {formatDate(currentTime)}
                        </p>
                    </div>
                </div>

                <div className="text-right">
                    <div className="text-2xl font-bold text-white tabular-nums leading-none">
                        {formatTime(currentTime)}
                    </div>
                    <div className="text-blue-100 text-[10px] leading-none mt-0.5">
                        WIB
                    </div>
                </div>
            </div>

            {/* Main Content - Full Screen */}
            <div className="flex-1 flex flex-col p-6 bg-gradient-to-br from-gray-50 to-blue-50">
                {/* Video Section dengan Card di Samping */}
                <div className="flex gap-6 mb-6" style={{ height: '45vh' }}>
                    {/* Kiri - Card Informasi Grid */}
                    <div className="w-1/4">
                        <div className="bg-white rounded-2xl shadow-lg h-full p-4 overflow-y-auto">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 pl-2">📈 STATISTIK REAL-TIME</h3>
                            <div className="space-y-3">
                                {infoCards.slice(0, 3).map((card) => (
                                    <div
                                        key={card.id}
                                        className={`bg-gradient-to-r ${card.color} rounded-xl p-4 text-white transform transition-transform hover:scale-[1.02]`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="text-2xl">{card.icon}</div>
                                            <div className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                                {card.trend}
                                            </div>
                                        </div>
                                        <div className="text-xl font-bold">{card.value}</div>
                                        <div className="text-sm font-medium mt-1">{card.title}</div>
                                        <div className="text-xs text-white/80 mt-1">{card.subtitle}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Tengah - Video */}
                    <div className="flex-1 bg-black rounded-2xl overflow-hidden shadow-lg relative border-2 border-blue-200/30 group">
                        {videoUrl ? (
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="relative h-full" style={{ aspectRatio: '16/9' }}>
                                    <video
                                        className="h-full w-auto"
                                        autoPlay
                                        loop
                                        muted={isMuted}
                                        playsInline
                                    >
                                        <source src={videoUrl} type="video/mp4" />
                                    </video>
                                    <button
                                        onClick={() => setIsMuted(!isMuted)}
                                        className="absolute bottom-4 right-4 bg-black/70 p-3 rounded-full text-white hover:bg-black transition shadow-lg"
                                    >
                                        {isMuted ? '🔇' : '🔊'}
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-gray-900/20">
                                <div className="text-center">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-6 border-2 border-white/30">
                                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-2xl font-bold text-white mb-2">PLN TV MONITORING</p>
                                    <p className="text-white/80">Live Streaming Operasional</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Kanan - Card Informasi Grid */}
                    <div className="w-1/4">
                        <div className="bg-white rounded-2xl shadow-lg h-full p-4 overflow-y-auto">
                            <h3 className="text-lg font-bold text-gray-800 mb-4 pl-2">📊 PERFORMANCE</h3>
                            <div className="space-y-3">
                                {infoCards.slice(3).map((card) => (
                                    <div
                                        key={card.id}
                                        className={`bg-gradient-to-r ${card.color} rounded-xl p-4 text-white transform transition-transform hover:scale-[1.02]`}
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <div className="text-2xl">{card.icon}</div>
                                            <div className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                                {card.trend}
                                            </div>
                                        </div>
                                        <div className="text-xl font-bold">{card.value}</div>
                                        <div className="text-sm font-medium mt-1">{card.title}</div>
                                        <div className="text-xs text-white/80 mt-1">{card.subtitle}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bagian Bawah - Images dan Informasi Tambahan */}
                <div className="flex gap-6" style={{ height: 'calc(45vh - 54px)' }}>
                    {/* Kiri - Informasi Penting */}
                    <div className="w-2/5">
                        <div className="bg-white rounded-2xl shadow-lg h-full p-6 overflow-hidden">
                            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                                <span className="text-red-500">📢</span> PENGUMUMAN PENTING
                            </h3>
                            <div className="space-y-4">
                                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-red-100 p-2 rounded-lg">
                                            <span className="text-red-600">⚠️</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Pemadaman Terjadwal</h4>
                                            <p className="text-sm text-gray-600 mt-1">Jakarta Pusat, 14:00-16:00 WIB</p>
                                            <div className="text-xs text-gray-500 mt-2">Hari ini • Pemeliharaan Jaringan</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-blue-100 p-2 rounded-lg">
                                            <span className="text-blue-600">🔧</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Update Sistem</h4>
                                            <p className="text-sm text-gray-600 mt-1">Maintenance server 02:00-04:00 WIB</p>
                                            <div className="text-xs text-gray-500 mt-2">Besok • Dampak minimal</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                                    <div className="flex items-start gap-3">
                                        <div className="bg-green-100 p-2 rounded-lg">
                                            <span className="text-green-600">✅</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-800">Proyek Selesai</h4>
                                            <p className="text-sm text-gray-600 mt-1">PLTS 50MW di Bali beroperasi</p>
                                            <div className="text-xs text-gray-500 mt-2">2 hari lalu • Energi Terbarukan</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tengah & Kanan - Images */}
                    {images.slice(0, 2).map((image, index) => (
                        <div
                            key={image.id}
                            className="flex-1 relative overflow-hidden rounded-2xl shadow-lg bg-white group border border-gray-100"
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h2 className="text-2xl font-bold mb-2 drop-shadow-lg">
                                    {image.title}
                                </h2>
                                <p className="text-base text-gray-100 drop-shadow-md line-clamp-2 leading-relaxed">
                                    {image.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Status */}
            {/* <div className="bg-gray-800 text-white py-2 px-6 flex items-center justify-between text-sm">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Status: <span className="font-bold">SEMUA SISTEM OPERASIONAL</span></span>
                    </div>
                    <div className="text-gray-400">|</div>
                    <div>Terakhir Update: {formatTime(currentTime)}</div>
                </div>
                <div className="text-gray-300">
                    PLN Nusantara Power • Control Room
                </div>
            </div> */}

            <style>{`
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                ::-webkit-scrollbar {
                    width: 4px;
                }
                ::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                ::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

export default Index;





<div className="col-span-2 row-span-2 col-start-2 row-start-4 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700/50 overflow-hidden">
    <div className="p-5 h-full">
        <div className="grid grid-cols-2 gap-4 h-full">
            {/* Left: System Status */}
            <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                    <span className="text-green-400">📊</span> Status Sistem
                </h3>
                <div className="grid grid-cols-2 gap-3 flex-1">
                    {systemStatus.map((item, idx) => (
                        <div key={idx} className="bg-gray-900/50 rounded-lg p-3 flex flex-col items-center justify-center text-center hover:bg-gray-900/70 transition-colors">
                            <div className="text-2xl mb-2">{item.icon}</div>
                            <div className="text-lg font-bold text-white">{item.value}</div>
                            <div className="text-xs text-gray-300 mt-1">{item.label}</div>
                        </div>
                    ))}
                </div>

                {/* System Health */}
                <div className="mt-4 pt-3 border-t border-gray-700/30">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-300">Kesehatan Sistem</div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <div className="text-xs text-green-400 font-medium">OPTIMAL</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Key Metrics */}
            <div className="flex flex-col">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                    <span className="text-blue-400">🏆</span> Statistik PLN
                </h3>
                <div className="grid grid-cols-2 gap-3 flex-1">
                    {metrics.map((metric, idx) => (
                        <div
                            key={idx}
                            className={`bg-gradient-to-r ${metric.color} rounded-lg p-3 flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform shadow-lg`}
                        >
                            <div className="text-2xl mb-2">{metric.icon}</div>
                            <div className="text-xl font-bold text-white">{metric.value}</div>
                            <div className="text-xs text-white/80 mt-1">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-4 pt-3 border-t border-gray-700/30">
                    <div className="text-center">
                        <div className="text-xs text-gray-400">Update: {formatTime(currentTime)}</div>
                        <div className="text-xs text-blue-300 mt-1">pln.co.id</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>