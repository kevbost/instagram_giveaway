import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import CodeBlock from 'react-copy-code'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CodeBlock innerHtml>
          <pre><div>{'wow'}</div></pre>
        </CodeBlock>
      </div>
    )
  }
}

export default App
