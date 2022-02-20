import React from 'react'
import ReactDOM from 'react-dom'

console.log('render', process?.env?.mode)
ReactDOM.render(<div>demo</div>, document.getElementById('app'))