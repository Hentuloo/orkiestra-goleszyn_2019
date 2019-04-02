import React from 'react';
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

const Header = () => {
   const listElements=navElements.map(e=><li key={e.url}><Link to={e.url}>{e.title}</Link></li>)
    return ( 
        <nav>
            <ul>
            {listElements}
            </ul>
        </nav>
     );
}
 
export default Header;