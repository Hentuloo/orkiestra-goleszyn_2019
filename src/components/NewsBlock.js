import React from "react"

const NewsBlock = ({ data }) => {
  if (data.picture) {
    return (
      <section>
        <div>
          <img src={data.picture.url} alt={data.shortTitle} />
          {data.data && <span>{data.data.slice(0, 10)}</span>}
        </div>
        <div>
          <h1>{data.shortTitle}</h1>
          <p>{data.content}</p>
        </div>
      </section>
    )
  } else {
    return (
      <section>
        <div className="newsInformationOnly">
          <h1>{data.shortTitle}</h1>
          <p>{data.content}</p>
          {data.data && <span>{data.data.slice(0, 10)}</span>}
        </div>
      </section>
    )
  }
}

export default NewsBlock
