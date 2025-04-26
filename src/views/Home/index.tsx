import React, { useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from './components/MainFooter';
import InfoSection from './components/InfoSection';
import FeaturesGrid from './components/FeaturesGrid';
import type { Meta } from '@/@types/routes';

interface HomeProps extends Meta {}

const Home: React.FC<HomeProps> = () => {
	const contactRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const FqRef = useRef<HTMLDivElement>(null);
	const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		let lastScrollTop = 0;

		const handleScroll = () => {
			const hcf = document.querySelector(".hcf-profile");
			const scrollTop =
				document.documentElement.scrollTop || document.body.scrollTop;

			if (scrollTop > lastScrollTop) {
				if (hcf) {
					hcf.classList.add("hcf-profile-fixed");
				}
			} else if (scrollTop < lastScrollTop) {
				if (hcf) {
					hcf.classList.remove("hcf-profile-fixed");
				}
			}

			lastScrollTop = scrollTop;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="min-h-screen w-full">
			<HeroSection
				scrollToSection={scrollToSection}
				featuresRef={FqRef}
				contactRef={contactRef}
				aboutRef={aboutRef}
			/>
			<div className='bg-white'>
				<FeaturesGrid />
			</div>
			<div className='bg-white' ref={aboutRef}>
				<InfoSection />
			</div>
			<div className='bg-white' ref={FqRef}>
				<HomeFAQs />
			</div>
			<div className='bg-white' ref={contactRef}>
				<ContactForm />
			</div>
			<div className='bg-white'>
				<MainFooter />
			</div>
		</div>
	);
};

export default Home;