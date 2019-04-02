import React from "react"
import {Link} from 'gatsby'

const galerySectionTemplate = ({pageContext:{data}})=>{
    
    const Images = data.sectionPhotos.map(e=><img key={e.id} alt={data.url} src={e.url}/>)
    console.log(data)
    return(
  <>
  <Link to='/galeria'>POWRÓT</Link>
  {Images}
  </>
)
}
export default galerySectionTemplate
