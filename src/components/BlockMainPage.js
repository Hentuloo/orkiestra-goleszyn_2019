import React from 'react';



const BlockMainPage = ({data:props})=> {
    return ( 
        <article className="block-article">
        <div>{props.content}</div>
        <div>
        <img src={props.picture.url} alt={props.pictureTitle}/>
        <h1>{props.pictureTitle}</h1>
        </div>
        </article>
     );
}
 
export default BlockMainPage;