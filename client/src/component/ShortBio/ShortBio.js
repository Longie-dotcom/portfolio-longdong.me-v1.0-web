// Assets
import './ShortBio.css';
import TEXT from '../../assets/TEXT';
import AboutMe1 from '../../assets/pictures/about-me-1.jpg';
import AboutMe2 from '../../assets/pictures/about-me-2.jpg';
import Monster1 from '../../assets/pictures/monster-1.png'
import Monster2 from '../../assets/pictures/monster-2.png'
import Monster3 from '../../assets/pictures/monster-3.png'
import Monster4 from '../../assets/pictures/monster-4.png'
import Monster5 from '../../assets/pictures/monster-5.png'

// Components
import { useEffect } from 'react';

function ShortBio() {
    useEffect(() => {
        const tag = document.getElementById('tag-year');
        const section = document.querySelector('.bio-3col');
        const columns = document.querySelectorAll('.column');
        const monsters = document.querySelectorAll('.monster');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === tag) {
                            tag.classList.remove('animate');
                            void tag.offsetWidth;
                            tag.classList.add('animate');
                        }

                        if (entry.target === section) {
                            section.classList.add('animate');
                        }

                        if (entry.target.classList.contains('column')) {
                            entry.target.classList.add('animate');
                        }

                        if (entry.target.classList.contains('monster')) {
                            entry.target.classList.add('animate');
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (tag) observer.observe(tag);
        if (section) observer.observe(section);
        columns.forEach((col) => observer.observe(col));
        monsters.forEach((mon) => observer.observe(mon));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="shortbio-wrapper">
            <div id="ShortBio">
                <section className="bio-3col">
                    <div className="tag-year" id="tag-year">
                        <div className="year">{TEXT.year}</div>
                    </div>

                    <div className="column title-column">
                        <div className="line"></div>
                        <h2 className="bio-title special-font">{TEXT.bio_title}</h2>

                        <div className='monster' style={{ '--delay': '0s' }}>
                            <img src={Monster1} />

                            <div className='quote'>
                                <p className="bio-text">{TEXT.bio_monster_quote_1}</p>
                            </div>
                        </div>
                        <div className='monster' style={{ '--delay': '0.1s' }}>
                            <img src={Monster2} />

                            <div className='quote'>
                                <p className="bio-text">{TEXT.bio_monster_quote_2}</p>
                            </div>
                        </div>
                        <div className='monster' style={{ '--delay': '0.2s' }}>
                            <img style={{ width: '7vw' }} src={Monster3} />

                            <div className='quote'>
                                <p className="bio-text">{TEXT.bio_monster_quote_3}</p>
                            </div>
                        </div>
                        <div className='monster' style={{ '--delay': '0.3s' }}>
                            <img style={{ width: '7vw' }} src={Monster4} />

                            <div className='quote'>
                                <p className="bio-text">{TEXT.bio_monster_quote_4}</p>
                            </div>
                        </div>
                        <div className='monster' style={{ '--delay': '0.4s' }}>
                            <img style={{ width: '7vw' }} src={Monster5} />

                            <div className='quote'>
                                <p className="bio-text">{TEXT.bio_monster_quote_5}</p>
                            </div>
                        </div>
                    </div>

                    <div className="column content-column">
                        <div className="line"></div>
                        <div className="image">
                            <div className="image-wrapper">
                                <img src={AboutMe1} alt="About me 1" />
                                <img className="corner-monster" src={Monster5} alt="Corner Monster" />
                            </div>
                        </div>
                        <div className="description">
                            <p className="bio-text">{TEXT.bio_paragraph_1}</p>
                        </div>
                    </div>

                    <div className="column content-column">
                        <div className="line"></div>
                        <div className="image">
                            <div className="image-wrapper">
                                <img src={AboutMe2} alt="About me 1" />
                                <img className="corner-monster" src={Monster4} alt="Corner Monster" />
                            </div>
                        </div>
                        <div className="description">
                            <p className="bio-text">{TEXT.bio_paragraph_2}</p>
                        </div>
                        <div className="description">
                            <p className="bio-text">{TEXT.bio_paragraph_3}</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ShortBio;
