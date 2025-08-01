// Assets
import "./HomePage.css";

// Components
import Workspace from "../../component/Workspace/Workspace";
import HeroSection from "../../component/HeroSection/HeroSection";
import ShortBio from "../../component/ShortBio/ShortBio";
import TechShowcase from "../../component/TechShowcase/TechShowcase";
import BehindTheCurtain from "../../component/BehindTheCurtain/BehindTheCurtain";
import Footer from "../../Footer/Footer";
import { useState } from "react";

function HomePage(){
    const [isStart, setIsStart] = useState(false);
    const handleStart = () => {
        setIsStart(true);
    }

    return (
        <div id="HomePage">
            {!isStart && (
                <Workspace action={handleStart} />
            )}

            {isStart && (
                <>
                    <HeroSection />
                    <ShortBio />
                    <TechShowcase />
                    <BehindTheCurtain />
                    <Footer />
                </>
            )}
        </div>
    )
}

export default HomePage;