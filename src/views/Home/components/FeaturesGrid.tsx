import React from 'react';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';
import { motion } from 'framer-motion';

const solutions = [
  {
    icon: <BiGlobeAlt className="w-8 h-8" />,
    title: "Custom AI-Powered Website",
    description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
    color: "bg-blue-500"
  },
  {
    icon: <FaUserSecret className="w-8 h-8" />,
    title: "Enhanced Patient Conversion",
    description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
    color: "bg-purple-500"
  },
  {
    icon: <BiMessageSquare className="w-8 h-8" />,
    title: "Real-Time Query Handling",
    description: "Instant response system for patient inquiries with AI-powered chat support.",
    color: "bg-green-500"
  },
  {
    icon: <FiFileText className="w-8 h-8" />,
    title: "Medical Report Analysis",
    description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
    color: "bg-orange-500"
  },
  {
    icon: <BiTrendingUp className="w-8 h-8" />,
    title: "Improved Lead Generation",
    description: "Data-driven lead generation strategies to attract and engage potential patients.",
    color: "bg-pink-500"
  },
  {
    icon: <BsDatabase className="w-8 h-8" />,
    title: "Comprehensive Healthcare Database",
    description: "Extensive medical information database for accurate patient guidance and support.",
    color: "bg-indigo-500"
  },
  {
    icon: <LuLanguages className="w-8 h-8" />,
    title: "Multilingual Support",
    description: "Breaking language barriers with comprehensive multilingual communication tools.",
    color: "bg-red-500"
  },
  {
    icon: <BiCreditCard className="w-8 h-8" />,
    title: "Seamless Payment Handling",
    description: "Secure and efficient payment processing for medical services globally.",
    color: "bg-teal-500"
  },
  {
    icon: <BiSearch className="w-8 h-8" />,
    title: "Marketing And SEO Support",
    description: "Optimized digital presence with advanced SEO and marketing strategies.",
    color: "bg-cyan-500"
  }
];

const FeaturesGrid: React.FC = () => {
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
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform can transform your healthcare practice with cutting-edge features and tools.
          </p>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-8">
                <div className={`${solution.color} inline-flex p-4 rounded-xl text-white mb-6`}>
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
              <div className={`h-1 w-full ${solution.color} opacity-75`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;