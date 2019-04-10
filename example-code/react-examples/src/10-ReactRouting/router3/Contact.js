import React from 'react';
import { withRouter } from "react-router-dom";

class Contact extends React.Component {
	render() {
		// const { location, history } = this.props;
		console.log(this.props);

		return (
			<div>
				{/* <h2>Kontakt i egen komponent</h2>
				Värden från komponentens props:<br />
				location.pathname: {location.pathname}<br />
				history.length: {history.length}<br />
				history.location.key: {history.location.key}<br />
				history.location.pathname: {history.location.pathname}<br /> */}
			</div>
		);
	}
}

export default withRouter(Contact);
