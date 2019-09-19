import _ from 'lodash'

function component () {
  const element = document.createElement('div')
  const button = document.createElement('button')
  const br = document.createElement('br')

  button.innerHTML = 'Load print.js'

  element.innerHTML = _.join(['Hello', 'World'], ' ')
  element.appendChild(br)
  element.appendChild(button)

  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(
    module => {
      const print = module.default
      print()
    }
  )

  return element
}

document.body.appendChild(component())






// import './style.css'

// function getComponent () {
//   return import(/* webpackChunkName: "lodash" */ 'lodash')
//     .then(({
//       default: _
//     }) => {
//       const element = document.createElement('div')
//       element.innerHTML = _.join(['Hello', 'webpack'], ' ')
//       return element
//     })
//     .catch(err => new Error('Error import'))
// }

// getComponent().then(component => {
//   document.body.appendChild(component)
// })

// async function getComponent () {
//   const element = document.createElement('div')
//   const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash')
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ')
//   return element
// }
