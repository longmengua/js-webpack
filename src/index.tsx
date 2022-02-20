import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

console.log('render', process?.env?.mode)
ReactDOM.render(<div className={'demo'}>demo</div>, document.getElementById('app'))