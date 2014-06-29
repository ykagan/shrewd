/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Header = require('./layout/header.jsx');

// CSS
require('../../styles/reset.css');
require('../../styles/main.css');

var ShrewdApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <Header />
      </div>
    );
  }
});

React.renderComponent(<ShrewdApp />, document.getElementById('content')); // jshint ignore:line

module.exports = ShrewdApp;
