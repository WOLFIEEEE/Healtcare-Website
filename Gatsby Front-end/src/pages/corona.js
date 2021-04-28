import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Iframe from 'react-iframe'
import '../extracss/frame.css'
import IframeResizer from 'iframe-resizer-react'

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
 <h1 >Corona-Xray prediction</h1>
        <Iframe url="https://covid-xray-detection.herokuapp.com/"
        frameborder="0" class="iframe-placeholder"
        id="myId"
        width="100%"
        height="500px"
        className="myClassname"
        display="initial"
        scroll="off"
        allow="fullscreen"
        styles={{height: "100%"}}
        allowfullscreen align="center"
        position="relative"/>
    </Layout>
)

export default Elements