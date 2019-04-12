import React from "react"

const ContactBlock = ({ data }) => (
	<section>
		<div className="contact-image">
			<img src={data.bgcIcon.url} alt="" />
		</div>
		<h1>{data.title}</h1>
		<div>{data.content}</div>
	</section>
)

export default ContactBlock
