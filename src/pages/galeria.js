import React from "react"

//layout: header with navigation and foother
import Header from "../layouts/Header/Header"
import Footer from "../layouts/Footer/Footer"

import { Link, StaticQuery, graphql } from "gatsby"
import GaleryLinkElement from "../components/GaleryLinkElement"

const Galery = () => (
  <StaticQuery
    query={graphql`
      {
        allSitePage(
          filter: {
            component: {
              eq: "F:/Main_code-218/GraphQL/4 Orkiestra-Goleszyn/orkiestra-goleszyn/src/templates/galerySection.js"
            }
          }
        ) {
          edges {
            node {
              path
              context {
                data {
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
    render={data => {
      const { edges } = data.allSitePage
      const Links = edges.map(e => (
        <Link key={e.node.path} to={e.node.path}>
          <GaleryLinkElement data={e.node.context.data} />
        </Link>
      ))
      return (
        <>
          <Header
            title="Galeria"
            about="Galeria orkiestry"
            keywords="Galeria Golesznyn"
          />
          <article className="galery-link">{Links}</article>
          <Footer />
        </>
      )
    }}
  />
)

export default Galery
