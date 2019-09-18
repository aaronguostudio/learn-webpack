import _ from 'lodash'
import './style.css'
import a from './components/a'

function component () {
  const elem = document.createElement('div')

  elem.innerHTML = _.join(['Aaron', 'Guo'], ' ')
  elem.classList.add('hello')
  a()

  // const myDemoImg = new Image()
  // myDemoImg.src = Demo
  // elem.appendChild(myDemoImg)
  return elem
}

document.body.appendChild(component())
