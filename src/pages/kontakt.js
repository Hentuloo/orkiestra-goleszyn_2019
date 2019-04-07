import React from 'react';

import {StaticQuery,graphql} from "gatsby"

//layout: header with navigation and foother
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'

import ContactBlock from '../components/ContactBlock'

const Contact = ({data:{gcms:{contacts}}}) => {
    const blocks = contacts.map(e=><ContactBlock key={e.title} data={e}/>)
    return ( 
        <>
  <Header/>
   <article className="contact">
   {blocks}
   </article>
  <Footer/>
  </>
     );
}
 export default () => ( <
  StaticQuery query = {
    graphql `
      {
        gcms {
            contacts {
                title
                content
                bgcIcon {
                    url
                }
            }
        }
      }
    `
  }
  render = {data => <Contact data = {data}/>}/>)
