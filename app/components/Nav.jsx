var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) =>{
  return (
    <div className="top-bar">
      <div className="top-bar-title menu-text">
        <IndexLink to="/" activeClassName="active-link">React Timer app</IndexLink>
      </div>
      <div className="top-bar-left">
        <ul className="menu">
          <li>
            <Link to="/timmer" activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>
              Timer
            </Link>
          </li>
          <li>
            <Link to="/timmer" activeClassName='active-link' activeStyle={{fontWeight: 'bold'}}>
              Countdown
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <a href="http://wwww.github.com/quiin" target="_blank">Carlos Reyna</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

module.exports = Nav;
