import React, { Component } from 'react';
import {Link} from 'gatsby'

import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'

class galerySectionTemplate extends Component { 
  state = { 
    active:false,
    img:''
   }

  handleScopeImage = e => {
    if(this.state.active){
      this.setState({ active:false,img:'' });
    }else{
      this.setState({ active:true,img:e.url });
    }
  }
  render() { 
    const data = this.props.pageContext.data
    const Images = data.sectionPhotos.map(e=>(
    <div 
    onClick={()=>this.handleScopeImage(e)} 
    key={e.id}>
    <img  
    alt={data.sectionTitle} 
    src={e.url}/>
    </div>))
    return(
  <>
  <Header/>
  <div className="galery-section">
  {Images}
  </div>
  {this.state.active&&(
  <div className="image-scoupe" onClick={this.handleScopeImage}>
  <img src={this.state.img} alt="Orkiestra Goleszyn zdjęcie"/>
  </div>)}
  <div className="galery-back-link">
  <Link to='/galeria'>POWRÓT</Link>
  </div>
  < Footer/>
  </>
)
  }
}
 export default galerySectionTemplate;
