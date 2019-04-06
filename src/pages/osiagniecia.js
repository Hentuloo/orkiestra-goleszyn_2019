import React from 'react';
import {StaticQuery,graphql} from "gatsby"

import AchivmentBlock from '../components/AchivmentBlock'
//layout: header with navigation and foother
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'

const Achivment = ({data:{gcms:{achievementses}}}) => {
    let blocks = achievementses.sort( (a,b) => b.important - a.important)
    blocks = blocks.map(e=><AchivmentBlock key={e.index} data={e}/>)
    return ( 
        <>
  <Header/>
  <article className="achivmentPage">
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
        achievementses(orderBy: index_ASC) {
          place
            index
            content
            important
        }
        }
      }
    `
  }
  render = {data => <Achivment data = {data}/>}/>
  )