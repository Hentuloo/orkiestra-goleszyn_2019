import React from "react"

const AchievementBlock = ({ data }) => {
	if (data.important) {
		return (
			<section className="important">
				<h1>{data.place}</h1>
				<div>{data.content}</div>
			</section>
		)
	} else {
		return (
			<section className="unimportant">
				{data.place && <span>{data.place}</span>}
				{data.content}
			</section>
		)
	}
}

export default AchievementBlock
