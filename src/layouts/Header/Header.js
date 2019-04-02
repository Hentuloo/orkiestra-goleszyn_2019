import React, { Component } from 'react';
import {Link} from 'gatsby'
import Logo1 from '../../images/logo-icon.png'
import Logo2 from '../../images/logo-osp.png'

const navElements=[
    {
    "title":"Strona główna",
    "url":"/"
},{
    "title":"Aktualności",
    "url":"/aktualnosci"
},
{
    "title":"Galeria zdjęć",
    "url":"/galeria"
},{
    "title":"Historia",
    "url":"/historia"
},{
    "title":"Osiągnięcia",
    "url":"/osiagniecia"
},{
    "title":"Kontakt",
    "url":"/kontakt"
}
]

class Header extends Component {
    state = { 
        active:false
     }
     handleChangeActive=()=>this.setState(prevState => {
         return { active: !prevState.active };
     });
    render() { 
    const listElements=navElements.map(e=><li key={e.url}><Link activeClassName="active" to={e.url}>{e.title}</Link></li>)

        return ( 
        <nav className={`navigation${this.state.active?' active':''}`}>
        <ul>
        {listElements}
        </ul>
        <div className="switch" onClick={this.handleChangeActive}></div>
        <div className="logo"><img src={Logo1} alt="Logo orkiestry"/><img src={Logo2} alt="Logo OSP"/></div>
        </nav>
         );
    }
}
 
export default Header;