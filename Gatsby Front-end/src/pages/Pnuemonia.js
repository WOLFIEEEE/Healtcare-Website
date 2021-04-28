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
        <h1 >Pneumonia prediction</h1>
        {/* <IframeResizer
  log
  src="http://127.0.0.1:5000/"
  style={{ width: '1px', minWidth: '100%',height:'750px', maxHeight:'1000px'}}
/> */}
        <Iframe url="https://pneumonia-xray-prediction.herokuapp.com/"
        frameborder="0" class="iframe-placeholder"
        id="myId"
        width="100%"
        height="700px"
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