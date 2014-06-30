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
			password: "",
			requestPending: false,
			validationMessage: ""
		};
	},
	onSignIn: function (){
		if(this.state.username.length && this.state.password.length){
			this.setState({
				requestPending: true
			});
			Parse.User.logIn(this.state.username, this.state.password, {
				success: function(user){
					this.setState({
						requestPending: false 
					});
					this.props.onSuccess(user);
				}.bind(this),
				error: function(user,error){
					this.setState({
						requestPending: false,
						validationMessage: error.message
					});

				}.bind(this)
			});	
		}
		
	},
	render: function() {
		return (
			<form role="form" className={"form" + (this.state.validationMessage.length ? " has-error" : "")}>
				<div className="form-group">
					{this.state.validationMessage.length ? 
						<label className="control-label">{this.state.validationMessage}</label> :
						[]
					}
					<div className="input-group">
						<div className="input-group-addon">@</div>
						<input type="email" valueLink={this.linkState('username')} className="form-control" id="inputEmail" placeholder="Enter email" />
					</div>
			        <input type="password" valueLink={this.linkState('password')} className="form-control" id="inputPass" placeholder="Password" />
			      </div>
			      <div className="modal-footer">
			      	<Button bsStyle="success" bsSize="large" block onClick={this.onSignIn}>Sign In</Button>
			      </div>
			</form>
		);
	}
});

module.exports = Login;
