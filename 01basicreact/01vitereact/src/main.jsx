import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FirstComponent from './FirstComponent.jsx'

function MyApp() { //MyApp is just a function 
  return (
    <div>
      <h1>cusotm App!</h1>
    </div>
  )
}

//The app function is turned into the object at the end but here
//  we need a custom rendor code to run this custom react code 
// const reactElement = {
//   type: 'a',
//   props: {
//     href: "https://google.com",
//     targer: '_blank'
//   },
//   children: "click me to visit google"
// }


//Example how a react element is created using react.createElement
const reactElement = React.createElement(
  'a',
  {
    href: "https://google.com",
    targer: '_blank'
  },
  "click me to visit google"
)




//another example of react element
//this is a jsx element which is a syntax extension to javascript
//the upper element is not worked because naming convention is not followed for the react element
const anotherReactElement = (<a href="https://google.com" target="_blank">click me to visit google</a>)
console.log(reactElement);

createRoot(document.getElementById('root')).render(
  <div>
    <App />
    <FirstComponent />
    <MyApp />
    {anotherReactElement}
    {reactElement}
  </div>
)
