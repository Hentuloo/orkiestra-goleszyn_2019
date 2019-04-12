import React from "react"

const GaleryLinkElement = data => {
	const { sectionTitle, sectionFirstPhoto } = data.data
	return (
		<div className="ImageLink">
			<img src={sectionFirstPhoto.url} alt={sectionTitle} />
			<h1>{sectionTitle}</h1>
		</div>
	)
}

export default GaleryLinkElement
