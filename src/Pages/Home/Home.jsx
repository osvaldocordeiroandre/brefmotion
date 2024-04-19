import './Home.css';

import Logo from '../../assets/Logo/LogoWhite.png'
import { useState } from 'react';
import BoxProjectsPopup from '../../Components/ProjectsPopup/BoxProjectsPopup';
import ContactPopup from '../../Components/containerAboutPopup/ContactPopup';
import AboutPopup from '../../Components/AboutPopup/AboutPopup';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
    const [projectsPopupOpen, setProjectsPopupOpen] = useState(false);
    const [contactPopupOpen, setcontactPopupOpen] = useState(false);
    const [aboutPopupOpen, setAboutPopupOpen] = useState(false);

    return (

        <div className='Container'>
            <div className='Name' >
                <img src={Logo} alt="" />
            </div>

            {projectsPopupOpen && (
                <BoxProjectsPopup projectsPopupOpen={projectsPopupOpen} setProjectsPopupOpen={setProjectsPopupOpen} />
            )}

            <div className='BoxesContainer'>
                <div className="boxBehance" onClick={() => setProjectsPopupOpen(true)}>
                    <div className="caracter"></div>
                    <div className="caractertwo"></div>
                    <div className="caracterRight"></div>
                    <div className="caractertwoRight"></div>
                    <div className='LogoBehance'>
                        <h4> Bref Motion </h4>
                    </div>
                    <div className='Projects'>
                        <h1> Projects </h1>
                    </div>
                    <div className='textService'>
                        <h5> See my services </h5>
                    </div>

                </div>

                {aboutPopupOpen && (
                    <AboutPopup setAboutPopupOpen={setAboutPopupOpen} />
                )}

                <div className="boxAbout" onClick={() => setAboutPopupOpen(true)}>
                    <div className='boxAboutName'> <h5> Bref Motion </h5> </div>
                    <div className='About'> <h1> About Me </h1> </div>
                    <div className='works'> <h5> Motion Designer and Animations </h5> </div>
                </div>

                {contactPopupOpen && (
                    <ContactPopup setcontactPopupOpen={setcontactPopupOpen} />
                )}

                <div className="BoxContact" onClick={() => setcontactPopupOpen(true)}>
                    <div className='me'> <h5> Bref Motion </h5> </div>
                    <div className='Contact'>
                        <h1> Contact Me </h1>
                    </div>
                    <div className='message'> <h5>Make your ideas a reality</h5> </div>
                </div>
                <Footer />
            </div>
        </div>

    )
}
