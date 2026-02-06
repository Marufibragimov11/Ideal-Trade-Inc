import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Headphones, Clock } from 'lucide-react';

const TrustBadge = ({ icon: Icon, title, subtitle, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-center space-x-3 bg-white/5 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10"
    >
        <div className="bg-accentBlue/20 p-2 rounded-lg">
            <Icon className="h-5 w-5 text-accentBlue" />
        </div>
        <div>
            <p className="text-white font-semibold text-sm">{title}</p>
            <p className="text-slate-400 text-xs">{subtitle}</p>
        </div>
    </motion.div>
);

const Hero = () => {
    return (
        <div id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 bg-hero-pattern bg-cover bg-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primeDark via-primeDark/90 to-primeDark/70" />
                <div className="absolute inset-0 bg-primeDark/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-accentOrange/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-accentOrange/20">
                            <Shield className="h-5 w-5 text-accentOrange" />
                            <span className="text-sm font-bold text-accentOrange uppercase tracking-wide">Licensed & Bonded Carrier</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6">
                            Premium Logistics Engineered for{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-blue-400">
                                Precision.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
                            Ideal Trade Inc provides industry-leading dispatch and transport solutions. We bridge the gap between shippers and carriers with 24/7 support and unparalleled expertise.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,168,232,0.5)" }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex items-center justify-center px-8 py-4 bg-accentBlue text-white text-lg font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(0,168,232,0.3)]"
                            >
                                Get Started Today
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                href="#services"
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                                className="flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm text-white text-lg font-bold rounded-xl border border-white/20 transition-all"
                            >
                                Our Services
                            </motion.a>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <TrustBadge icon={Globe} title="National Reach" subtitle="Full US coverage" delay={0.3} />
                            <TrustBadge icon={Shield} title="Secure Transport" subtitle="Fully insured & bonded" delay={0.4} />
                            <TrustBadge icon={Headphones} title="24/7 Support" subtitle="Real-time monitoring" delay={0.5} />
                        </div>
                    </motion.div>

                    {/* Right Column - Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:flex justify-center"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-accentBlue/20 blur-3xl rounded-full" />
                            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.6, type: "spring" }}
                                    className="text-8xl font-heading font-bold text-white mb-2"
                                >
                                    5<span className="text-accentBlue">+</span>
                                </motion.div>
                                <p className="text-xl text-slate-300 font-medium">Years Experience</p>
                                <div className="mt-6 flex items-center justify-center space-x-2">
                                    <Clock className="h-5 w-5 text-accentOrange" />
                                    <span className="text-slate-400">Trusted since 2021</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400"
            >
                <span className="text-sm uppercase tracking-widest mb-2">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 via-slate-400 to-transparent" />
            </motion.div>
        </div>
    );
};

export default Hero;
