import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.png'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>Landing - Forty by HTML5 UP</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            {/* <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Covid Prediction Model </h2>
                    </header>
                    <p>Model trained with help some X-ray Images of corona patients and normal one to detect if patinet has corona or not , for model we used CNN where we extracted feature and trained our faced on Parameters that are extracted using CNN</p>
                    </div>
            </section> */}
            <section id="two" className="spotlights">

            <section>
                    <Link to="/corona" className="image">
                        <img src={pic01} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Covid Prediction Model </h3>
                            </header>
                            <p>Model trained with help some X-ray Images of corona patients and normal one to detect if patinet has corona or not , for model we used CNN where we extracted feature and trained our faced on Parameters that are extracted using CNN</p>
                           <ul className="actions">
                                <li><Link to="/corona" className="button">Live Demo</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>


                <section>
                    <Link to="/Pnuemonia" className="image">
                        <img src={pic02} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Pnueuonia Prediction Model</h3>
                            </header>
                            <p>Model trained with help some X-ray Images of Pnemonia patients and normal one to detect if patinet has corona or not , for model we used CNN where we extracted feature and trained our faced on Parameters that are extracted using CNN</p>
                             <ul className="actions">
                                <li><Link to="/Pnuemonia" className="button">Live Demo</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/Breastcancer" className="image">
                        <img src={pic03} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Breast-Cancer Prediction</h3>
                            </header>
                           <p>It is early prediction model for Breast-cancer prediction . There were originally 32 Parameters in the dataset but we narrowed it down to 10 Parameters and tried to achieve a feasibale amount of accuray with limited Parameters</p>
                            <ul className="actions">
                                <li><Link to="/Breastcancer" className="button">Live Demo</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/chatbot" className="image">
                        <img src={pic04} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Healtcare Chatbot</h3>
                            </header>
                            <p>Healtcare chat-bot which will help people to interact with it and help them for first aid , this is still in progress it will take time as soon it is complete we will launch it </p>
                            <ul className="actions">
                                <li><Link to="/chatbot" className="button">In progress</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>

               

            </section>
        </div>

    </Layout>
)

export default Landing