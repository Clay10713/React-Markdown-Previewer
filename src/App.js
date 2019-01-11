import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl' /*Importing FormGroup, ControlLabel and FormControl */

let marked = require("marked")

class App extends Component {

  state = {
    markdown: ""
  }

  updateMarkdown = function(markdown){
    this.setState({markdown});
  }

  render() {
    let { markdown } = this.state;
    console.log(markdown);
    return (
      <div className="App container"> {/* Adding 'container' to use the Bootstrap class so add left & right margin space */}
        <div>
          <FormGroup controlId="formControlsTextArea">
            <ControlLabel>Markdown Input</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Please Enter Markdown" value={markdown} onChange={(event)=>this.updateMarkdown(event.target.value)}></FormControl>
          </FormGroup>
        </div>
        <div>
          <h1>Output of Markdown</h1>
          <div dangerouslySetInnerHTML = {{__html:marked(markdown)}}></div> {/* Passing in an object marked, with an parameter of __html */}
        </div>
      </div>
    );
  }
}

export default App;
