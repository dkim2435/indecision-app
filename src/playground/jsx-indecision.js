console.log('app.js is running!')
// JSX - Javascript XML
//  syntax extension

//scss - sass
// language extension for css

// if statements
// ternary operators
// logical and operator

var app = {
  title: "Indecision App",
  subtitle: "computer",
  options: ['One', 'Two']
}

function getSubtitle(subtitle) {
  if (app.subtitle) {
    return <p>Subtitle: {subtitle}</p>
  } else {
    return undefined
  }
}

var template =
  (
    <div>
      <h1>Title: {app.title}</h1>
      {app.subtitle && <p>Subtitle: {app.subtitle} </p>}
      {getSubtitle(app.subtitle)}
      {app.options.length > 0 ? <p>Here are your options: {app.options}</p> : <p>no options</p>}
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>
    </div>
  )

//? user object
var user = {
  name: 'Evan',
  age: 25,
  location: 'Atlanta'
}
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>
  } else {
    return undefined
  }
}
var userName = 'Evan'
var userAge = '26'
var userLocation = 'Lawrenceville'
var templateTwo =
  (
    <div>
      <h1>{user.name ? user.name : 'Anonymous'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
  )

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)