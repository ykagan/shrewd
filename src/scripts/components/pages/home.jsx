/**
 * @jsx React.DOM
 */

var React = require('react');
var Jumbotron = require('react-bootstrap/Jumbotron');
var Home = React.createClass({

	render: function() {
		return (
			<Jumbotron>
				<h1>Welcome to Shrewd Admin Console (SAC) </h1>
				<p>SAC will let you:</p>
				<ul className="list-group">
					<li className="list-group-item">add questions to the Shrewd database</li>
					<li className="list-group-item">edit existing questions</li>
					<li className="list-group-item">view and edit existing quizzes</li>
					<li className="list-group-item">manage Shrewd admin and instructor accounts</li>
				</ul> 
			</Jumbotron>
		);
	}

});

module.exports = Home;