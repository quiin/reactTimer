const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jquery');
const TestUtils = require('react-addons-test-utils');

const Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });
  describe('handleStatusChange', () =>{
    it('should set state to started and count up', (done) =>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      setTimeout(() =>{
        expect(timer.state.count).toBe(3);
        expect(timer.state.status).toBe('started');
        done();
      }, 3500);
    });
    it('should increase count by 1', (done) =>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        done();
      },3003);
    });
    it('should pause timer on pause status', (done) =>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      setTimeout(() =>{
        timer.handleStatusChange('paused');
        expect(timer.state.status).toBe('paused');
        expect(timer.state.count).toBe(2);
        done();
      },2002);
    });
    it('should reset timer on stopped status', () =>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');
      setTimeout(() =>{
        expect(timer.state.count).toBe(2);
        timer.handleStatusChange('stopped');
        expect(timer.state.status).toBe('stopped');
        expect(timer.state.count).toBe(0);
      }, 2002);
    });
  });
});
