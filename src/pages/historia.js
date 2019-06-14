import React from "react"
import { StaticQuery, graphql } from "gatsby"

import HistoryBlock from "../components/HistoryBlock"

//layout: header with navigation and foother
import Header from "../layouts/Header/Header"
import Footer from "../layouts/Footer/Footer"

const History = ({
  data: {
    gcms: { histories },
  },
}) => {
  const blocks = histories.map(e => <HistoryBlock key={e.index} data={e} />)
  return (
    <>
      <Header
        title="Historia"
        about="Nasza historia"
        keywords="Historia Golesznyn"
      />
      <article className="historyPage">{blocks}</article>
      <Footer />
    </>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      {
        gcms {
          histories(orderBy: index_ASC) {
            index
            content
            photo {
              url
            }
          }
        }
      }
    `}
    render={data => <History data={data} />}
  />
)
