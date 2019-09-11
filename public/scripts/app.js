console.log('app.js is running!')
// JSX - Javascript XML
// syntax extension

//scss - sass
// language extension for css

// var template = <p>This is JSX from app.js</p>
var template = React.createElement("p",
  { id: "sample id" },
  "This is JSX from app.js");
var appRot = document.getElementById('sample id')

ReactDOM.render(template, appRoot)