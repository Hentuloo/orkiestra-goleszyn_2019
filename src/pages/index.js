import React from "react"
import { StaticQuery, graphql } from "gatsby"

//layout: header with navigation and foother
import Header from "../layouts/Header/Header"
import Footer from "../layouts/Footer/Footer"

//Component with simple block information (index.page)
import BlockMainPage from "../components/BlockMainPage"
//component with baner photo
import MainPicture from "../components/MainPicture"

const IndexPage = ({
  data: {
    gcms: { mainPages, mainPagePictures },
  },
}) => {
  const blocks = mainPages.map(e => (
    <BlockMainPage key={e.pictureTitle} data={e} />
  ))
  return (
    <>
      <Header
        title="Strona główna"
        about="Orkiestra Goleszyn"
        keywords="Golesznyn orkiestra OSP"
      />
      <MainPicture data={mainPagePictures} />
      <article>{blocks}</article>
      <Footer />
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
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
          mainPagePictures(orderBy: index_ASC) {
            width
            photo {
              url
            }
          }
        }
      }
    `}
    render={data => <IndexPage data={data} />}
  />
)
