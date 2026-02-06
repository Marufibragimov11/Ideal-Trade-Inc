import { motion } from 'framer-motion';
import { Target, Cpu, Eye } from 'lucide-react';

const pillars = [
    {
        icon: Target,
        title: "Dedication",
        description: "We treat every load as if it were our own."
    },
    {
        icon: Cpu,
        title: "Innovation",
        description: "Modern software for route optimization."
    },
    {
        icon: Eye,
        title: "Transparency",
        description: "Real-time communication and fair pricing."
    }
];

const About = () => {
    return (
        <section id="about" className="py-24 bg-primeDark relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-accentBlue/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accentBlue font-bold tracking-widest uppercase text-sm mb-4 block">
                            About Ideal Trade Inc
                        </span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                            Mastering the Art of{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentOrange to-red-400">
                                Seamless Transportation.
                            </span>
                        </h2>
                        <p className="text-lg text-slate-300 leading-relaxed mb-8">
                            Based in Philadelphia, Ideal Trade Inc has established itself as a premier provider of dispatch and freight management services. Our team combines deep industry knowledge with cutting-edge route planning to ensure your cargo reaches its destination safely and on time.
                        </p>

                        {/* Pillars */}
                        <div className="space-y-4">
                            {pillars.map((pillar, index) => (
                                <motion.div
                                    key={pillar.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    className="flex items-start space-x-4"
                                >
                                    <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                                        <pillar.icon className="h-6 w-6 text-accentBlue" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-heading font-bold text-lg">{pillar.title}</h4>
                                        <p className="text-slate-400">{pillar.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-accentOrange/10 blur-3xl rounded-full" />
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/5">
                                    <p className="text-4xl font-heading font-bold text-accentBlue">98%</p>
                                    <p className="text-slate-400 text-sm mt-2">On-Time Delivery</p>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/5">
                                    <p className="text-4xl font-heading font-bold text-accentOrange">24/7</p>
                                    <p className="text-slate-400 text-sm mt-2">Support Available</p>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/5">
                                    <p className="text-4xl font-heading font-bold text-green-400">100%</p>
                                    <p className="text-slate-400 text-sm mt-2">Compliance Rate</p>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/5">
                                    <p className="text-4xl font-heading font-bold text-purple-400">50+</p>
                                    <p className="text-slate-400 text-sm mt-2">Active Drivers</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
