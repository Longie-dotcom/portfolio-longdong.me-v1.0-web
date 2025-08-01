// Assets
import './ProjectPage.css';
import TEXT from '../../assets/TEXT';
import Monster1 from '../../assets/pictures/monster-1.png';
import Monster3 from '../../assets/pictures/monster-3.png';
import Monster4 from '../../assets/pictures/monster-4.png';
import Monster5 from '../../assets/pictures/monster-5.png';
import MyCat1 from '../../assets/pictures/mycat-1.png';
import MyCat2 from '../../assets/pictures/mycat-2.png';
import MyCat3 from '../../assets/pictures/mycat-3.png';

// Components
import GalleryPopUp from '../../component/GalleryPopUp/GalleryPopUp';
import { useState } from 'react';

function ProjectPage() {
    const [openGallery, setOpenGallery] = useState(null);
    const overlayImages = [Monster1, Monster3, Monster4, Monster5, MyCat1, MyCat2, MyCat3];

    const projectsWithOverlay = TEXT.projects.map(project => {
        const overlay = overlayImages[Math.floor(Math.random() * overlayImages.length)];
        return { ...project, overlay };
    });

    return (
        <div className="project-page">
            <h1 className="project-title">{TEXT.button_project}</h1>

            <div className="project-grid">
                {projectsWithOverlay.map((project, index) => (
                    <div className="project-card" key={index}>
                        {project.thumbnail && (
                            <img className="project-thumbnail" src={project.thumbnail} alt="Project Thumbnail" />
                        )}
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>

                        <div className="tech-stack">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="tech-pill">{tech}</span>
                            ))}
                        </div>

                        <div className="project-buttons">
                            <button onClick={() => setOpenGallery(project.galleries)}>
                                {TEXT.project_view_gallery_button}
                            </button>
                            <button onClick={() => window.open(project.link, '_blank')}>
                                {TEXT.project_view_github_button}
                            </button>
                            {project.deployed_link && (
                                <button onClick={() => window.open(project.deployed_link, '_blank')}>
                                    {TEXT.project_access_button}
                                </button>
                            )}
                        </div>

                        {/* Decorative image in bottom-right */}
                        <img className="card-overlay-img" src={project.overlay} alt="Decoration" />
                    </div>
                ))}

            </div>

            {openGallery && (
                <GalleryPopUp
                    images={openGallery}
                    onClose={() => setOpenGallery(null)}
                />
            )}
        </div>
    );
}

export default ProjectPage;

