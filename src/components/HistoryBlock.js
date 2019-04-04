import React from 'react';


const HistoryBlock = ({data}) => {
    console.log(data)
    if(data.photo){
    return ( 
        <section>
            <div className="historyImg"><img src={data.photo.url} alt="Zdjęcie sekcji historia orkiestry"/></div>
            <div>{data.content}</div>
        </section>
     );
    }else{
       return ( 
       <section>
            <div>{data.content}</div>
        </section>
     ); 
    }
}
 
export default HistoryBlock;