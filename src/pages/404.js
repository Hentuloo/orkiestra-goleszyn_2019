import React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => (
	<div className="error-page">
		<div>Coś poszło nie tak...</div>
		<div>
			Spróbuj powrócić do strony głównej <Link to="/">STRONA GŁÓWNA</Link>
		</div>
	</div>
)

export default NotFoundPage
