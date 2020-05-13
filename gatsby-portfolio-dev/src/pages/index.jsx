import React from 'react'
import { Layout, SEO } from 'Common'
import {
  GridPics,
  Intro,
  Skills,
  Contact,
  Projects,
  Test1,
} from 'Components/landing'
import Darkmode from 'darkmode-js'

var options = {
  bottom: '32px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff', // default: '#fff'
  buttonColorDark: '#100f2c', // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  // autoMatchOsTheme: true // default: true
}

if (typeof window !== `undefined`) {
  const darkmode = new Darkmode(options)
  darkmode.showWidget()
  if (darkmode.isActivated() && options.saveInCookies == false) {
    darkmode.toggle()
  }
}

export default () => (
  <Layout>
    <SEO />
    <GridPics />
    <Intro />
    <Projects />
    <Skills />
    <Test1 />
    {/* <Contact /> */}
  </Layout>
)
