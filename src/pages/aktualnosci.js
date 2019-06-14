import React from "react"
import { StaticQuery, graphql } from "gatsby"

//layout: header with navigation and foother
import Header from "../layouts/Header/Header"
import Footer from "../layouts/Footer/Footer"

//facebook timeline of our website
import { FacebookProvider, Page } from "react-facebook"
import NewsBlock from "../components/NewsBlock"

const News = ({
  data: {
    gcms: { newses },
  },
}) => {
  const newsBlocks = newses.map(e => <NewsBlock key={e.id} data={e} />)

  return (
    <>
      <Header
        title="Aktualności"
        about="Co w orkiestrze Goleszyn"
        keywords="Aktualności Golesznyn"
      />
      <article className="newsPage">
        <aside>
          <FacebookProvider appId="684055272011835">
            <Page
              href="https://www.facebook.com/Orkiestra-Dęta-W-Goleszynie-455022361252115/"
              tabs="timeline"
            />
          </FacebookProvider>
        </aside>
        <div className="newsBlocks">
          <h1>Co jest grane: </h1>
          {newsBlocks}
        </div>
      </article>
      <Footer />
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        gcms {
          newses(orderBy: index_ASC) {
            id
            shortTitle
            data
            content
            picture {
              url
            }
          }
        }
      }
    `}
    render={data => <News data={data} />}
  />
)
