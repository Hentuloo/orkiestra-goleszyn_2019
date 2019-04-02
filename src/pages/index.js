import React from "react"
import '../styles/index.sass'

//layout: header with navigation and foother
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'

//Import font: google-fonts-api
// import WebFont from 'webfontloader';
// WebFont.load({
//   google: {
//     families: ['Kalam','cursive']
//   }
// });

const IndexPage = () => (
  <>
  <Header/>
   Strona główna
  <Footer/>
  </>
)

export default IndexPage
