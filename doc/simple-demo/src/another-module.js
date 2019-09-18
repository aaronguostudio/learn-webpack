import _ from 'lodash'

console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
)

// import _ from 'lodash'
// import './style.css'

// function getComponent () {
//   return import(/* webpackChunkName: "lodash" */ 'lodash').then(
//     ({ default: _ }) => {
//       const elem = document.createElement('div')
//       elem.innerHTML = _.join(['Aaron', 'Guo'], ' ')
//       elem.classList.add('hello')
//       return elem
//     }
//   ).catch(err => {
//     new Error('error when imports')
//   })
// }

// getComponent().then(component => {
//   document.body.appendChild(component)
// })
