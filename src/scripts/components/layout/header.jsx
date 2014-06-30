/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');
var DropdownButton = require('react-bootstrap/DropdownButton');
var Modal = require('react-bootstrap/Modal');
var ModalTrigger = require('react-bootstrap/ModalTrigger');

var MenuItem = require('react-bootstrap/MenuItem');
var Button = require('react-bootstrap/Button');
var Login = require('../widgets/login.jsx');

var Link = require('react-nested-router').Link;

var LoginModal = React.createClass({
	render: function(){
		return (
			<Modal title="Login">
				<div className="modal-body">
 					<Login />
 				</div>
 			</Modal>
		);	
	}
});

 var Header = React.createClass({ 
 
 	onLogOut:function(){

 	},
 	render: function(){
		var username = "Sign In";
		var accountItems = [];
		var currentUser = Parse.User.current();
		if(currentUser){
			username = currentUser.username;
			accountItems.push(<MenuItem key={1} onSelect={this.onLogOut}>Log Out</MenuItem>);
		}
		else{
			accountItems.push(
				<MenuItem key={2}>
					<ModalTrigger modal={<LoginModal />}>
						<Button bsStyle="primary">Log In</Button>
					</ModalTrigger>
				</MenuItem>);
		}
 		return ( 		
	 		<Navbar brand={"Shrewd"}  >
	 			<Nav navbar={true}>
	 				<NavItem key={1}><Link to="home">Home</Link></NavItem>
	 				<NavItem key={2}><Link to="browse">Questions Browser</Link></NavItem>
	 				<NavItem key={3}><Link to="editquestion">Question Editor</Link></NavItem>
	 				<NavItem key={4}><Link to="editquiz">Quiz Editor</Link></NavItem>
	 				<NavItem key={5}><Link to="editquiz">Quiz Player</Link></NavItem>
	 				<DropdownButton key={6} title={username} >
		 				{accountItems}
	 				</DropdownButton>
	 								
	 			</Nav>
	 		
	 		</Navbar>
 		);
 	}
 })

 module.exports = Header;

