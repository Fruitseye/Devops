import React from 'react';

import {withRouter} from 'react-router-dom';

class Form extends React.Component {

	submitForm (e) {
		e.preventDefault()
		this.props.history.push('/NextPage');
	}

	render() {
		return (
			<div>
				<form onSubmit={this.submitForm.bind(this)}>
					<button type="submit">Submit</button>
				</form>
			</div>
		)

	}
}
export default withRouter(ContactForm);
