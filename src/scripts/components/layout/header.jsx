/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');
var DropdownButton = require('react-bootstrap/DropdownButton');
var MenuItem = require('react-bootstrap/MenuItem');

 var Header = React.createClass({
 	render: function(){
 		return (
	 		<Navbar>
	 			<Nav>
	 				<NavItem key={1}>Home</NavItem>
	 				<NavItem key={2}>Questions Browser</NavItem>
	 				<NavItem key={3}>Question Editor</NavItem>
	 				<NavItem key={4}>Quiz Editor</NavItem>
	 				<NavItem key={5}>Quiz Player</NavItem>
	 				<DropdownButton key={6} title="Account">
		 				<MenuItem key={1}>Manage Users</MenuItem>
		 				<MenuItem divider />
		 				<MenuItem key={2}>Log In</MenuItem>
		 				<MenuItem key={3}>Log Out</MenuItem>
	 				</DropdownButton>
	 				
	 			</Nav>
	 		</Navbar>
 		);
 	}
 })

 module.exports = Header;
