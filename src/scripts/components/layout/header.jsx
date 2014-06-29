/**
 * @jsx React.DOM
 */

var React = require('react/addons');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');
var DropdownButton = require('react-bootstrap/DropdownButton');
var MenuItem = require('react-bootstrap/MenuItem');

var Link = require('react-nested-router').Link;

 var Header = React.createClass({
 	render: function(){
 		return (
	 		<Navbar brand={"Shrewd"}  >
	 			<Nav navbar={true}>
	 				<NavItem key={1}><Link to="home">Home</Link></NavItem>
	 				<NavItem key={2}><Link to="browse">Questions Browser</Link></NavItem>
	 				<NavItem key={3}><Link to="editquestion">Question Editor</Link></NavItem>
	 				<NavItem key={4}><Link to="editquiz">Quiz Editor</Link></NavItem>
	 				<NavItem key={5}><Link to="editquiz">Quiz Player</Link></NavItem>
	 				<DropdownButton key={6} title="Account">
		 				<MenuItem key={1}><Link to="home">Manage Users</Link></MenuItem>
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
