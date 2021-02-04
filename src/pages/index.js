import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

// images
import Midna from '../images/Midna.jpg';
import Kiara from '../images/Kiara.jpg';
import headshot from '../images/headshot.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1px` }}>
      <img src={headshot}></img>
    </div>
    <div id='about' style={{maxWidth:'300px'}}>
    <p>My name is Aysia Brown.</p>
    <ul>
      <li>I'm a Full Stack Software Developer!</li>
      <li>I have a B.A. of Communications & a minor in Informatics from the University of Washington</li>
      <li>Previous employment experience working at Microsoft let me hone customer experience, technology, leadership and teaching skills</li>
      <li>Passionate animal lover, cat mom of 2 mischievious kitties. I would love to save all the animals.</li>
    </ul>
    </div>
    <div id='projects'>
      <p>Hello</p>
    </div>
  </Layout>
)

export default IndexPage
