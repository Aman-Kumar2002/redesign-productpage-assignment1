import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        practiceType: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ready to transform your healthcare practice? Contact us today to learn more about our solutions.
                    </p>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <HiOutlineMail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                                    <p className="text-gray-600">support@healthcareplatform.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <HiOutlinePhone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-3 rounded-lg">
                                    <HiOutlineLocationMarker className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-gray-900">Location</h4>
                                    <p className="text-gray-600">123 Healthcare Street, Medical District, CA 90210</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="practiceType" className="block text-sm font-medium text-gray-700 mb-1">
                                    Practice Type
                                </label>
                                <select
                                    id="practiceType"
                                    name="practiceType"
                                    value={formData.practiceType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                    required
                                >
                                    <option value="">Select your practice type</option>
                                    <option value="clinic">Clinic</option>
                                    <option value="hospital">Hospital</option>
                                    <option value="specialist">Specialist Practice</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                                    required
                                ></textarea>
                            </div>
                            <Button
                                type="submit"
                                variant="solid"
                                className="w-full py-3 text-lg font-semibold rounded-lg hover:scale-105 transition-transform"
                            >
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;