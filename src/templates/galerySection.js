import React, { Component } from "react"
import { Link } from "gatsby"

import Header from "../layouts/Header/Header"
import Footer from "../layouts/Footer/Footer"

const ScopeImage = ({ url, onClick }) => (
  <div className="image-scoupe" onClick={onClick}>
    <img src={url} alt="Orkiestra Goleszyn zdjęcie" />
  </div>
)

class galerySectionTemplate extends Component {
  state = {
    active: false,
    img: "",
  }

  handleScopeImage = e => {
    console.log(e)
    if (e.url) {
      this.setState({ active: true, img: e.url })
    }
    if (e === "close") {
      this.setState({ active: false, img: "" })
    } else return null
  }
  render() {
    const data = this.props.pageContext.data
    const Images = data.sectionPhotos.map(e => (
      <div onClick={() => this.handleScopeImage(e)} key={e.id}>
        <img alt={data.sectionTitle} src={e.url} />
      </div>
    ))
    return (
      <>
        <Header
          title="Galeria"
          about="Galeria orkiestry Goleszyn"
          keywords="Zdjęcia orkiestra Golesznyn"
        />
        {this.state.active && (
          <ScopeImage
            url={this.state.img}
            onClick={() => this.handleScopeImage("close")}
          />
        )}
        <div className="galery-section">{Images}</div>
        <div className="galery-back-link">
          <Link to="/galeria">POWRÓT</Link>
        </div>
        <Footer />
      </>
    )
  }
}
export default galerySectionTemplate
