'use strict';

describe('Main', function () {
  var ShrewdApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    ShrewdApp = require('../../../src/scripts/components/ShrewdApp.jsx');
    component = ShrewdApp();
  });

  it('should create a new instance of ShrewdApp', function () {
    expect(component).toBeDefined();
  });
});
