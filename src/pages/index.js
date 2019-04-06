import React from "react"
import {StaticQuery,graphql} from "gatsby"
import '../styles/index.sass'

//layout: header with navigation and foother
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'

//Component with simple block information (index.page)
import BlockMainPage from '../components/BlockMainPage'
//component with baner photo
import MainPicture from '../components/MainPicture'

//Import font: google-fonts-api
import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Kalam','cursive']
  }
});

const IndexPage = ({data:{gcms:{mainPages}}}) => {
  const blocks = mainPages.map(e => <BlockMainPage key={e.pictureTitle} data={e}/>)
  return(
  <>
  <Header/>
  <MainPicture/>
  <article>
    {blocks}
  </article>
  <Footer/>
  </>
  )
}


export default () => ( <
  StaticQuery query = {
    graphql `
      {
          gcms {
             mainPages(orderBy: index_ASC) {
               content
               index
               picture {
                 url
               }
               pictureTitle
             }
          }
      }
    `
  }
  render = {
    data => < IndexPage data = {data}/>}/>
  )
