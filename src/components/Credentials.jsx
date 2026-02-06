import { motion } from 'framer-motion';

const Credentials = () => {
    return (
        <div className="bg-primeDark relative -mt-10 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-primeBlue border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col md:flex-row justify-around items-center gap-6"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-slate-400 text-sm uppercase tracking-wider mb-1">Official MC Number</span>
                        <span className="text-3xl font-bold text-white font-mono text-accentBlue">1336562</span>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-white/10" />

                    <div className="flex flex-col items-center">
                        <span className="text-slate-400 text-sm uppercase tracking-wider mb-1">USDOT Number</span>
                        <span className="text-3xl font-bold text-white font-mono text-accentOrange">3757819</span>
                    </div>

                    <div className="hidden md:block w-px h-16 bg-white/10" />
                    <div className="flex flex-col items-center">
                        <span className="text-slate-400 text-sm uppercase tracking-wider mb-1">Safety Rating</span>
                        <span className="text-xl font-bold text-green-400 flex items-center gap-2">
                            Satisfactory
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Credentials;
