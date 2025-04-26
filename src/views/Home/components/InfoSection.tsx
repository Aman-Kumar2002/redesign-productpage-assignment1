import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineChartBar, HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineLightningBolt } from 'react-icons/hi';

const features = [
    {
        icon: <HiOutlineChartBar className="w-8 h-8" />,
        title: "Data-Driven Insights",
        description: "Make informed decisions with real-time analytics and comprehensive reporting tools.",
        color: "bg-blue-500"
    },
    {
        icon: <HiOutlineUserGroup className="w-8 h-8" />,
        title: "Patient-Centric Care",
        description: "Enhance patient experience with personalized care plans and seamless communication.",
        color: "bg-purple-500"
    },
    {
        icon: <HiOutlineShieldCheck className="w-8 h-8" />,
        title: "HIPAA Compliant",
        description: "Ensure data security and compliance with healthcare regulations and standards.",
        color: "bg-green-500"
    },
    {
        icon: <HiOutlineLightningBolt className="w-8 h-8" />,
        title: "Rapid Implementation",
        description: "Get started quickly with our streamlined setup process and dedicated support.",
        color: "bg-orange-500"
    }
];

const testimonials = [
    {
        quote: "This platform has transformed how we manage our practice. The AI-powered features have significantly improved our efficiency.",
        author: "Dr. Sarah Johnson",
        role: "Medical Director",
        practice: "HealthFirst Clinic"
    },
    {
        quote: "The patient management tools are exceptional. We've seen a 40% increase in patient satisfaction since implementation.",
        author: "Dr. Michael Chen",
        role: "Chief Medical Officer",
        practice: "Wellness Medical Center"
    },
    {
        quote: "The platform's integration capabilities have made it easy to connect with our existing systems. Highly recommended!",
        author: "Dr. Emily Rodriguez",
        role: "Practice Manager",
        practice: "Family Care Associates"
    }
];

const InfoSection: React.FC = () => {
    return (
        <div className="py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose Our Platform?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover how our AI-powered healthcare platform can transform your practice and improve patient care.
                    </p>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-8 text-center"
                        >
                            <div className={`${feature.color} inline-flex p-4 rounded-xl text-white mb-6`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Hear from healthcare professionals who have transformed their practices with our platform.
                    </p>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-8"
                        >
                            <div className="flex flex-col h-full">
                                <div className="flex-grow">
                                    <p className="text-gray-600 italic mb-6">
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">
                                        {testimonial.author}
                                    </h4>
                                    <p className="text-gray-600">
                                        {testimonial.role}
                                    </p>
                                    <p className="text-primary font-medium">
                                        {testimonial.practice}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
