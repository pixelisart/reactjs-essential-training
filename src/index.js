import React from 'react';
import { render } from 'react-dom';
import { hello, goodbye } from './lib';


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
//const { createElement } = React
//const { render } = ReactDOM

// Style element with css
const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'
}

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
render(
    <div>
        {hello}
        {goodbye}
    </div>,
    document.getElementById('react-container')
)