import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const faqs = [
    {
        question: "How does the AI-powered platform benefit healthcare providers?",
        answer: "Our AI platform streamlines patient management, automates routine tasks, and provides data-driven insights to improve patient care. It helps healthcare providers save time, reduce administrative burden, and make informed decisions based on real-time analytics."
    },
    {
        question: "Is the platform suitable for all types of healthcare practices?",
        answer: "Yes, our platform is designed to be flexible and scalable, making it suitable for various healthcare practices including clinics, hospitals, and specialized medical centers. We offer customizable solutions to meet specific practice needs."
    },
    {
        question: "How secure is patient data on the platform?",
        answer: "We prioritize data security and comply with healthcare regulations like HIPAA. Our platform uses advanced encryption, regular security audits, and strict access controls to ensure patient data remains protected and confidential."
    },
    {
        question: "What kind of support do you offer to users?",
        answer: "We provide comprehensive support including 24/7 technical assistance, regular training sessions, and a dedicated account manager. Our support team is always ready to help with any questions or issues you may encounter."
    },
    {
        question: "How long does it take to implement the platform?",
        answer: "Implementation time varies based on practice size and requirements, but typically takes 2-4 weeks. Our team works closely with you throughout the process to ensure a smooth transition and minimal disruption to your operations."
    },
    {
        question: "Can the platform integrate with existing systems?",
        answer: "Yes, our platform offers seamless integration with popular healthcare systems, EHRs, and practice management software. We ensure compatibility with your existing tools to create a unified healthcare management solution."
    }
];

const HomeFAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-24 px-4 md:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get answers to common questions about our healthcare platform
                    </p>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6"></div>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {faq.question}
                                </h3>
                                {openIndex === index ? (
                                    <IoIosArrowUp className="w-6 h-6 text-primary" />
                                ) : (
                                    <IoIosArrowDown className="w-6 h-6 text-primary" />
                                )}
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 py-4 bg-gray-50">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeFAQ;