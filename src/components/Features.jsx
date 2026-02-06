import { motion } from 'framer-motion';
import { Map, Clock, Shield, Truck } from 'lucide-react';

const icons = {
    Map: Map,
    Clock: Clock,
    Shield: Shield,
    Truck: Truck
};

const FeatureCard = ({ title, description, icon, delay }) => {
    const Icon = icons[icon];
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="group p-8 bg-primeBlue rounded-2xl border border-white/5 hover:border-accentBlue/30 hover:shadow-[0_0_30px_rgba(0,168,232,0.1)] transition-all duration-300"
        >
            <div className="w-14 h-14 bg-primeDark rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-accentBlue/50 text-accentBlue">
                <Icon className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed">{description}</p>
        </motion.div>
    );
};

const Features = () => {
    const features = [
        {
            title: "98% On-Time Performance",
            description: "Data-driven dispatching and route optimization key metrics minimize delays and ensure your freight arrives as scheduled.",
            icon: "Clock",
        },
        {
            title: "24/7 Dispatch Center",
            description: "We don't close at 5 PM. Real humans are available around the clock to answer calls and resolve issues instantly.",
            icon: "Shield", // Swapping icons to fit best available from previous map, or I can update map too. "Shield" generally fits "Reliability/Dispatch" or I can use "Map"
        },
        {
            title: "Modern Fleet",
            description: "All equipment is 2021 or newer to reduce breakdown risks and maximize fuel efficiency on the road.",
            icon: "Truck",
        },
    ];

    return (
        <section id="why-us" className="py-24 bg-primeDark relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primeBlue/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accentBlue font-bold tracking-widest uppercase text-sm mb-2 block"
                    >
                        The Ideal Advantage
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        Why Shippers <span className="text-accentBlue">Trust Us</span>
                    </motion.h2>
                    <p className="text-slate-400 text-lg">
                        Operational excellence isn't just a goal; it's our standard procedure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            {...feature}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
