/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Route = require('react-nested-router').Route;
var Header = require('./layout/header.jsx');
var Home = require('./pages/home.jsx');
var EditQuestion = require('./pages/editquestion.jsx');
var EditQuiz = require('./pages/editquiz.jsx');
var Browse = require('./pages/browse.jsx');

// CSS
require('../../styles/reset.css');
require('../../styles/main.css');

var App = React.createClass({
	componentDidMount: function() {		
	},
	render:function(){
		var content = this.props.activeRoute;
		return (
			<div className="main">
				<Header />
				{content}
			</div>
		);
	}
});

var Router = React.createClass({
  render: function() {
    return (
      <Route handler={App} location="hash">
      	<Route name="home" handler={Home} />
      	<Route name="browse" handler={Browse} />
      	<Route name="editquestion" handler={EditQuestion} />
      	<Route name="editquiz" handler={EditQuiz} />
      </Route>
    );
  }
});
Parse.initialize("GnbgyZyfEOX3lL1qi9v0W2CiRMIeVspYwMY6dPO6", "7GgaSF1V0kXOQIsOYNlDqSXWbSZcAx6IeNIpNW3y");
React.renderComponent(<Router />, document.getElementById('content')); // jshint ignore:line

module.exports = Router;
