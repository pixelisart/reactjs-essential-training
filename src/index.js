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
const { createElement } = React
const { render } = ReactDOM

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
    <h1 id='title'
        className='header'
        style={style}>
    Hey World
    </h1>,
    document.getElementById('react-container')
)