import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle, Activity, FileCheck } from 'lucide-react';
import LogisticsMap from './LogisticsMap';

const Safety = () => {
    return (
        <section className="py-20 bg-primeDark/50 border-y border-white/5 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-accentBlue/5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-accentOrange/10 px-4 py-2 rounded-full mb-6 border border-accentOrange/20">
                            <ShieldCheck className="h-5 w-5 text-accentOrange" />
                            <span className="text-sm font-bold text-accentOrange uppercase tracking-wide">Safety First</span>
                        </div>
                        <h2 className="text-4xl font-heading font-bold text-white mb-6 leading-tight">
                            Safety is our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentOrange to-red-500">Currency</span>.
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            We don't strictly adhere to FMCSA regulations because we have to — do it because it protects your freight and our people.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="bg-green-500/20 p-2 rounded-lg text-green-400">
                                    <CheckCircle className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-heading font-bold">USDOT #3757819</h4>
                                    <p className="text-slate-400 text-sm">Active & Compliant</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400">
                                    <FileCheck className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">MC #1336562</h4>
                                    <p className="text-slate-400 text-sm">Authorized Carrier</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="bg-purple-500/20 p-2 rounded-lg text-purple-400">
                                    <Activity className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Real-time ELD Monitoring</h4>
                                    <p className="text-slate-400 text-sm">24/7 Fleet Tracking</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-full min-h-[400px] w-full"
                    >
                        <LogisticsMap />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Safety;
