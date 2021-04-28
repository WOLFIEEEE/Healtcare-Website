import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import pic11 from '../assets/images/pic11.jpg'
import '../extracss/frame.css'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About us</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                   </div>
                   <span className="boxtext">
                   <p >A group of college student working on a project out of curiosity ? or for marks well this is kinda for both , we curious 
                       about machine learning and wanted to explore some real life examples in it , well for now that's all you can check our individual
                       resume for more detail about us .
                   </p>
                   </span>
            </section>
        </div>

    </Layout>
)

export default Generic