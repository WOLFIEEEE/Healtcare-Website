import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Covid Prediction Model</h3>
                                <p>Detection of covid using X-ray images </p>
                            </header>
                            <Link to="/models" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Puemonia Prediction Model</h3>
                                <p>Prediction of Pneuonia using X-ray Images</p>
                            </header>
                            <Link to="/models" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Breast-Cancer Prediction</h3>
                                <p>Early Detection of Breast-cancer Detection using some pre defined Parameters</p>
                            </header>
                            <Link to="/models" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Healtcrae chatbot</h3>
                                <p>A simple Demo of a chat bot used or should be used in medical environment</p>
                            </header>
                            <Link to="/models" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Models</h2>
                            </header>
                            <p> Either click on any model to go to model page or click on below button to go to model page and know more about each model in detail </p>
                            <ul className="actions">
                                <li><Link to="/models" className="button next">SEE LIVE DEMO </Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex