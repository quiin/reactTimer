const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls', () =>{
  it('should exist', () =>{
    expect(Controls).toExist();
  });
  describe('Render', () =>{
    it('should render pause when started', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls status='started'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)')

      expect($pauseButton.length).toBe(1);
      expect($pauseButton).toExist();
    });
    it('should render start when paused', () =>{
      var controls = TestUtils.renderIntoDocument(<Controls status='paused'/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)')

      expect($pauseButton.length).toBe(1);
      expect($pauseButton).toExist();
    });
  });
});
