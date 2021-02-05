import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from '@material-ui/core/Card'

// images
import headshot from '../images/headshot.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <Card style={{width: '500px', backgroundColor: 'hsla(0, 100%, 70%, 0.3)'}}>
      <img src={headshot}></img>
      <div style={{padding: '15px'}}>
        <p>My name is Aysia Brown.</p>
        <ul>
          <li>I'm a Full Stack Software Developer!</li>
          <li>I have a B.A. of Communications & a minor in Informatics from the University of Washington</li>
          <li>Previous employment experience working at Microsoft let me hone customer experience, technology, leadership and teaching skills</li>
          <li>Passionate animal lover, cat mom of 2 mischievious kitties. I would love to save all the animals.</li>
        </ul>
      </div>
      
    </Card>
  </Layout>
)

export default IndexPage
