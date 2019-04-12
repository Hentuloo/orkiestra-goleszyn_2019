import React from "react"

const MainPicture = ({ data: props }) => {
	const image = (
		<img
			src={props[0].photo.url}
			sizes="100vw"
			srcSet={props.map(e => `${e.photo.url} ${e.width}`)}
			alt="Orkiestra Goleszyn strona główna obrazek"
		/>
	)
	return <div className="mainPicture">{image}</div>
}

export default MainPicture
