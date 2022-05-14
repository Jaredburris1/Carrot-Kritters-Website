import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MintSection from '../components/MintSection';
import AboutSection from '../components/AboutSection';
import RoadmapSection from '../components/RoadmapSection';
import TeamSection from '../components/TeamSection';
import FundingSection from '../components/FundingSection';
import Footer from '../components/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <MintSection />
            <AboutSection />
            <RoadmapSection />
            <TeamSection />
            <FundingSection />
            <Footer />
        </>
    );
}

export default Home;
