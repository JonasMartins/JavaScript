'use strict';

var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


var style = {
  backgroundColor: 'orange',
  color: 'white',
  fontFamily: 'verdana'
};

render(React.createElement(
  'h1',
  { id: 'title', className: 'header'
    /* JSX expression */
    , style: style },
  'Hello World'
), document.getElementById('react-container'));
