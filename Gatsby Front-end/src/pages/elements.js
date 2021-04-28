import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Contact from '../components/Contact'

const Elements = (props) => (
    <Layout>
        <Helmet>
            <title>Elements - Forty by HTML5 UP</title>
            <meta name="description" content="Elements Page" />
        </Helmet>
        <Contact/>


    </Layout>
)

export default Elements