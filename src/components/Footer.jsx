import { Truck, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primeDark border-t border-white/10 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="bg-accentBlue p-2 rounded-lg">
                                <Truck className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-heading font-bold tracking-tight text-white">
                                Ideal Trade <span className="text-accentBlue">Inc</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Ideal Trade Inc is a leading provider of freight dispatch and logistics management across the United States. We empower carriers to maximize profitability.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Our Services', 'How It Works', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-white transition-colors flex items-center group">
                                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-accentBlue mt-0.5" />
                                <a href="tel:2236663330" className="text-slate-400 hover:text-white transition-colors">+1 (223) 666-3330</a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-accentBlue mt-0.5" />
                                <a href="mailto:idealtradee@gmail.com" className="text-slate-400 hover:text-white transition-colors">idealtradee@gmail.com</a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-accentBlue mt-0.5" />
                                <span className="text-slate-400">1217 Rhawn St, Apt 1<br />Philadelphia, PA 19111</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-heading font-bold mb-6">Newsletter</h4>
                        <p className="text-slate-400 text-sm mb-4">Subscribe to get industry news and insights.</p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="flex-1 bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-accentBlue transition-colors text-sm"
                            />
                            <button className="bg-accentBlue hover:bg-blue-600 px-4 py-2 rounded-r-lg transition-colors">
                                <ArrowRight className="w-5 h-5 text-white" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} Ideal Trade Inc. All Rights Reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
