import { motion } from 'framer-motion';
import { Radio, Truck, Package, MapPin, MessageSquare, Headphones } from 'lucide-react';

const services = [
    {
        icon: Radio,
        title: "Dispatch Services",
        description: "Expert coordination between shippers and carriers for maximum efficiency and profitability.",
        color: "accentBlue"
    },
    {
        icon: Truck,
        title: "Dry Van / Power Only / Flatbed",
        description: "Specialized equipment management for all types of freight requirements across the nation.",
        color: "accentOrange"
    },
    {
        icon: Package,
        title: "Load Booking",
        description: "Securing the most profitable loads through our extensive broker network and partnerships.",
        color: "green-400"
    },
    {
        icon: MapPin,
        title: "Route Planning",
        description: "Optimized navigation to reduce costs, minimize deadhead miles, and ensure timely deliveries.",
        color: "purple-400"
    },
    {
        icon: MessageSquare,
        title: "Broker Communication",
        description: "Professional negotiation and streamlined documentation management on your behalf.",
        color: "pink-400"
    },
    {
        icon: Headphones,
        title: "24/7 Fleet Support",
        description: "Dedicated dispatchers available around the clock to handle any issue or emergency.",
        color: "cyan-400"
    }
];

const ServiceCard = ({ icon: Icon, title, description, color, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        whileHover={{
            y: -10,
            boxShadow: "0 20px 40px rgba(245, 158, 11, 0.15)",
            borderColor: "rgba(245, 158, 11, 0.3)"
        }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl transition-all duration-300 group cursor-pointer"
    >
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-${color}/20 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`h-7 w-7 text-${color}`} />
        </div>
        <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-accentOrange transition-colors">
            {title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-sm">
            {description}
        </p>
    </motion.div>
);

const Services = () => {
    return (
        <section id="services" className="py-24 bg-gradient-to-b from-primeDark to-primeBlue relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accentBlue/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accentOrange/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-accentBlue font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        Comprehensive Logistics{' '}
                        <span className="text-accentBlue">Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg"
                    >
                        From dispatch to delivery, we handle every aspect of your freight operation with precision and care.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
