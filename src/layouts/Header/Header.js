import React, { Component } from "react"
import { Link } from "gatsby"
import Logo1 from "../../images/logo-icon.png"
import Logo2 from "../../images/logo-osp.png"
import { Helmet } from "react-helmet"

const navElements = [
  {
    title: "Strona główna",
    url: "/",
  },
  {
    title: "Aktualności",
    url: "/aktualnosci",
  },
  {
    title: "Galeria zdjęć",
    url: "/galeria",
  },
  {
    title: "Historia",
    url: "/historia",
  },
  {
    title: "Osiągnięcia",
    url: "/osiagniecia",
  },
  {
    title: "Kontakt",
    url: "/kontakt",
  },
]

class Header extends Component {
  state = {
    active: false,
  }
  handleChangeActive = () =>
    this.setState(prevState => {
      return { active: !prevState.active }
    })
  render() {
    const listElements = navElements.map(e => (
      <li key={e.url}>
        <Link activeClassName="active" to={e.url}>
          {e.title}
        </Link>
      </li>
    ))
    const { about, title, keywords } = this.props
    return (
      <>
        <Helmet>
          <meta httpEquiv="Content-type" content="text/html;charset=UTF-8" />
          <meta name="description" content={about} />
          <meta name="keywords" content={keywords} />
          <link
            rel="index"
            title="Strona główna"
            href="http://orkiestra-goleszyn.pl"
          />
          <title>{title}</title>
          <link rel="icon" type="image/png" href={Logo1} sizes="16x16" />
        </Helmet>
        <nav className={`navigation${this.state.active ? " active" : ""}`}>
          <ul>{listElements}</ul>
          <div className="switch" onClick={this.handleChangeActive} />
          <div className="logo">
            <img src={Logo1} alt="Logo orkiestry" />
            <img src={Logo2} alt="Logo OSP" />
          </div>
        </nav>
      </>
    )
  }
}

export default Header
