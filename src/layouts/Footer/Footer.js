import React from 'react';
import {StaticQuery,graphql} from "gatsby"

const Footer = ({data:{gcms:{fotherPictureses,fotherLinkses}}}) => {
    const WebsitesLinks=fotherLinkses.map(e=>(<a key={e.url} href={e.url}>{e.trescLiknku}</a>))
    const OrganisationsPhoto=fotherPictureses.map(e=>(<div key={e.picture.url}><img src={e.picture.url} alt={e.title}/></div>))
    return (
        <footer className="footer">
            <section>
                <h1>Orkiestra Goleszyn</h1>
                <h2>orkiestra.goleszyn@gmail.com</h2>
                <p>Białyszewo ul.Niepodległości 4</p>
                <a href="#FB"><div className="fb-link">F</div></a>
            </section>
            <section>
                <h1>Powiązane strony:</h1>
                {WebsitesLinks}
            </section>
            <section>
                <h1>Organizacje:</h1>
                {OrganisationsPhoto}
            </section>
            <div>Wszystkie prawa zastrzeżone. Copyright by OSP Goleszyn</div>
        </footer>
     );
}

export default () => (
  <StaticQuery
    query={graphql`
      {
          gcms {
              fotherPictureses(orderBy: index_ASC) {
                  title
                  picture {
                      url
                  }
              }
              fotherLinkses(orderBy: index_ASC) {
                  trescLiknku
                  url
              }
          }
      }
    `}
    render={data => <Footer data={data} />}
  />
)

// export default Footer;