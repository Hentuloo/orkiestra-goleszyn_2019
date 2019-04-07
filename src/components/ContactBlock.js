import React from 'react';

const ContactBlock = ({data}) => {
    return ( 
        <section style={{backgroundImage:`url(${data.bgcIcon.url})`}}>
            <h1>{data.title}</h1>
            <div>{data.content}</div>
        </section>
     );
}
 
export default ContactBlock;