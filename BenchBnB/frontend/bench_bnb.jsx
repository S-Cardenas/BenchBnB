var React = require('react');
var ReactDOM = require('react-dom');
var BenchesIndex = require('./components/benches/index.jsx');

// var BenchStore = require('./stores/bench.js');
// var ApiUtil = require('./util/api_util.js');




document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <div>
      <BenchesIndex />
    </div>,
    document.getElementById('content')
  );
});
