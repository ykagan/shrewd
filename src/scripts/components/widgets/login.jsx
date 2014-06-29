/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var Button =  require('react-bootstrap/Button');

var Login = React.createClass({
	mixins: [React.addons.LinkedStateMixin],
	getInitialState: function() {
		return {
			username: "admin",
			password: ""
		};
	},
	render: function() {
		return (
			<form role="form" className="form-horizontal">
				<div className="form-group">
					<div className="input-group">
						<label className="sr-only" for="inputPass">Email</label>
						<div className="input-group-addon">@</div>
						<input type="email" valueLink={this.linkState('username')} className="form-control" id="inputEmail" placeholder="Enter email" />
					</div>
				</div>
				<div className="form-group">
			        <label className="sr-only" for="inputPass">Password</label>
			        <input type="password" valueLink={this.linkState('password')} className="form-control" id="inputPass" placeholder="Password" />
			      </div>
			      <Button bsStyle="success" bsSize="large">Sign In</Button>
			</form>
		);
	}
});

module.exports = Login;
