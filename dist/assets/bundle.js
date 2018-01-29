/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	// const title = React.createElement(
	//     'h1',
	//     {id: 'title', className: 'header'},
	//     'Hello World'
	// )

	// ReactDOM.render(
	//     title,
	//     document.getElementById('react-container')
	// )


	// USING ES6 STRUCTURING
	////////////////////////////////////////////
	var _React = React,
	    createElement = _React.createElement;
	var _ReactDOM = ReactDOM,
	    render = _ReactDOM.render;

	// Style element with css

	var style = {
	    backgroundColor: 'orange',
	    color: 'white',
	    fontFamily: 'verdana'

	    // ELEMENT USING JAVASCRIPT
	    ////////////////////////////////////
	    // const title = createElement(
	    //     'h1',
	    //     {id: 'title', className: 'header', style: style},
	    //     'Hello World'
	    // )

	    // render(
	    //     title,
	    //     document.getElementById('react-container')
	    // )


	    // Refactor element using JSX
	    // Need Babel Transpiler
	    /////////////////////////////////////
	};render(React.createElement(
	    'h1',
	    { id: 'title',
	        className: 'header',
	        style: style },
	    'Hello World'
	), document.getElementById('react-container'));

/***/ }
/******/ ]);