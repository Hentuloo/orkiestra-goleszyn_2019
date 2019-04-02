import React from 'react';

//layout: header with navigation and foother
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'

import { Link,StaticQuery, graphql } from "gatsby"
import GaleryLinkElemnt from '../components/GaleryLinkElemnt'

const Galery = () =>(
  <StaticQuery
  query={graphql`{
    allSitePage(
     filter:{
       component:{
         eq:"F:/Main_code-218/GraphQL/4 Orkiestra-Goleszyn/orkiestra-goleszyn/src/templates/galerySection.js"}
     }){
      edges {
        node {
          path
          context{
            data{
              sectionTitle
              sectionFirstPhoto {
                url
              }
            }   
          }
        }
      }
    }
   }
  `}
  render={(data)=>{ 
    const {edges}=data.allSitePage
    const Links = edges.map(e=>
    <Link key={e.node.path} to={e.node.path}>
    <GaleryLinkElemnt data={e.node.context.data}/>
    </Link>)
    return(<>
    <Header/>
    Galeria:
    {Links}
    <Footer/>
    </>)}}
/>
)

export default Galery
