import './HeroSection.css';
import TEXT from '../../assets/TEXT';
import StickyNote from '../StickyNote/StickyNote';

function HeroSection() {
    return (
        <div id="HeroSection">
            <div className='animated-rectangles'>
                <div className="corner-rectangles left">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                    <div className="bar bar4"></div>
                </div>

                <div className="corner-rectangles right">
                    <div className="bar bar1"></div>
                    <div className="bar bar2"></div>
                    <div className="bar bar3"></div>
                    <div className="bar bar4"></div>
                </div>
            </div>

            <section className="hero">
                <h1 className="hero-title special-font">
                    <span data-text={TEXT.hero_title_1}>{TEXT.hero_title_1}</span>&nbsp;
                    <span data-text={TEXT.hero_title_2}>{TEXT.hero_title_2}</span>&nbsp;
                    <span data-text={TEXT.hero_title_3}>{TEXT.hero_title_3}</span>&nbsp;
                    <span data-text={TEXT.hero_title_4}>{TEXT.hero_title_4}</span>
                </h1>
                <p className="hero-subtitle">{TEXT.hero_subtitle}</p>
                <StickyNote
                    text={TEXT.sticky_notes}
                    style={{ position: 'absolute', backgroundColor: '', transform: 'rotate(-5deg)' }}
                />
            </section>
        </div>
    );
}

export default HeroSection;
