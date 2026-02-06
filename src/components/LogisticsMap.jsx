import ReactUSAMap from "react-usa-map";
import { motion } from "framer-motion";

const LogisticsMap = () => {
    return (
        <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-slate-900 border border-white/10 rounded-2xl relative overflow-hidden group p-4">

            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            {/* Neon Glow Filter SVG */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="neon" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>

            <div className="w-full h-full flex items-center justify-center logistics-map-container z-10 transition-all duration-500">
                <ReactUSAMap width="100%" height="auto" />
            </div>

            {/* Styles injected locally for the map paths */}
            <style>{`
        .logistics-map-container path {
            fill: transparent !important;
            stroke: #F59E0B !important;
            stroke-width: 1.5px !important;
            transition: all 0.3s ease;
            filter: drop-shadow(0 0 2px #F59E0B);
        }
        .logistics-map-container path:hover {
            fill: rgba(245, 158, 11, 0.15) !important;
            stroke-width: 2px !important;
            cursor: pointer;
            filter: drop-shadow(0 0 8px #F59E0B);
        }
      `}</style>

            {/* Legend */}
            <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-orange-500/30 text-xs text-orange-400 font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(245,158,11,0.2)] z-20">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accentOrange animate-pulse" />
                    Nationwide Coverage
                </div>
            </div>
        </div>
    );
};

export default LogisticsMap;
