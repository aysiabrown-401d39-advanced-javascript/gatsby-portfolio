import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from '@material-ui/core/Card'

import Midna from '../images/Midna.jpg';
import Kiara from '../images/Kiara.jpg';
import HappyCats from '../images/thc.png'
import ToDo from '../images/todo.png'

const SecondPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <Card style={{width: '500px', backgroundColor: 'hsla(0, 100%, 70%, 0.3)'}}>
      <br/>
      <h3 style={{paddingLeft: '15px'}}>Think Happy Cats - Intro to React Native</h3>
      <img src={HappyCats} style={{width: 500}}/>
      <br/>
      <p style={{paddingLeft: '15px' }}>
        Technologies Used: React Native, JavaScript, Expo
        <br /> 
        <a href='https://github.com/aysiabrown-401d39-advanced-javascript/thinkhappycats'>GitHub Repository</a>
      </p>
    </Card>
      <br />
    <Card style={{width: '500px', backgroundColor: 'hsla(0, 100%, 70%, 0.3)'}}>
      <br/>
      <h3 style={{paddingLeft: '15px'}}>Task Tracker</h3>
      <img src={ToDo} style={{width: 500}}/>
      <br/>
      <p style={{paddingLeft: '15px' }}>
        Technologies Used: React, JavaScript, Bootstrap 
        <br /> 
        <a href='https://github.com/aysiabrown-401d39-advanced-javascript/todo'>GitHub Repository</a> {' '}
        <a href='https://aysiabrown-401d39-advanced-javascript.github.io/todo/'>Live Front End</a>
      </p>
    </Card>
  </Layout>
)

export default SecondPage
