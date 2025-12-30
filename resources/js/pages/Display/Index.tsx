import { useState, useEffect, useRef, useCallback } from 'react';

// Type definitions
interface FlyerData {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    // type?: 'poster' | 'infographic' | 'announcement';
    // priority?: 'high' | 'medium' | 'low';
}

interface KontainerBawahData {
    id: number;
    key: string;
    label: string;
    value: string;
    icon: string;
    color: string | null;
    type: string;
    status: string | null;
}

interface TVDisplayProps {
    flyers?: FlyerData[];
    videoUrl?: string;
    kontainerBawah?: KontainerBawahData[];
}

// Custom Hook for Infinite Scroll - REDUCES CODE DUPLICATION
const useInfiniteScroll = (items: FlyerData[], speed: number, isPaused: boolean) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<number>();
    const positionRef = useRef(0);
    const lastTimeRef = useRef<number>(Date.now());

    useEffect(() => {
        const animate = () => {
            if (scrollRef.current && !isPaused) {
                const now = Date.now();
                const deltaTime = (now - lastTimeRef.current) / 16.67; // Normalize to 60fps
                lastTimeRef.current = now;

                positionRef.current -= speed * deltaTime;

                const contentHeight = scrollRef.current.scrollHeight / 3;
                if (Math.abs(positionRef.current) >= contentHeight) {
                    positionRef.current = 0;
                }

                scrollRef.current.style.transform = `translateY(${positionRef.current}px)`;
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [items, speed, isPaused]);

    return scrollRef;
};

// Flyer Card Component - REUSABLE
const FlyerCard = ({ flyer, index, side }: { flyer: FlyerData; index: number; side: string }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <div
            key={`${side}-${flyer.id}-${index}`}
            className="relative w-full h-[25vh] group overflow-hidden"
        >
            <div className="absolute inset-0">
                {!imageLoaded && !imageError && (
                    <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center">
                        <div className="text-gray-600">⏳ Loading...</div>
                    </div>
                )}

                {imageError ? (
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                            <div className="text-4xl mb-2">🖼️</div>
                            <div className="text-sm">Image unavailable</div>
                        </div>
                    </div>
                ) : (
                    <>
                        <img
                            src={flyer.imageUrl}
                            alt={`${flyer.title} - ${flyer.description}`}
                            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageError(true)}
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </>
                )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                </div>

                <h3 className="text-lg font-bold mb-1 drop-shadow-lg line-clamp-1">
                    {flyer.title}
                </h3>
                <p className="text-xs text-gray-200 drop-shadow-md line-clamp-2">
                    {flyer.description}
                </p>
            </div>
        </div>
    );
};

const Index = ({ flyers: propFlyers = [], videoUrl, kontainerBawah = [] }: TVDisplayProps) => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [isVideoMuted, setIsVideoMuted] = useState(true);
    const [videoError, setVideoError] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const flyers = propFlyers && propFlyers.length > 0 ? propFlyers : [];
    const duplicatedFlyers = [...flyers, ...flyers, ...flyers];

    // Use custom hooks for infinite scroll
    const leftScrollRef = useInfiniteScroll(flyers, 0.5, isPaused);
    const rightScrollRef = useInfiniteScroll(flyers, 0.7, isPaused);

    // Update time
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Keyboard controls
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                setIsPaused(prev => !prev);
            } else if (e.code === 'KeyM') {
                setIsVideoMuted(prev => !prev);
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    const handleVideoError = useCallback(() => {
        setVideoError(true);
    }, []);

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

    // Use dynamic data if available, otherwise use empty array
    const keyMetrics = kontainerBawah.length > 0 ? kontainerBawah : [];

    return (
        <div className="w-screen h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex flex-col overflow-hidden p-0 m-0">
            {/* Header */}
            <header className="bg-gradient-to-r from-[#0a3d62] to-[#15677b] flex items-center justify-between px-6 py-3 border-b border-blue-400/20">
                <div className="flex items-center gap-3">
                    {/* <div className="bg-white p-1 rounded-lg"> */}
                    <img
                        src="/images/Logo_PLN.png"
                        alt="Logo PLN"
                        className="h-12 w-auto"
                    />
                    {/* </div> */}
                    <div>
                        <h1 className="text-xl font-bold text-white tracking-wide">
                            PLN UP3 DUMAI
                        </h1>
                        <p className="text-blue-200 text-xs">
                            {formatDate(currentTime)}
                        </p>
                    </div>
                </div>

                <div className="text-right">
                    <div className="flex items-center gap-4">
                        {/* <div className="text-center">
                            <div className="text-lg font-bold text-green-300">TV</div>
                            <div className="text-blue-200 text-xs">Display</div>
                        </div>
                        <div className="h-8 w-px bg-blue-400/30"></div> */}
                        <div className="text-right">
                            <div className="text-xl font-bold text-white tabular-nums">
                                {formatTime(currentTime)}
                            </div>
                            <div className="text-blue-200 text-xs">
                                {formatDate(currentTime)}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-4 bg-gradient-to-b from-gray-900/50 to-blue-900/30 overflow-hidden">
                <div className="grid grid-cols-4 grid-rows-5 gap-4 h-full w-full">

                    {/* LEFT FLYER AREA */}
                    <div
                        className="row-span-5 relative overflow-hidden rounded-xl shadow-2xl border-2 border-blue-500/30 bg-gray-900/50"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        role="region"
                        aria-label="Left flyer carousel"
                    >
                        {/* Gradient fade removed for clearer visibility */}

                        <div className="absolute inset-0">
                            <div
                                ref={leftScrollRef}
                                className="absolute inset-x-0"
                                style={{ willChange: 'transform' }}
                            >
                                {flyers.length > 0 ? duplicatedFlyers.map((flyer, index) => (
                                    <FlyerCard key={`left-${flyer.id}-${index}`} flyer={flyer} index={index} side="left" />
                                )) : (
                                    <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center p-4 pt-32">
                                        <div className="text-4xl mb-2">🖼️</div>
                                        <p>Belum ada gambar</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* <div className="absolute top-4 left-4 z-20">
                            <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white flex items-center gap-1">
                                <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-500' : 'bg-green-500 animate-pulse'}`}></div>
                                <span>{isPaused ? 'PAUSED' : 'SCROLLING'}</span>
                            </div>
                        </div> */}
                    </div>

                    {/* VIDEO AREA */}
                    <section className="col-span-2 row-span-3 col-start-2 row-start-1 relative overflow-hidden rounded-xl shadow-2xl border-2 border-cyan-500/30 bg-black" aria-label="Live video stream">
                        {videoUrl ? (
                            <>
                                <video
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted={isVideoMuted}
                                    playsInline
                                    onError={handleVideoError}
                                    aria-label="PLN operational monitoring video"
                                >
                                    <source src={videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 right-4 flex items-center gap-3">
                                        <button
                                            onClick={() => setIsVideoMuted(!isVideoMuted)}
                                            className="bg-black/70 p-3 rounded-full text-white hover:bg-black transition-all backdrop-blur-sm shadow-lg"
                                            aria-label={isVideoMuted ? 'Unmute video' : 'Mute video'}
                                        >
                                            {isVideoMuted ? '🔇' : '🔊'}
                                        </button>
                                    </div>

                                    <div className="absolute top-4 left-4">
                                        <div className="bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                                            <div className="text-sm font-bold text-white">PLN LIVE STREAMING</div>
                                            <div className="text-xs text-cyan-100">Monitoring Operasional</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-4 right-4">
                                    <div className="bg-red-600 px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 animate-pulse">
                                        <span className="w-2 h-2 bg-white rounded-full"></span>
                                        LIVE
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-blue-900">
                                <div className="text-6xl mb-4">📹</div>
                                <p className="text-2xl font-bold text-white mb-2">PLN TV Monitoring</p>
                                <p className="text-gray-400 mb-6">Live Streaming Operational</p>
                                <div className="text-sm text-gray-500 bg-black/50 px-4 py-2 rounded-lg">
                                    Video stream tidak tersedia
                                </div>
                            </div>
                        )}

                        {videoError && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm">
                                <div className="text-4xl mb-4">⚠️</div>
                                <p className="text-xl font-bold text-white mb-2">Video Error</p>
                                <p className="text-gray-400 mb-4">Streaming sedang tidak tersedia</p>
                                <button
                                    onClick={() => setVideoError(false)}
                                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white text-sm"
                                >
                                    Coba Lagi
                                </button>
                            </div>
                        )}
                    </section>

                    {/* UNIFIED INFO & METRICS CONTAINER */}
                    <section
                        className="col-span-2 row-span-2 col-start-2 row-start-4 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-700/50 overflow-hidden relative group"
                        aria-label="System information and statistics"
                    >
                        {/* Unified Header */}
                        <div className="absolute top-0 left-0 right-0 bg-white/5 px-4 py-2 border-b border-gray-700/50 flex items-center justify-between z-10">
                            <h3 className="text-sm font-bold text-white flex items-center gap-2">
                                <span className="text-cyan-400">📊</span> Informasi & Statistik Sistem
                            </h3>
                        </div>

                        {/* Content Area - 2x2 Grid */}
                        <div className="p-4 pt-12 h-full">
                            <div className="grid grid-cols-2 grid-rows-2 gap-3 h-full">
                                {keyMetrics.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className={`relative rounded-xl p-5 flex flex-col items-center justify-center text-center transition-all duration-500 hover:scale-[1.02]
                        ${item.type === 'status'
                                                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700'
                                                : `bg-gradient-to-br ${item.color} border border-white/10`
                                            }
                    `}
                                    >
                                        <div className="text-4xl mb-3 filter drop-shadow-md">{item.icon}</div>
                                        <div className="text-2xl font-bold text-white tracking-tight leading-none mb-1.5">
                                            {item.value}
                                        </div>
                                        <div className={`text-xs uppercase tracking-wider font-semibold ${item.type === 'status' ? 'text-gray-400' : 'text-white/80'}`}>
                                            {item.label}
                                        </div>

                                        {/* Status Indicator for Status items */}
                                        {item.type === 'status' && (
                                            <div className="absolute top-2 right-2">
                                                <div className={`w-2 h-2 rounded-full ${item.status === 'normal' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>


                    {/* RIGHT FLYER AREA */}
                    <div
                        className="row-span-5 col-start-4 row-start-1 relative overflow-hidden rounded-xl shadow-2xl border-2 border-amber-500/30 bg-gray-900/50"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        role="region"
                        aria-label="Right flyer carousel"
                    >
                        {/* Gradient fade removed for clearer visibility */}

                        <div className="absolute inset-0">
                            <div
                                ref={rightScrollRef}
                                className="absolute inset-x-0"
                                style={{ willChange: 'transform' }}
                            >
                                {flyers.length > 0 ? duplicatedFlyers.map((flyer, index) => (
                                    <FlyerCard key={`right-${flyer.id}-${index}`} flyer={flyer} index={index} side="right" />
                                )) : (
                                    <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center p-4 pt-32">
                                        <div className="text-4xl mb-2">🖼️</div>
                                        <p>Belum ada gambar</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* <div className="absolute top-4 left-4 z-20">
                            <div className="bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white flex items-center gap-1">
                                <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-500' : 'bg-amber-500 animate-pulse'}`}></div>
                                <span>{isPaused ? 'PAUSED' : 'SCROLLING'}</span>
                            </div>
                        </div> */}

                        {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2">
                            <div className="text-white animate-bounce">▼</div>
                            <div className="text-white animate-bounce" style={{ animationDelay: '0.1s' }}>▼</div>
                            <div className="text-white animate-bounce" style={{ animationDelay: '0.2s' }}>▼</div>
                            <div className="text-white animate-bounce" style={{ animationDelay: '0.3s' }}>▼</div>
                        </div> */}
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-gray-900 to-blue-900 border-t border-blue-500/20 py-2 px-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="text-xs text-gray-400">
                            Update: {formatTime(currentTime)} | PLN TV Dashboard
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${videoError ? 'bg-red-500' : 'bg-green-500'} animate-pulse`}></div>
                            <div className="text-xs text-gray-300">
                                Video: {videoError ? 'OFFLINE' : 'LIVE'}
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex items-center gap-6">
                        <div className="text-xs text-blue-300 flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-yellow-500' : 'bg-green-500 animate-pulse'}`}></span>
                            <span>{isPaused ? 'PAUSED (hover to pause)' : 'Scrolling Active'}</span>
                        </div>
                        <div className="text-xs text-gray-400">
                            ⌨️ Controls: SPACE (pause) | M (mute)
                        </div>
                    </div> */}
                </div>
            </footer>
        </div>
    );
};

export default Index;