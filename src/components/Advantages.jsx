import { motion } from 'framer-motion';
import { DollarSign, Zap, Award, ShieldCheck } from 'lucide-react';

const advantages = [
    {
        icon: DollarSign,
        title: "Maximum Profitability",
        description: "We negotiate for top dollar on every load, ensuring your trucks stay busy and profitable with minimal deadhead.",
        color: "green-400"
    },
    {
        icon: Zap,
        title: "Instant Setup",
        description: "Our streamlined onboarding process gets you on the road and hauling within 24 hours. No lengthy paperwork.",
        color: "accentOrange"
    },
    {
        icon: Award,
        title: "Industry Experience",
        description: "Years of specialized logistics knowledge to handle any regulatory or operational challenge with confidence.",
        color: "accentBlue"
    },
    {
        icon: ShieldCheck,
        title: "Compliance Mastery",
        description: "Stay worry-free; we manage all safety and legal paperwork with 100% accuracy and FMCSA compliance.",
        color: "purple-400"
    }
];

const AdvantageCard = ({ icon: Icon, title, description, color, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
        whileHover={{
            y: -10,
            boxShadow: "0 20px 40px rgba(245, 158, 11, 0.2)"
        }}
        className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl transition-all duration-300 group overflow-hidden"
    >
        {/* Glow Effect */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        <div className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-${color}/20 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`h-8 w-8 text-${color}`} />
        </div>
        <h3 className="relative z-10 text-xl font-heading font-bold text-white mb-3 group-hover:text-accentOrange transition-colors">
            {title}
        </h3>
        <p className="relative z-10 text-slate-400 leading-relaxed">
            {description}
        </p>
    </motion.div>
);

const Advantages = () => {
    return (
        <section id="advantages" className="py-24 bg-primeDark relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accentBlue/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accentOrange/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-accentOrange font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        The Ideal Trade Standard
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        Why Brokers{' '}
                        <span className="text-accentOrange">Choose Us</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg"
                    >
                        We don't just find loads; we build partnerships. Our goal is to see your business grow through reliable dispatch and consistent freight volume.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((advantage, index) => (
                        <AdvantageCard key={advantage.title} {...advantage} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;
