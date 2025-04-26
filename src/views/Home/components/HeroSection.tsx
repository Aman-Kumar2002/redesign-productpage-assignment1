import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { HiOutlineChartBar, HiOutlineUserGroup, HiOutlineShieldCheck, HiOutlineStar } from 'react-icons/hi';

// Main feature showcase component
const ProductDemo = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const features = [
        {
            icon: <HiOutlineChartBar className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Real-time Analytics",
            description: "Track patient outcomes and practice performance in real-time",
            color: "bg-blue-500"
        },
        {
            icon: <HiOutlineUserGroup className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Patient Management",
            description: "Streamline patient care with intelligent scheduling and follow-ups",
            color: "bg-purple-500"
        },
        {
            icon: <HiOutlineShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
            title: "Secure Platform",
            description: "HIPAA-compliant security with advanced encryption",
            color: "bg-green-500"
        }
    ];

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setActiveFeature((prev) => (prev + 1) % features.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [isHovered]);

    return (
        <div 
            className="relative w-[280px] h-[180px] sm:w-[320px] sm:h-[220px] cursor-pointer mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl"
            />
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6"
                >
                    <motion.div 
                        className={`${features[activeFeature].color} p-3 sm:p-4 rounded-xl text-white mb-3 sm:mb-4`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {features[activeFeature].icon}
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2 text-center">
                        {features[activeFeature].title}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm text-center max-w-[200px] sm:max-w-none">
                        {features[activeFeature].description}
                    </p>
                </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center gap-2">
                {features.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveFeature(index)}
                        className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                            index === activeFeature ? 'bg-primary' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

// Client testimonials with auto-rotation
const TestimonialSlider = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const testimonials = [
        {
            quote: "This platform has revolutionized how we manage our practice. The AI-powered insights are invaluable.",
            author: "Dr. Sarah Johnson",
            role: "Chief Medical Officer",
            practice: "HealthFirst Medical Center",
            image: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            quote: "The patient management system is intuitive and efficient. It's made our workflow so much smoother.",
            author: "Dr. Michael Chen",
            role: "Family Physician",
            practice: "Wellness Family Clinic",
            image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            quote: "The security features give us peace of mind. We can focus on patient care without worrying about data protection.",
            author: "Dr. Emily Rodriguez",
            role: "Pediatrician",
            practice: "Children's Health Partners",
            image: "https://randomuser.me/api/portraits/women/2.jpg"
        }
    ];

    useEffect(() => {
        if (isAutoPlaying) {
            const interval = setInterval(() => {
                setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isAutoPlaying]);

    const nextTestimonial = () => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">What Our Clients Say</h3>
                <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="text-white/80 hover:text-white transition-colors text-sm sm:text-base"
                >
                    {isAutoPlaying ? "Pause" : "Play"}
                </button>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6"
                >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <img
                            src={testimonials[activeTestimonial].image}
                            alt={testimonials[activeTestimonial].author}
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                        />
                        <div className="flex-grow text-center sm:text-left">
                            <p className="text-base sm:text-lg text-white italic mb-3 sm:mb-4">
                                "{testimonials[activeTestimonial].quote}"
                            </p>
                            <div>
                                <h4 className="text-lg sm:text-xl font-semibold text-white">
                                    {testimonials[activeTestimonial].author}
                                </h4>
                                <p className="text-white/80 text-sm sm:text-base">
                                    {testimonials[activeTestimonial].role}
                                </p>
                                <p className="text-primary font-medium text-sm sm:text-base">
                                    {testimonials[activeTestimonial].practice}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className="flex justify-between items-center mt-4">
                <button
                    onClick={prevTestimonial}
                    className="text-white/80 hover:text-white transition-colors text-sm sm:text-base"
                >
                    ← Previous
                </button>
                <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTestimonial(index)}
                            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-colors ${
                                index === activeTestimonial ? 'bg-primary' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
                <button
                    onClick={nextTestimonial}
                    className="text-white/80 hover:text-white transition-colors text-sm sm:text-base"
                >
                    Next →
                </button>
            </div>
        </div>
    );
};

// Stats and trust badges
const TrustIndicators = () => {
    const trustStats = [
        {
            icon: <HiOutlineShieldCheck className="w-8 h-8 text-primary" />,
            stat: "HIPAA Compliant",
            description: "Secure & Certified"
        },
        {
            icon: <HiOutlineUserGroup className="w-8 h-8 text-primary" />,
            stat: "10M+",
            description: "Patient Records"
        },
        {
            icon: <HiOutlineChartBar className="w-8 h-8 text-primary" />,
            stat: "99.9%",
            description: "Uptime"
        },
        {
            icon: <HiOutlineStar className="w-8 h-8 text-primary" />,
            stat: "4.9/5",
            description: "User Rating"
        }
    ];

    return (
        <div className="relative z-10 w-full max-w-5xl mx-auto mt-8 mb-4 px-4 sm:px-6">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
            >
                {trustStats.map((item, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center text-center hover:bg-white/15 transition-colors"
                    >
                        <div className="mb-3">
                            {item.icon}
                        </div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
                            {item.stat}
                        </h4>
                        <p className="text-sm sm:text-base text-white/80">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
            <div className="mt-6 text-center">
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-white/70 text-sm sm:text-base"
                >
                    Trusted by leading healthcare providers worldwide
                </motion.p>
            </div>
        </div>
    );
};

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
    featuresRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    return (
        <div className="!bg-gradient-to-br from-[#01052f] to-[#1a1f4b] w-full relative flex flex-col py-2 md:py-5 overflow-hidden min-h-screen">
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            <div className='min-h-[90vh] flex items-center'>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[-5]"></div>

                <div className="relative z-10 text-white w-full flex flex-col lg:flex-row-reverse md:mt-6 lg:mt-0 lg:items-center lg:justify-between px-4 max-w-[1538px] mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 lg:pr-8"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 capitalize text-white leading-tight">
                            <span className="text-primary">AI-Powered</span> Healthcare Solutions
                        </h1>
                        <p className="text-xl md:text-2xl my-8 font-light leading-relaxed">
                            Transform your healthcare practice with our intelligent platform. 
                            <br />
                            <span className="font-bold text-primary">
                                Scale your reach, enhance patient care, and grow your practice.
                            </span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <HcfSignupPopup 
                                popupButtonStatus 
                                buttonChildren={
                                    <Button 
                                        block 
                                        variant='solid' 
                                        className='rounded-lg px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform'
                                    >
                                        Get Started Free
                                    </Button>
                                } 
                            />
                            <Button 
                                variant='twoTone' 
                                className='rounded-lg px-8 py-3 text-lg font-semibold hover:scale-105 transition-transform'
                                onClick={() => scrollToSection(featuresRef)}
                            >
                                Learn More
                            </Button>
                        </div>
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-center"
                            >
                                <h2 className="text-4xl font-bold text-white">
                                    2100<span className="text-primary ml-1">+</span>
                                </h2>
                                <p className="text-lg capitalize mt-2">Qualified Doctors</p>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-center"
                            >
                                <h2 className="text-4xl font-bold text-white">
                                    1000<span className="text-primary ml-1">+</span>
                                </h2>
                                <p className="text-lg capitalize mt-2">Hospitals</p>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="text-center"
                            >
                                <h2 className="text-4xl font-bold text-white">
                                    800<span className="text-primary ml-1">+</span>
                                </h2>
                                <p className="text-lg capitalize mt-2">Treatment Plans</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-5/12 mt-8 lg:mt-0 lg:mb-0 mb-6 flex items-center justify-center"
                    >
                        <ProductDemo />
                    </motion.div>
                </div>
            </div>

            <TrustIndicators />

            <div className="relative z-10 w-full max-w-5xl mx-auto mt-8 mb-4">
                <TestimonialSlider />
            </div>
        </div>
    );
};

export default HeroSection;