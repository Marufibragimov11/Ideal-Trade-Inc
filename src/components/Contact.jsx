import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-primeDark to-primeBlue relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accentBlue/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accentOrange/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-accentBlue font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Get In Touch
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                    >
                        Ready to Optimize Your{' '}
                        <span className="text-accentBlue">Logistics?</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                            Whether you're a carrier looking for consistent loads or a shipper needing reliable transport, we're here to help grow your business.
                        </p>

                        <div className="space-y-6">
                            <motion.a
                                href="tel:2236663330"
                                whileHover={{ x: 5 }}
                                className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:border-green-400/30 transition-all"
                            >
                                <div className="p-3 bg-green-400/20 rounded-lg text-green-400 group-hover:bg-green-400 group-hover:text-white transition-colors">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-heading font-bold mb-1">Phone Number</h4>
                                    <p className="text-slate-300 text-lg">+1 (223) 666-3330</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="mailto:idealtradee@gmail.com"
                                whileHover={{ x: 5 }}
                                className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:border-accentBlue/30 transition-all"
                            >
                                <div className="p-3 bg-accentBlue/20 rounded-lg text-accentBlue group-hover:bg-accentBlue group-hover:text-white transition-colors">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-heading font-bold mb-1">Email Address</h4>
                                    <p className="text-slate-300">idealtradee@gmail.com</p>
                                </div>
                            </motion.a>

                            <motion.a
                                href="https://maps.google.com/?q=1217+Rhawn+St+Apt+1+Philadelphia+PA+19111"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 5 }}
                                className="flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 group hover:border-accentOrange/30 transition-all"
                            >
                                <div className="p-3 bg-accentOrange/20 rounded-lg text-accentOrange group-hover:bg-accentOrange group-hover:text-white transition-colors">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-heading font-bold mb-1">Company Address</h4>
                                    <p className="text-slate-300">1217 Rhawn St, Apt 1<br />Philadelphia, PA 19111</p>
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Quote Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ boxShadow: "0 20px 60px rgba(0,168,232,0.1)" }}
                        className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10"
                    >
                        <h3 className="text-2xl font-heading font-bold text-white mb-2">Request a Quote</h3>
                        <p className="text-slate-400 mb-6">Fill out the form and we'll get back to you within 24 hours.</p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full bg-primeDark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue/50 transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-primeDark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue/50 transition-all"
                                />
                            </div>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full bg-primeDark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue/50 transition-all"
                            />
                            <select className="w-full bg-primeDark/50 border border-white/10 rounded-xl px-4 py-3 text-slate-400 focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue/50 transition-all">
                                <option value="">Select Service Type</option>
                                <option value="dispatch">Dispatch Services</option>
                                <option value="dryvan">Dry Van / Reefer</option>
                                <option value="flatbed">Flatbed</option>
                                <option value="other">Other</option>
                            </select>
                            <textarea
                                rows="3"
                                placeholder="Tell us about your needs..."
                                className="w-full bg-primeDark/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue/50 transition-all resize-none"
                            ></textarea>

                            <motion.button
                                whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0,168,232,0.4)" }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-accentBlue text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center transition-all"
                            >
                                <Send className="w-5 h-5 mr-2" />
                                Submit Request
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
