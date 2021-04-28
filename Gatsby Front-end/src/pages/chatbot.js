import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Iframe from 'react-iframe'
import '../extracss/frame.css'
import IframeResizer from 'iframe-resizer-react'
import build2 from "../assets/images/giphy.gif"

const Elements = (props) => (
    <Layout>
        <Helmet>
            <title>Elements - Forty by HTML5 UP</title>
            <meta name="description" content="Elements Page" />
        </Helmet>
        {/* <IframeResizer
  log
  src="http://127.0.0.1:5000/"
  style={{ width: '1px', minWidth: '100%',height:'750px', maxHeight:'1000px'}}
/> */}
        <h1 >In Progress Please visit later</h1>
        <img className="build" src={build2}/>
       
    </Layout>
)

export default Elements