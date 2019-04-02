import React, { Component } from 'react';
import {Link} from 'gatsby'

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
        </nav>
         );
    }
}
 
export default Header;