import { motion } from 'framer-motion';
import { UserPlus, Search, FileCheck, Truck } from 'lucide-react';

const steps = [
    {
        number: "01",
        icon: UserPlus,
        title: "Registration",
        description: "Submit your carrier details and preferences through our quick onboarding form. Get started in minutes."
    },
    {
        number: "02",
        icon: Search,
        title: "Load Matching",
        description: "Our algorithms and dispatchers find the best loads based on your equipment, location, and preferred routes."
    },
    {
        number: "03",
        icon: FileCheck,
        title: "Booking & Paperwork",
        description: "We handle all negotiations and documentation with the brokers on your behalf. You focus on driving."
    },
    {
        number: "04",
        icon: Truck,
        title: "Freight on the Move",
        description: "Real-time tracking and support throughout the entire delivery journey. 24/7 assistance available."
    }
];

const WorkflowStep = ({ number, icon: Icon, title, description, index, isLast }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2, duration: 0.5 }}
        className="relative"
    >
        {/* Connector Line */}
        {!isLast && (
            <div className="hidden lg:block absolute top-16 left-1/2 w-full h-[2px] bg-gradient-to-r from-accentBlue/50 to-accentOrange/50" />
        )}

        <div className="relative z-10 flex flex-col items-center text-center">
            {/* Step Number */}
            <motion.div
                whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(0,168,232,0.4)" }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-accentBlue to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-accentBlue/30"
            >
                <span className="text-3xl font-heading font-bold text-white">{number}</span>
            </motion.div>

            {/* Icon */}
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 border border-white/10">
                <Icon className="h-6 w-6 text-accentOrange" />
            </div>

            {/* Content */}
            <h3 className="text-xl font-heading font-bold text-white mb-3">{title}</h3>
            <p className="text-slate-400 leading-relaxed max-w-xs">{description}</p>
        </div>
    </motion.div>
);

const Workflow = () => {
    return (
        <section id="process" className="py-24 bg-gradient-to-b from-primeBlue to-primeDark relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-accentBlue/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accentOrange/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-accentBlue font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        How It Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        The Ideal Trade{' '}
                        <span className="text-accentBlue">Workflow</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 text-lg"
                    >
                        Getting started is simple. Follow these steps to join our network and start earning more.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, index) => (
                        <WorkflowStep
                            key={step.number}
                            {...step}
                            index={index}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Workflow;
